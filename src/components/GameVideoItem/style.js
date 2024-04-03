import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
`

/*  ..Styling GamingVideo..  */
export const GamingVideo = styled.li`
  list-style-type: none;
  width: 145px;
  //   height: 175px;
  margin: 5px;
  margin-bottom: 9px;
  @media (min-width: 576px) {
    width: 175px;
  }
`
export const GameImg = styled.img`
  width: 100%;
`
export const BottomCard = styled.div`
  width: 100%;
`
export const ViewsCard = styled.div`
  display: ${props => (!props.sm ? 'none' : 'flex')};
  flex-direction: column;
  //   padding: 7px;
  margin: 0;

  @media (min-width: 575px) {
    display: ${props => (props.sm ? 'none' : 'flex')};
    flex-direction: row;
    align-items: center;
  }
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 600;

  color: ${props => (props.dark ? '#f1f5f9' : '#1e293b')};
  letter-spacing: 0.6px;
  line-height: 1.5;
  margin: 0;
`
export const GameViews = styled.p`
  font-family: 'Roboto';
  //   display: ${props => (props.sm ? 'block' : 'none')};
  color: #475569; //#cbd5e1
  font-weight: 500;
  font-size: 11px;
  line-height: 1.5;
  margin: 0;
  margin-left: ${props => props.lg && '7px'};
`
