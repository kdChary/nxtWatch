import styled from 'styled-components'

/*   ..Styling Responsive Container..  */
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
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

/*  ..Styling Banner section..  */
export const BannerCard = styled.div`
  width: 100%;
  height: 158px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 5px 11px;
  //   border: solid 1px #ef0ce0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    // height: 297px;
    background-position: center;
  }
  //   margin-bottom: 15px;
`
export const BannerImageCard = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const NxtWatchLogo = styled.img`
  width: 96px;
  @media (min-width: 576px) {
    width: 125px;
  }
`
export const BannerBtn = styled.button`
  align-self: flex-start;
  border: ${props => (!props.sm ? 'solid 2px #313131' : 'none')};

  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: ${props => (props.sm ? '27px' : '11px')};
  padding: ${props => !props.sm && '3px 9px'};
  color: #1e3920;

  cursor: pointer;
  outline: none;
  transition: 1s ease-out;
  &:hover {
    rotate: ${props => props.sm && '270deg'};
    color: #4ffef4;
  }
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 11px;
  line-height: 1.5;
  color: #1e293b;
`

/*  ...Styling Home section...  */
export const HomeDetailsCard = styled(ResponsiveContainer)`
  margin: 0;
  flex-direction: column;
`
export const VideosList = styled.ul`
  max-width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 575px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  scroll-behavior: smooth;
  overflow: auto;
`
export const SearchFilter = styled.div`
  width: 300px;
  height: 29px;
  background-color: transparent;
  border: solid 1.4px ${props => (props.dark ? '#7e858e' : '#94a3b8')};
  border-radius: 3px;
  margin-top: 7px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`
export const Input = styled.input`
  width: 85%;
  border: none;
  background-color: transparent;
  border-right: solid 1.7px ${props => (props.dark ? '#7e858e' : '#94a3b8')};

  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.6px;
  color: ${props => (props.dark ? '#f0f0f0' : '#383838')};

  outline: none;
  padding-left: 13px;
  align-self: stretch;
`
export const SearchBtn = styled.button`
  width: 15%;
  border: none;
  background-color: ${props => (props.dark ? '#313131' : '#f4f4f4')};
  align-self: stretch;
  font-size: 23px;
  color: #64748b;
  transition: 1s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ff0b37;
  }
`

/*  ..Styling Error section..  */
export const ErrorCard = styled.div`
  width: 100%;
  //   height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: transparent;
  //   border: solid 1px #ef0ce0;
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
export const EmptySearchCard = styled(ErrorCard)`
  height: auto;
`
