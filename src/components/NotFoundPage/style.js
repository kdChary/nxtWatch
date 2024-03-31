import styled from 'styled-components'

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
export const NotFoundPage = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: flex-start;
    width: auto;
    height: 100vh;
    // align-items: center;
  }
`
