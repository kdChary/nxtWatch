import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import AppContext from './context/AppContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/LoginForm'
import Home from './components/HomePage'
import NotFound from './components/NotFoundPage'
import TrendingVideos from './components/TrendingPage'
import GamingVideos from './components/GamePage'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'

// Replace your code here
const tabConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  gaming: 'GAMING',
  trending: 'TRENDING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {isDark: false, savedVideos: [], activeTab: tabConstants.initial}

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = value => {
    this.setState({activeTab: value})
  }

  deleteVideos = index => {
    const {savedVideos} = this.state
    const modifiedVideos = savedVideos.splice(index, 1)
    this.setState({savedVideos: modifiedVideos})
  }

  addVideos = data => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(video => data.id === video.id)

    if (index > -1) {
      this.deleteVideos(index)
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, data],
      }))
    }
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
          addVideos: this.addVideos,
          deleteVideos: this.deleteVideos,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/bad-path" component={NotFound} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Redirect to="/bad-path" component={NotFound} />
        </Switch>
      </AppContext.Provider>
    )
  }
}
export default App
