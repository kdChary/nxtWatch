import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import AppContext from './context/AppContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/LoginForm'
// import Home from './components/HomePage'
import Header from './components/Header'

// Replace your code here
const tabConstants = {
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {isDark: false, savedVideos: [], activeTab: tabConstants.home}

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = value => {
    this.setState({activeTab: value})
  }

  render() {
    const {isDark, savedVideos, activeTab} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          savedVideos,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Header} />
        </Switch>
      </AppContext.Provider>
    )
  }
}
export default App
