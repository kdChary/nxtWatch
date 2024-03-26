import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import {
  LinkItem,
  VideoDetails,
  Thumbnail,
  ChannelLogo,
  VideoTitle,
  ChannelDetails,
  DetailsSection,
  ChannelDescriptionSection,
  AlignDetails,
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

        <ChannelDescriptionSection>
          <ChannelLogo src={profileUrl} alt="channel logo" />

          <div>
            <VideoTitle dark={isDark}>{title}</VideoTitle>

            <DetailsSection>
              <ChannelDetails>{channelName}</ChannelDetails>

              <AlignDetails>
                <ChannelDetails dark={isDark} sm>
                  <BsDot size="21" />
                  {`${views} views`}
                </ChannelDetails>
                <ChannelDetails dark={isDark} lg>
                  {`${views} views`}
                </ChannelDetails>

                <ChannelDetails dark={isDark}>
                  <BsDot size="21" />
                  {published}
                </ChannelDetails>
              </AlignDetails>
            </DetailsSection>
          </div>
        </ChannelDescriptionSection>
      </VideoDetails>
    </LinkItem>
  )
}

export default VideoItem
