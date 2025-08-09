import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import './App.css'
import Post from './components/Post'

function App() {
  return (
    <div className='app'>
      
      <div className='app-top'>
    
    <Header />
    <Feed />
      </div>
    <Sidebar />
    <div className='app-post'>

    <Post />
    </div>
      
    </div>
  )
}

export default App