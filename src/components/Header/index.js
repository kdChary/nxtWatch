import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import AppContext from '../../context/AppContext'
import MenuList from '../MenuList'
import {Navbar, AppLogo} from './style'

const Header = () => {
  const renderPopupMenu = isDark => (
    <div>
      <Popup modal trigger={<button type="button">Pp</button>}>
        {close => (
          <div>
            <button type="button" onClick={close}>
              X
            </button>
            <MenuList />
          </div>
        )}
      </Popup>
    </div>
  )
  const renderNavbar = isDark => (
    <Navbar>
      <AppLogo
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        }
        alt="website logo"
      />
      <div>{renderPopupMenu(isDark)}</div>
    </Navbar>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return <>{renderNavbar(isDark)}</>
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
