import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import AppContext from '../../context/AppContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
// TODO: update filter method.

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {fetchStatus: apiStatus.initial, allVideosList: [], searchInput: ''}

  componentDidMount() {
    this.fetchVideosData()
  }

  fetchVideosData = async () => {
    this.setState({fetchStatus: apiStatus.inProgress})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      this.setState({fetchStatus: apiStatus.success})
      const data = await response.json()
      console.log(data)
    } else {
      this.setState({fetchStatus: apiStatus.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    this.fetchVideosData()
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <div>
                <Sidebar />
              </div>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Home
