import styled from 'styled-components'

/*  Styling navbar   */
export const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  border: none;
  border-bottom: ${props => !props.dark && 'solid 2.2px #94a3b8'};
`
export const AppLogo = styled.img`
  width: 96px;
  @media screen and (min-width: 425px) and (max-width: 767px) {
    width: 125px;
  }
  @media screen and (min-width: 768px) {
    width: 135px;
  }
`
