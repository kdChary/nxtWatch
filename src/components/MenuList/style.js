/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

/*  Link component  */
export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 100%;
`

/*   Styling List   */
export const MenuCard = styled.ul`
  padding: 0;
  height: ${props => (props.pop ? '155px' : '195px')};
  width: ${props => (props.pop ? '90%' : '100%')};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const MenuItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //   border: solid 1px #4f4500;
`
export const MenuBtn = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${props =>
    props.active ? (props.dark ? '#383838' : '#f1f5f9') : 'transparent'};
  border: none;
  color: ${props =>
    props.active ? '#ff0b37' : props.dark ? '#ebebeb' : '#475569'};

  display: flex;
  align-items: center;
  font-size: 21px;
  padding-left: 28px;
  cursor: pointer;
  transition: 1s ease-in-out;
`
export const BtnText = styled.p`
  font-family: 'Roboto';
  letter-spacing: 0.6px;
  font-size: ${props => (props.active ? '15px' : '13px')};
  color: ${props =>
    props.dark ? '#ffffff' : props.active ? '#1e293b' : '#616e7c'};
  font-weight: ${props => (props.active ? 'bold' : '500')};
  //   font-style: ${props => props.active && 'bold'};
  margin-left: 9px;
  transition: 1s ease-in-out;
`
