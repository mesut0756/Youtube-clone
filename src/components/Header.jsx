import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Header.css'
import Avatar from '@mui/material/Avatar';


function Header() {
  return (
    <div className='header'>
        {/* Header-right */}
        <div className="header-left">

        
        <img src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="" className='YT'/>
        <sup>KE</sup>
        </div>
        {/* Header-center */}
        <div className="header-center">
            <div className='input'>

            <input type="text" placeholder='Search' />
            </div>
            <div className='search'>
            <SearchIcon />

            </div>
            <div className="mic">

            <MicIcon />
            </div>
            

        </div>


        {/* Header-left */}
        <div className="header-right">
            <div className="create">
            <AddIcon className='add'/>
            <h4>Create</h4>
            </div>
        <div className="notification">

        <NotificationsNoneIcon fontSize='large'/>
        </div>

        <Avatar src='https://avatars.githubusercontent.com/u/210494715?v=4' className='avatar'/>
        </div>

    </div>
  )
}

export default Header