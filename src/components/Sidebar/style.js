import styled from 'styled-components'

/*  Styling nav  */
export const SideBar = styled.nav`
  width: 212px;
  min-height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  border: none;
  //   border-right: ${props => !props.dark && 'solid 2.2px #94a3b8'};
  @media (max-width: 767px) {
    display: none;
  }
`

/*  Styling Contact us Section  */
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  //   align-items: center;
`
export const SocialIconsCard = styled(ContactUsSection)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;
  //   border: solid 1px #d0d0d0;
`
export const SocialIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 7px;
`
export const TextContent = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.dark ? '#f0fcff' : '#1e293b')};
  line-height: 1.5;
`
export const Title = styled(TextContent)`
  font-size: 17px;
  font-weight: 600;
  color: ${props => (props.dark ? '#feffff' : '#231f20')};
  letter-spacing: 0.7px;
`
