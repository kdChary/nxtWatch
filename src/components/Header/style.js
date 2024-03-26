import styled from 'styled-components'

/*  Styling navbar and Logo.  */
export const Navbar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 13px;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  border: none;
  border-bottom: ${props => !props.dark && 'solid 2.2px #94a3b8'};
`
export const AppLogo = styled.img`
  width: ${props => (props.dp ? '25px' : '96px')};
  display: ${props => props.dp && 'none'};

  @media screen and (min-width: 425px) and (max-width: 767px) {
    width: ${props => (props.dp ? '25px' : '125px')};
  }

  @media screen and (min-width: 768px) {
    width: ${props => (props.dp ? '25px' : '135px')};
    display: ${props => props.dp && 'block'};
  }
`

/*  Styling Options  */
export const NavOptionsList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 125px;
  @media screen and (min-width: 768px) {
    width: 245px;
  }
  //   border: solid 1px #cdcdcd;
`
export const NavItem = styled.li`
  list-style-type: none;
  display: block;

  @media (min-width: 768px) {
    display: ${props => props.lg && 'none'};
  }
  @media (max-width: 767px) {
    display: ${props => props.sm && 'none'};
  }
`

export const NavOptionsBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  font-size: 19px;
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  transition: 1s ease-in-out;
  &:hover {
    rotate: ${props => (props.mn ? '90deg' : '45deg')};
    color: #0fef0f;
  }
  cursor: pointer;
`

/*   Styling PopUp Section   */
export const PopupMenu = styled.div`
  width: ${props => (props.logOut ? '290px' : '240px')};
  height: ${props => (props.logOut ? '140px' : '240px')};

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
  background-color: ${props => (props.dark ? '#212121' : 'transparent')};
  border: ${props => (props.dark ? 'solid 1.2px #ffffff' : 'none')};
  border-radius: ${props => (props.dark ? '50%' : '')};
  align-self: flex-end;
  margin: -19px -3px -11px 0;
  transition: 1s ease-in-out;
  font-size: 19px;
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  &:hover {
    rotate: y ${props => (props.mn ? '90deg' : '45deg')};
    color: #0fef0f;
  }
  cursor: pointer;
`
export const ConfirmLogoutText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.7px;
  color: ${props => (props.dark ? '#ffffff' : '#1e293b')};
`

export const LogoutBtn = styled.button`
  width: 96px;
  border: solid 2px ${props => (props.outline ? '#94a3b8' : '#4f46e5')};
  border-radius: 3px;
  background-color: ${props => (props.outline ? 'transparent' : '#4f46e5')};
  color: ${props => (props.outline ? '#94a3b8' : '#ffffff')};

  font-weight: 500;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 3.6px 9px;
  cursor: pointer;
`
export const AlignPopupBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
export const NavLogoutBtn = styled.button`
  border: solid 2px ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  border-radius: 3px;
  color: ${props => (props.dark ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  padding: 3px 9.5px;

  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 600;

  width: 63px;
  transition: 1s ease-in-out;
  &:hover {
    // rotate: y -45deg;
    color: #0fef0f;
    border: dashed 2px #0fef0f;
    border-style: ;
  }
  cursor: pointer;
`
