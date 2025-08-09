import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Shorts.css'

function Shorts({shortsimg, title, views}) {
  return (
    <div>

    <div style={{backgroundImage: `url(${shortsimg})`}}className='shortsimg'>
    </div>
        <div className='shorts-bottom'>
            <div className='shorts-display'>

        <h4 className='title'>{title}</h4>
        <MoreVertIcon />
            </div>
        <p>{views}</p>

        </div>
    </div>

  )
}

export default Shorts