/* eslint-disable jsx-a11y/control-has-associated-label */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoIosClose} from 'react-icons/io'
import {BiSearchAlt} from 'react-icons/bi'

import AppContext from '../../context/AppContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../HomeVideoItem'

// TODO: update filter method.
// TODO: CHANGE error views styling.

import {
  MainContainer,
  ResponsiveContainer,
  AlignNonVideoItems,
  HomeDetailsCard,
  BannerCard,
  BannerImageCard,
  NxtWatchLogo,
  BannerBtn,
  BannerText,
  ErrorCard,
  EmptySearchCard,
  ErrorImg,
  ErrorText,
  ErrorHeading,
  RetryBtn,
  SearchFilter,
  Input,
  SearchBtn,
  VideosList,
} from './style'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    fetchStatus: apiStatus.initial,
    allVideosList: [],
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    this.fetchVideosData()
  }

  modifyFetchedData = data => ({
    channelName: data.channel.name,
    profileUrl: data.channel.profile_image_url,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    views: data.view_count,
  })

  fetchVideosData = async (value = '') => {
    this.setState({fetchStatus: apiStatus.inProgress})
    // const {searchInput} = this.state
    const token = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${value}`
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
      const modifiedData = data.videos.map(video =>
        this.modifyFetchedData(video),
      )
      //   console.log(modifiedData)
      this.setState({allVideosList: modifiedData})
    } else {
      this.setState({fetchStatus: apiStatus.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  toggleBannerView = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  retryClicked = () => {
    this.setState({searchInput: ''}, this.fetchVideosData)
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state

    this.fetchVideosData(searchInput)
  }

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

  renderEmptySearchView = isDark => (
    <EmptySearchCard dark={isDark}>
      <ErrorImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <ErrorHeading dark={isDark}>No Search results found</ErrorHeading>

      <ErrorText dark={isDark}>
        Try different key words or remove search filter
      </ErrorText>

      <RetryBtn type="button" onClick={this.retryClicked} dark={isDark}>
        Retry
      </RetryBtn>
    </EmptySearchCard>
  )

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

  renderBanner = () => (
    <BannerCard data-testid="banner">
      <BannerImageCard>
        <NxtWatchLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>But Nxt Watch Premium prepaid plans with UPI</BannerText>

        <BannerBtn type="button">GET IT NOW</BannerBtn>
      </BannerImageCard>
      <BannerBtn
        sm
        type="button"
        onClick={this.toggleBannerView}
        data-testid="close"
      >
        <IoIosClose />
      </BannerBtn>
    </BannerCard>
  )

  renderSearchFilter = isDark => {
    const {searchInput} = this.state
    return (
      <SearchFilter dark={isDark}>
        <Input
          dark={isDark}
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          placeholder="Search"
        />
        <SearchBtn
          dark={isDark}
          type="button"
          onClick={this.onClickSearchIcon}
          data-testid="searchButton"
        >
          <BiSearchAlt />
        </SearchBtn>
      </SearchFilter>
    )
  }

  renderHomePage = isDark => {
    const {showBanner, allVideosList} = this.state
    // const filteredVideos = allVideosList.filter(video =>
    //   video.title.toLowerCase().includes(searchInput.toLowerCase()),
    // )
    const isListEmpty = allVideosList.length === 0

    return (
      <HomeDetailsCard dark={isDark}>
        {showBanner && this.renderBanner(isDark)}
        {this.renderSearchFilter(isDark)}
        {isListEmpty ? (
          this.renderEmptySearchView(isDark)
        ) : (
          <VideosList>
            {allVideosList.map(video => (
              <VideoItem key={video.id} videoData={video} isDark={isDark} />
            ))}
          </VideosList>
        )}
      </HomeDetailsCard>
    )
  }

  successView = isDark => {
    const {fetchStatus} = this.state

    switch (fetchStatus) {
      case apiStatus.inProgress:
        return <>{this.renderLoadingView(isDark)}</>

      case apiStatus.success:
        return <>{this.renderHomePage(isDark)}</>

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
            <MainContainer data-testid="home">
              <Header />
              <ResponsiveContainer dark={isDark}>
                <Sidebar />
                {this.successView(isDark)}
              </ResponsiveContainer>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
