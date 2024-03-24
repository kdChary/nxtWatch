import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import AppContext from './context/AppContext'
import Login from './components/LoginForm'

// Replace your code here
class App extends Component {
  state = {isDark: true, savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <AppContext.Provider
        value={{isDark, savedVideos, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </AppContext.Provider>
    )
  }
}
export default App
