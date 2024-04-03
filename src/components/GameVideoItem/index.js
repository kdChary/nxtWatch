import {
  LinkItem,
  GamingVideo,
  GameImg,
  BottomCard,
  GameTitle,
  GameViews,
  ViewsCard,
} from './style'

const GamingItem = props => {
  const {videoData, isDark} = props

  const {id, title, thumbnailUrl, views} = videoData

  return (
    <LinkItem to={`videos/${id}`}>
      <GamingVideo>
        <GameImg src={thumbnailUrl} alt="video thumbnail" />
        <BottomCard>
          <GameTitle dark={isDark}>{title}</GameTitle>

          <ViewsCard sm>
            <GameViews dark={isDark}>{views} Watching</GameViews>
            <GameViews dark={isDark}>Worldwide</GameViews>
          </ViewsCard>

          <ViewsCard>
            <GameViews dark={isDark}>{views} Watching</GameViews>
            <GameViews lg dark={isDark}>
              Worldwide
            </GameViews>
          </ViewsCard>
        </BottomCard>
      </GamingVideo>
    </LinkItem>
  )
}

export default GamingItem
