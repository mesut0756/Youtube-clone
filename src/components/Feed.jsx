import React from 'react'
import './Feed.css'
import Feeds from './Feeds'

function Feed() {
  return (
    <div className='feed'>
    <div className="options">
    <Feeds 
    title='All'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Source code'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Gaming'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Premier League'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Skills'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Algorithms'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Efootball'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Music'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Podcasts'
    />
    </div>
    <div className="options">
    <Feeds 
    title='Editing'
    />
    </div>

    
    <div className="options">
    <Feeds 
    title='Foreign Exchange Markets'
    />
    </div>
    
    

    </div>
  )
}

export default Feed