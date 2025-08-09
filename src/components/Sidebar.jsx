import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="icon">
        <MenuIcon fontSize='medium'/>
      </div>
    <div className="icons">
    <HomeIcon fontSize='medium'/>
    <p>Home</p>
    </div>
    <div className="icons">
    <VideoLibraryOutlinedIcon fontSize='medium'/>
    <p>Shorts</p>
    </div>
    <div className="icons">
    <SmartDisplayOutlinedIcon fontSize='medium'/>
    <p className='subscription'>Subscriptions</p>
    </div>
    <div className="icons">
        <AccountCircleOutlinedIcon fontSize='large'/>
        <p>You</p>
    </div>
    </div>
  )
}

export default Sidebar