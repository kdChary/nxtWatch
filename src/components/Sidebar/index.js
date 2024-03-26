import AppContext from '../../context/AppContext'
import MenuList from '../MenuList'

import {
  SideBar,
  ContactUsSection,
  SocialIconsCard,
  SocialIcon,
  TextContent,
  Title,
} from './style'

const Sidebar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <SideBar dark={isDark}>
          <MenuList />
          <ContactUsSection>
            <Title dark={isDark}>Contact Us</Title>
            <SocialIconsCard>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsCard>
            <TextContent dark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </TextContent>
          </ContactUsSection>
        </SideBar>
      )
    }}
  </AppContext.Consumer>
)

export default Sidebar
