/* eslint-disable jsx-a11y/control-has-associated-label */
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {RiCloseFill, RiMenuFill} from 'react-icons/ri'

import AppContext from '../../context/AppContext'
import MenuList from '../MenuList'
import {Navbar, AppLogo, PopupMenu, PopupBtn} from './style'

const Header = () => {
  const renderPopupMenu = isDark => (
    <Popup
      modal
      trigger={
        <button type="button">
          <RiMenuFill />
        </button>
      }
    >
      {close => (
        <PopupMenu dark={isDark}>
          <PopupBtn type="button" dark={isDark} onClick={close}>
            <RiCloseFill />
          </PopupBtn>
          <MenuList />
        </PopupMenu>
      )}
    </Popup>
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
