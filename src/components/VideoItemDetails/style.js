import styled from 'styled-components'

/*   ..Styling Responsive Container..  */
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#f9f9f9')};
  margin: 0;
`
export const MainContainer = styled(ResponsiveContainer)`
  margin: 0;
  flex-direction: column;
`
export const AlignNonVideoItems = styled(ResponsiveContainer)`
  // height: {90vh - 108px};
  justify-content: center;
  align-items: center;
`

/*  ..Styling Error section..  */
export const ErrorCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: transparent;
  margin-top: 11px;
`
export const ErrorImg = styled.img`
  width: 210px;
  @media (min-width: 576px) {
    width: 300px;
  }
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  //   font-weight: 500;
  font-size: 9px;
  line-height: 1.5;
  color: ${props => (props.dark ? '#cbd5e1' : '#7e858e')};
  text-align: center;
  @media (min-width: 576px) {
    font-size: 11px;
  }
`
export const ErrorHeading = styled.h3`
  letter-spacing: 0.6px;
  font-family: 'Roboto';
  text-align: center;
  color: ${props => (props.dark ? '#feffff' : '#1e293b')};
  margin-bottom: 0;
  @media (min-width: 576px) {
    // font-size: 11px;
  }
`
export const RetryBtn = styled.button`
  width: 72px;
  border: solid 2px #4f46e5;
  border-radius: 4px;
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;

  padding: 5px 9px;
  color: #ffffff;
  cursor: pointer;
  transition: 1s ease-in-out;
  &:hover {
    border: solid 2px #4ffc0f;
    background-color: transparent;
    color: #4ffc0f;
  }
`

/*  ..Styling VideoItemDetails..  */
export const VideoItemContainer = styled(MainContainer)`
  min-height: 90vh;
  background-color: transparent;
  padding-top: 7px;
`
export const VideoCard = styled.div`
  width: 100%;
  position: relative;
  height: 360px;
  padding: 0 7.3px;
  @media (max-width: 575px) {
    height: 235px;
    // overflow: auto;
  }
`
export const UserActionsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 575px) {
    flex-direction: row;
    align-items: center;
  }
`
export const ViewsCard = styled.div`
  display: flex;
  align-items: center;
`
export const DetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
`

/* ..Styling Text Content.. */
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => (props.dark ? '#ffffff' : '#231f20')};
  @media (min-width: 575px) {
    font-size: 17px;
  }
  margin-top: ${props => props.ch && '0'};
`
export const VideoDescription = styled(VideoTitle)`
  color: ${props => (props.dark ? '#e2e8f0' : '#64748b')};
  font-size: 12px;
  font-weight: 400;
  margin-left: 13px;
  @media (min-width: 575px) {
    margin-left: 74px;
  }
`
export const VideoText = styled(VideoTitle)`
  color: #94a3b8;
  font-size: 10.3px;
  margin: 0;
  margin-right: 5px;
  @media (min-width: 576px) {
    font-size: 12.3px;
  }
`

/*  ..Styling Like Unlike & Save Btns..  */
export const LikeAndSaveList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
`
export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0;
`
export const ListBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 0;
  margin-right: 9px;

  color: #94a3b8;
  color: ${props => props.isActive && '#4f46e5'};
  font-size: 19px;
  cursor: pointer;
  outline: none;
  @media (min-width: 576px) {
    &:hover {
      color: #4f46e5;
    }
  }
`
export const BtnText = styled(VideoText)`
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  margin-left: 2.5px;
  color: inherit;
`

/*  ..Styling Channel Details..   */
export const ChannelDetails = styled.div`
  display: flex;
  gap: 10px;
  margin: 21px 0;
`
export const ChannelLogo = styled.img`
  width: 56px;
  height: 56px;
`
