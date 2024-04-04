import styled from 'styled-components'
import {Link} from 'react-router-dom'

/*  ...Styling Link Item...  */
export const LinkItem = styled(Link)`
  text-decoration: none;
  margin: 7px 0;
  @media (min-width: 576px) {
    margin: 7px;
  }
  //   border: solid 1px #fef000;
`

/*  ...Styling List Item...  */
export const VideoDetails = styled.li`
  list-style-type: none;
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0;

  @media (min-width: 576px) {
    // width: 175px;
    // height: 195px;
    margin: 5px;
    flex-direction: row;
  }
  //   border: solid 1px #00f000;
`

/*  ...Styling Images...  */
export const Thumbnail = styled.img`
  width: 100%;
  height: 177.39px;
  @media (min-width: 576px) {
    width: 50%;
  }
`
export const ChannelLogo = styled.img`
  width: 28px;
  height: 28px;
  align-self: flex-start;
  margin: 7px 5px auto 2px;
`
/*  ...Styling Text content...  */
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 11px;
  font-weight: 600;
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  line-height: 1.5;
  //   letter-spacing: 0.6px;
  margin-bottom: 0;
  margin-top: 5px;
  @media (min-width: 576px) {
    font-size: 15px;
    text-overflow: auto;
  }
`
export const ChannelDetails = styled(VideoTitle)`
  font-size: 9px;
  font-weight: 400;
  color: #94a3b8;
  display: ${props => (props.lg ? 'none' : 'flex')};
  align-items: center;
  margin: 0;
  //   margin-top: 3px;
  @media (min-width: 576px) {
    font-size: 11px;
    font-weight: 500;
    display: ${props => (props.sm ? 'none' : 'flex')};
  }
`

/*  ...Styling Containers...  */
export const BottomCard = styled.div`
  display: flex;
  @media (min-width: 576px) {
    margin-left: 3px;
  }
`
export const ProfileImgCard = styled.div``
export const ChannelCard = styled.div`
  display: flex;
  // flex-direction: column;
  //   align-items: center;
  margin: 0;
  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`
export const VideoItemCard = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  //   align-items: center;
  margin-bottom: 5px;
`
