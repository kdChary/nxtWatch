import styled from 'styled-components'

// Styling Containers...

/*   styling LoginForm container   */
export const LoginFormContainer = styled.div`
  width: 80%;
  height: 360px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 390px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  box-shadow: ${props => !props.dark && '0 4px 16px 0 #e2e8f0'};
  border: solid 3.3px ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  border-radius: 9px;
`
/*   styling Main container   */
export const MainContainer = styled(LoginFormContainer)`
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: ${props => (props.dark ? '#212121' : '#ffffff')};
  border: none;
  border-radius: 0;
  box-shadow: none;
`

/*   styling LoginForm container   */
export const LoginForm = styled.form`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  //   border: solid 1px #d7d700;
`

/*   styling app logo   */
export const AppLogo = styled.img`
  width: 135px;
  @media screen and (min-width: 768px) {
    width: 164px;
  }
`

/*   Styling form contents   */
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => !props.checkbox && 'column'};
  align-items: ${props => props.checkbox && 'center'};
  //   height: 46px;
  //   @media screen and (min-width: 768px) {
  //     height: 53px;
  //   }
`

export const Input = styled.input`
  height: 27px;
  border: solid 1.2px ${props => (props.dark ? '#94a3b8' : '#616e7c')};
  border-radius: 3px;
  background-color: transparent;
  padding-left: 9px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${props => (props.dark ? '#ffffff' : '#475569')};
  outline: none;

  @media screen and (min-width: 768px) {
    height: 33px;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: ${props => (props.checkbox ? '12px' : '10px')};
  font-weight: 600;
  color: ${props => (props.dark ? '#ffffff' : '#475569')};
  //   color: ${props => props.checkbox && '#1e293b'};
  margin-bottom: 2px;
`
export const LoginBtn = styled.button`
  padding: 5.5px 11px;
  font-weight: 600;
  font-size: 13px;
  font-family: 'Roboto';
  color: #ffffff;
  letter-spacing: 0.7px;

  background-color: #4f46e5;
  border: solid 1.5px #4f46e5;
  border-radius: 4px;
`
/*  Styling Error message  */
export const ErrMsg = styled.p`
  font-size: 9px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ff0000;
  font-style: italic;
  letter-spacing: 0.5px;
`
