import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  LinkItem,
  VideoDetails,
  Thumbnail,
  ChannelLogo,
  VideoTitle,
  BottomCard,
  ProfileImgCard,
  ChannelCard,
  VideoItemCard,
  ChannelDetails,
} from './style'

const VideoItem = props => {
  const {videoData, isDark} = props
  const {
    channelName,
    profileUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    views,
  } = videoData
  const published = formatDistanceToNow(new Date(publishedAt), {
    assSuffix: true,
  })

  return (
    <LinkItem to={`/videos/${id}`}>
      <VideoDetails>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />

        <BottomCard>
          <ProfileImgCard>
            <ChannelLogo src={profileUrl} alt="channel logo" />
          </ProfileImgCard>

          <VideoItemCard>
            <VideoTitle dark={isDark}>{title}</VideoTitle>

            <ChannelCard>
              <ChannelDetails dark={isDark}>{channelName}</ChannelDetails>
              <ChannelDetails sm dark={isDark}>
                <BsDot size="17" /> {`${views}views`} <BsDot size="17" />{' '}
                {published}
              </ChannelDetails>
              <ChannelDetails lg dark={isDark}>
                {`${views}views`} <BsDot size="17" /> {published}
              </ChannelDetails>
            </ChannelCard>
          </VideoItemCard>
        </BottomCard>
      </VideoDetails>
    </LinkItem>
  )
}

export default VideoItem
