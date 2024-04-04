import {RiMenuAddFill} from 'react-icons/ri'

import {
  ResponsiveContainer,
  MainContainer,
  ErrorCard,
  ErrorImg,
  ErrorText,
  ErrorHeading,
  VideosList,
  TrendingSection,
  BannerCard,
  IconCard,
  BannerText,
} from './style'
import AppContext from '../../context/AppContext'
import TrendingItem from '../TrendingItem'
import Header from '../Header'
import Sidebar from '../Sidebar'

const SavedVideos = () => {
  const renderErrorView = isDark => (
    <ErrorCard dark={isDark} isError>
      <ErrorImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />

      <ErrorHeading dark={isDark}>No saved videos found</ErrorHeading>

      <ErrorText dark={isDark}>
        You can save your videos while watching them
      </ErrorText>
    </ErrorCard>
  )

  const renderTrendingVideos = (isDark, savedVideos) => (
    <TrendingSection dark={isDark}>
      <BannerCard dark={isDark} data-testid="banner">
        <IconCard dark={isDark}>
          <RiMenuAddFill size="32" color="#ff0b37" />
        </IconCard>
        <BannerText dark={isDark}>Saved Videos</BannerText>
      </BannerCard>
      {savedVideos.length === 0 ? (
        renderErrorView(isDark)
      ) : (
        <VideosList>
          {savedVideos.map(video => (
            <TrendingItem key={video.id} videoData={video} isDark={isDark} />
          ))}
        </VideosList>
      )}
    </TrendingSection>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value

        return (
          <MainContainer dark={isDark} data-testid="trending">
            <Header />
            <ResponsiveContainer dark={isDark}>
              <Sidebar />

              {renderTrendingVideos(isDark, savedVideos)}
            </ResponsiveContainer>
          </MainContainer>
        )
      }}
    </AppContext.Consumer>
  )
}
export default SavedVideos
