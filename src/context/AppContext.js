import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  savedVideos: [],
  deleteVideos: () => {},
  addVideos: () => {},
  activeTab: () => {},
  changeTab: () => {},
})

export default AppContext
