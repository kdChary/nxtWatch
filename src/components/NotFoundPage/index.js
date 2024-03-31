import AppContext from '../../context/AppContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundPage,
  ErrorCard,
  ErrorImg,
  ErrorText,
  ErrorHeading,
} from './style'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const image = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundPage dark={isDark}>
            <Sidebar />
            <ErrorCard>
              <ErrorImg src={image} alt="not found" />
              <ErrorHeading dark={isDark}>Page Not Found</ErrorHeading>
              <ErrorText dark={isDark}>
                We are sorry, the page you requested could not be found.
              </ErrorText>
            </ErrorCard>
          </NotFoundPage>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
