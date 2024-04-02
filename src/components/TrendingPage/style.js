import styled from 'styled-components'

/*   ..Styling Responsive Container..  */
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
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

/*  ...Styling List...  */
export const VideosList = styled.ul`
  max-width: 100%;
  height: 75vh;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 575px) {
    // flex-direction: row;
    // justify-content: center;
    // flex-wrap: wrap;
    width: 100%;
  }
  scroll-behavior: smooth;
  overflow: auto;
  //   border: solid 1px green;
`

/*  ..Styling Trending Page..  */
export const TrendingSection = styled(MainContainer)`
  height: 90vh;
`
export const BannerCard = styled.div`
  height: 96px;
  background-color: ${props => (props.dark ? '#181818' : '#f1f1f1')};
  display: flex;
  //   justify-content: center;
  align-items: center;
  padding-left: 23px;
  @media (min-width: 576px) {
    padding-left: 35px;
  }
`
export const BannerText = styled.h2`
  font-family: 'Roboto';
  font-style: oblique;
  letter-spacing: 0.6px;
  color: ${props => (props.dark ? '#f9fafc' : '#1e293b')};
`
export const IconCard = styled.div`
  height: 56px;
  width: 56px;
  @media (min-width: 576px) {
    height: 76px;
    width: 76px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#e2e8f0')};
  margin-right: 9px;

  border: solid 2px ${props => (props.dark ? '#0f0f0f' : '#e2e8f0')};
  border-radius: 53px;
`
