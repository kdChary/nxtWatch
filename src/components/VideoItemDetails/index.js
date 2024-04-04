import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Cookies from 'js-cookie'

import ReactPlayer from 'react-player/lazy'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  AlignNonVideoItems,
  ErrorCard,
  ErrorImg,
  ErrorText,
  ErrorHeading,
  RetryBtn,
  MainContainer,
  ResponsiveContainer,
  VideoItemContainer,
  VideoCard,
  DetailsHeader,
  UserActionsCard,
  ViewsCard,
  VideoText,
  LikeAndSaveList,
  ListItem,
  ListBtn,
  BtnText,
  VideoTitle,
  ChannelDetails,
  ChannelLogo,
  VideoDescription,
} from './style'
import './index.css'
import Header from '../Header'
import SideBar from '../Sidebar'
import AppContext from '../../context/AppContext'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    fetchStatus: apiStatus.initial,
    videoDetails: {},
    liked: false,
    disLiked: false,
  }

  componentDidMount() {
    this.fetchVideoData()
  }

  modifyFetchedData = data => ({
    channelName: data.channel.name,
    channelLogo: data.channel.profile_image_url,
    subscribers: data.channel.subscriber_count,
    description: data.description,
    title: data.title,
    id: data.id,
    published: formatDistanceToNow(new Date(data.published_at), {
      addSuffix: true,
    }),
    thumbnail: data.thumbnail_url,
    videoUrl: data.video_url,
    views: data.view_count,
  })

  retryClicked = () => {
    this.fetchVideoData()
  }

  clickedLike = () => {
    const {liked} = this.state
    if (liked) {
      this.setState({liked: false})
    } else {
      this.setState({liked: true, disLiked: false})
    }
  }

  clickedDisLike = () => {
    const {disLiked} = this.state
    if (disLiked) {
      this.setState({disLiked: false})
    } else {
      this.setState({disLiked: true, liked: false})
    }
  }

  fetchVideoData = async () => {
    this.setState({fetchStatus: apiStatus.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
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
      const modifiedData = this.modifyFetchedData(data.video_details)

      this.setState({videoDetails: modifiedData})

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

  renderVideoItem = (isDark, addVideos, savedVideos) => {
    const {videoDetails, liked, disLiked} = this.state
    const {
      id,
      videoUrl,
      title,
      views,
      published,
      channelLogo,
      channelName,
      subscribers,
      description,
    } = videoDetails

    const index = savedVideos.findIndex(video => video.id === id)
    const SavedText = index > -1 ? 'Saved' : 'Save'
    const active = index >= 0

    const clickedSave = () => {
      addVideos(videoDetails)
    }

    return (
      <VideoItemContainer>
        <VideoCard>
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            className="player"
          />
        </VideoCard>
        <div>
          <DetailsHeader>
            <VideoTitle dark={isDark}>{title}</VideoTitle>

            <UserActionsCard>
              <ViewsCard>
                <VideoText>{views} views</VideoText>

                <BsDot color="#94a3b8" size="21" />

                <VideoText>{published}</VideoText>
              </ViewsCard>

              <LikeAndSaveList>
                <ListItem>
                  <ListBtn
                    type="button"
                    onClick={this.clickedLike}
                    isActive={liked && true}
                  >
                    <AiOutlineLike />
                    <BtnText>Like</BtnText>
                  </ListBtn>
                </ListItem>

                <ListItem>
                  <ListBtn
                    type="button"
                    onClick={this.clickedDisLike}
                    isActive={disLiked}
                  >
                    <AiOutlineDislike />
                    <BtnText>Dislike</BtnText>
                  </ListBtn>
                </ListItem>

                <ListItem>
                  <ListBtn
                    type="button"
                    onClick={clickedSave}
                    isActive={active}
                  >
                    <MdPlaylistAdd />
                    <BtnText>{SavedText}</BtnText>
                  </ListBtn>
                </ListItem>
              </LikeAndSaveList>
            </UserActionsCard>
          </DetailsHeader>

          <hr className="line" />

          <div className="bottom-card">
            <ChannelDetails>
              <div className="channel-logo-card">
                <ChannelLogo src={channelLogo} alt="channel logo" />
              </div>
              <div className="channel-details">
                <VideoTitle ch dark={isDark}>
                  {channelName}
                </VideoTitle>
                <VideoText dark={isDark}>{subscribers} subscribers</VideoText>
              </div>
            </ChannelDetails>
            <VideoDescription dark={isDark}>{description}</VideoDescription>
          </div>
        </div>
      </VideoItemContainer>
    )
  }

  renderVideoItemDetailsPage = (isDark, addVideos, savedVideos) => {
    const {fetchStatus} = this.state

    switch (fetchStatus) {
      case apiStatus.inProgress:
        return this.renderLoadingView(isDark)

      case apiStatus.success:
        return this.renderVideoItem(isDark, addVideos, savedVideos)

      case apiStatus.failure:
        return this.renderErrorView(isDark)

      default:
        return null
    }
  }

  render() {
    // const {videoDetails} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark, addVideos, savedVideos} = value

          return (
            <MainContainer dark={isDark} data-testid="videoItemDetails">
              <Header />
              <ResponsiveContainer dark={isDark}>
                <SideBar />
                {this.renderVideoItemDetailsPage(
                  isDark,
                  addVideos,
                  savedVideos,
                )}
              </ResponsiveContainer>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
