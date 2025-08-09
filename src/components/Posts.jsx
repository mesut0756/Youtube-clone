import React from 'react'
import './Posts.css'
import Avatar from '@mui/material/Avatar'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Posts({profilepic, year, image, title, username, duration, views, shortsimg}) {
  return (

    <div className="posts">

    <div className="videos">

    <div style={{backgroundImage: `url(${image})`}} className='posts-cover'>
    <h3 className='duration'>{duration}</h3>
    </div>

    <div className="posts-bottom">
      <Avatar src={profilepic}/>

      <div className="post-name">
        <div className="title">
        <h3>{title}</h3>
          
    <MoreVertIcon className='more' fontSize='medium'/>
        </div>
        <div className="titles">

        <p>{username}</p>
        </div>
        <div className="titles">

        <p>{views}</p>
        <p className='dot'>.</p>
        <p>{year}</p>

    
    </div>
      </div>
    </div >

    </div>

    
        </div>

  
  )
}

export default Posts