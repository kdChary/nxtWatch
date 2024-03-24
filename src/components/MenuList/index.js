import {HiHome, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import AppContext from '../../context/AppContext'
import {LinkItem, MenuCard, MenuItems, MenuBtn, BtnText} from './style'

const tabConstants = {
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuList = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark, activeTab, changeTab} = value

      return (
        <MenuCard>
          <LinkItem to="/">
            <MenuItems isDark active={activeTab === tabConstants.home}>
              <MenuBtn
                type="button"
                dark={isDark}
                active={activeTab === tabConstants.home}
                onClick={() => changeTab(tabConstants.home)}
              >
                <HiHome />
                <BtnText dark={isDark} active={activeTab === tabConstants.home}>
                  Home
                </BtnText>
              </MenuBtn>
            </MenuItems>
          </LinkItem>

          <LinkItem to="/trending">
            <MenuItems>
              <MenuBtn
                type="button"
                dark={isDark}
                active={activeTab === tabConstants.trending}
                onClick={() => changeTab(tabConstants.trending)}
              >
                <HiFire />
                <BtnText
                  dark={isDark}
                  active={activeTab === tabConstants.trending}
                >
                  Trending
                </BtnText>
              </MenuBtn>
            </MenuItems>
          </LinkItem>

          <LinkItem to="/gaming">
            <MenuItems>
              <MenuBtn
                type="button"
                dark={isDark}
                active={activeTab === tabConstants.gaming}
                onClick={() => changeTab(tabConstants.gaming)}
              >
                <SiYoutubegaming />
                <BtnText
                  dark={isDark}
                  active={activeTab === tabConstants.gaming}
                >
                  Gaming
                </BtnText>
              </MenuBtn>
            </MenuItems>
          </LinkItem>

          <MenuItems>
            <LinkItem to="/saved-videos">
              <MenuBtn
                type="button"
                dark={isDark}
                active={activeTab === tabConstants.savedVideos}
                onClick={() => changeTab(tabConstants.savedVideos)}
              >
                <RiMenuAddFill />
                <BtnText
                  dark={isDark}
                  active={activeTab === tabConstants.savedVideos}
                >
                  Saved videos
                </BtnText>
              </MenuBtn>
            </LinkItem>
          </MenuItems>
        </MenuCard>
      )
    }}
  </AppContext.Consumer>
)

export default MenuList
