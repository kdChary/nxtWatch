import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  savedVideos: [],
  deleteVideos: () => {},
  addVideos: () => {},
  activeRoute: () => {},
})

export default AppContext
