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

/*   Styling PopUp Section   */
export const PopupMenu = styled.div`
  width: 215px;
  height: 240px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  border: solid 2px ${props => (props.dark ? '#212121' : '#ffffff')};
  border-radius: 9px;
  box-shadow: ${props =>
    props.dark ? '0 4px 16px 0 #0f0f0f' : '0 4px 16px 0 #94a3b8'};
`
export const PopupBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin: -19px -3px -11px 0;
  transition: 1s ease-in-out;
  font-size: 19px;
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  &:hover&:active {
    rotate: y -45deg;
    color: #ff000f;
  }
`
