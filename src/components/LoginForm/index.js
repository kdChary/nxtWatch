import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import AppContext from '../../context/AppContext'
import {
  MainContainer,
  LoginFormContainer,
  LoginForm,
  AppLogo,
  InputContainer,
  Input,
  Label,
  LoginBtn,
  ErrMsg,
} from './style'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    errorMsg: '',
    showError: false,
  }

  changeUsername = event => {
    this.setState({username: event.target.value, showError: false})
  }

  changePassword = event => {
    this.setState({password: event.target.value, showError: false})
  }

  showPassword = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  authorizeUser = async event => {
    event.preventDefault()

    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      //   console.log(jwtToken)

      Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

      history.replace('/')
    } else {
      this.setState({showError: true, errorMsg: data.error_msg})
    }
  }

  renderUsername = isDark => {
    const {username} = this.state

    return (
      <InputContainer>
        <Label dark={isDark} htmlFor="username">
          USERNAME
        </Label>
        <Input
          dark={isDark}
          type="text"
          id="username"
          value={username}
          onChange={this.changeUsername}
        />
      </InputContainer>
    )
  }

  renderPassword = isDark => {
    const {password, passwordType} = this.state

    return (
      <InputContainer>
        <Label dark={isDark} htmlFor="password">
          PASSWORD
        </Label>
        <Input
          dark={isDark}
          type={passwordType}
          id="password"
          value={password}
          onChange={this.changePassword}
        />
      </InputContainer>
    )
  }

  renderCheckbox = isDark => (
    <InputContainer checkbox>
      <Input
        dark={isDark}
        checkbox
        type="checkbox"
        onChange={this.showPassword}
        id="checkbox"
      />
      <Label checkbox dark={isDark} htmlFor="checkbox">
        Show Password
      </Label>
    </InputContainer>
  )

  renderLoginForm = isDark => {
    const {showError, errorMsg} = this.state
    const imgUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <LoginFormContainer dark={isDark}>
        <AppLogo src={imgUrl} alt="website logo" />

        <LoginForm type="login" id="loginForm" onSubmit={this.authorizeUser}>
          {this.renderUsername(isDark)}
          {this.renderPassword(isDark)}
          {this.renderCheckbox(isDark)}

          <InputContainer>
            <LoginBtn type="submit">Login</LoginBtn>

            {showError && <ErrMsg>*{errorMsg}</ErrMsg>}
          </InputContainer>
        </LoginForm>
      </LoginFormContainer>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return (
        <AppContext.Consumer>
          {value => {
            const {isDark} = value

            return (
              <MainContainer dark={isDark}>
                {this.renderLoginForm(isDark)}
              </MainContainer>
            )
          }}
        </AppContext.Consumer>
      )
    }
    return <Redirect to="/" />
  }
}

export default Login
