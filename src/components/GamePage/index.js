import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import {
  ResponsiveContainer,
  AlignNonVideoItems,
  MainContainer,
  ErrorCard,
  ErrorImg,
  ErrorText,
  ErrorHeading,
  RetryBtn,
  VideosList,
  TrendingSection,
  BannerCard,
  IconCard,
  BannerText,
} from './style'
import AppContext from '../../context/AppContext'
import GamingItem from '../GameVideoItem'
import Header from '../Header'
import Sidebar from '../Sidebar'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideos extends Component {
  state = {gamingVideosList: [], fetchStatus: apiStatus.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  retryClicked = () => {
    this.getTrendingVideos()
  }

  modifyFetchedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    views: data.view_count,
  })

  getGamingVideos = async () => {
    this.setState({fetchStatus: apiStatus.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      this.setState({fetchStatus: apiStatus.success})
      const data = await response.json()

      const modifiedData = data.videos.map(itemData =>
        this.modifyFetchedData(itemData),
      )
      this.setState({gamingVideosList: modifiedData})

      //   console.log(data)
    } else {
      this.setState({fetchStatus: apiStatus.failure})
    }
  }

  renderLoadingView = isDark => (
    <AlignNonVideoItems dark={isDark} data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDark ? '#0fef0f' : '#00306e'}
        height="50"
        width="50"
      />
    </AlignNonVideoItems>
  )

  renderErrorView = isDark => {
    const errorImg = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <ErrorCard dark={isDark} isError>
        <ErrorImg src={errorImg} alt="failure view" />

        <ErrorHeading dark={isDark}>Oops! Something Went Wrong</ErrorHeading>

        <ErrorText dark={isDark}>
          We are having some trouble to complete your request. Please try again.
        </ErrorText>

        <RetryBtn type="button" onClick={this.retryClicked}>
          Retry
        </RetryBtn>
      </ErrorCard>
    )
  }

  renderGamingVideos = isDark => {
    const {gamingVideosList} = this.state

    return (
      <TrendingSection dark={isDark}>
        <BannerCard dark={isDark} data-testid="banner">
          <IconCard dark={isDark}>
            <SiYoutubegaming size="32" color="#ff0b37" />
          </IconCard>
          <BannerText dark={isDark}>Gaming</BannerText>
        </BannerCard>
        <VideosList>
          {gamingVideosList.map(video => (
            <GamingItem key={video.id} videoData={video} isDark={isDark} />
          ))}
        </VideosList>
      </TrendingSection>
    )
  }

  renderGamingPage = isDark => {
    const {fetchStatus} = this.state

    switch (fetchStatus) {
      case apiStatus.inProgress:
        return <>{this.renderLoadingView(isDark)}</>

      case apiStatus.success:
        return <>{this.renderGamingVideos(isDark)}</>

      case apiStatus.failure:
        return <>{this.renderErrorView(isDark)}</>

      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <MainContainer dark={isDark} data-testid="gaming">
              <Header />
              <ResponsiveContainer dark={isDark}>
                <Sidebar />
                {this.renderGamingPage(isDark)}
              </ResponsiveContainer>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default GamingVideos
