/* eslint-disable jsx-a11y/control-has-associated-label */
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {RiCloseFill, RiMenuFill, RiMoonFill, RiSunFill} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'

import AppContext from '../../context/AppContext'
import MenuList from '../MenuList'
import {
  Navbar,
  AppLogo,
  NavOptionsList,
  NavItem,
  NavOptionsBtn,
  PopupMenu,
  PopupBtn,
  ConfirmLogoutText,
  AlignPopupBtns,
  LogoutBtn,
  NavLogoutBtn,
} from './style'

const Header = props => {
  const logOut = () => {
    Cookies.remove('jwt_token')

    const {history} = props
    history.replace('/login')
  }

  const renderPopupMenu = isDark => (
    <Popup
      modal
      trigger={
        <NavOptionsBtn type="button" dark={isDark} mn>
          <RiMenuFill size="23" />
        </NavOptionsBtn>
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

  const renderLogOut = isDark => (
    <Popup
      modal
      trigger={
        <NavOptionsBtn dark={isDark} type="button" mn>
          <FiLogOut size="23" />
        </NavOptionsBtn>
      }
    >
      {close => (
        <PopupMenu dark={isDark} logOut>
          <ConfirmLogoutText dark={isDark}>
            Are you sure, you want to logout?
          </ConfirmLogoutText>
          <AlignPopupBtns>
            <LogoutBtn type="button" onClick={close} outline>
              Cancel
            </LogoutBtn>
            <LogoutBtn type="button" onClick={logOut}>
              Confirm
            </LogoutBtn>
          </AlignPopupBtns>
        </PopupMenu>
      )}
    </Popup>
  )

  const renderLogOutLg = isDark => (
    <Popup
      modal
      trigger={
        <NavLogoutBtn dark={isDark} type="button" onClick={logOut}>
          Logout
        </NavLogoutBtn>
      }
    >
      {close => (
        <PopupMenu dark={isDark} logOut>
          <ConfirmLogoutText dark={isDark}>
            Are you sure you want to logout?
          </ConfirmLogoutText>
          <AlignPopupBtns>
            <LogoutBtn type="button" onClick={close} outline>
              Cancel
            </LogoutBtn>
            <LogoutBtn type="button" onClick={logOut}>
              Confirm
            </LogoutBtn>
          </AlignPopupBtns>
        </PopupMenu>
      )}
    </Popup>
  )

  const renderNavbar = (isDark, toggleTheme) => (
    <Navbar dark={isDark}>
      <Link to="/">
        <AppLogo
          src={
            isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="website logo"
        />
      </Link>
      <NavOptionsList dark={isDark}>
        <NavItem>
          {isDark ? (
            <NavOptionsBtn
              dark={isDark}
              onClick={toggleTheme}
              data-testid="theme"
            >
              <RiSunFill size="23" />
            </NavOptionsBtn>
          ) : (
            <NavOptionsBtn
              dark={isDark}
              onClick={toggleTheme}
              data-testid="theme"
            >
              <RiMoonFill size="23" />
            </NavOptionsBtn>
          )}
        </NavItem>

        <NavItem lg>{renderPopupMenu(isDark)}</NavItem>

        <NavItem>
          <AppLogo
            dp
            hide
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </NavItem>

        <NavItem lg>{renderLogOut(isDark)}</NavItem>
        <NavItem sm>{renderLogOutLg(isDark)}</NavItem>
      </NavOptionsList>
    </Navbar>
  )

  return (
    <AppContext.Consumer>
      {value => {
        const {isDark, toggleTheme} = value
        return <>{renderNavbar(isDark, toggleTheme)}</>
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
