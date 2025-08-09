import React from 'react'
import './Post.css'
import Posts from './Posts'
import Shorts from './Shorts'

function Post() {
  return (

    <div>

    <div className='post'>
        <Posts 
        year='3 years ago'
        image='https://i.ytimg.com/vi/Fo9tssr8i6c/hqdefault.jpg'
        username='David James'
        views='34k views'
        title='How to get 1 Million views in 1 week'
        duration='10:30'
        profilepic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGmygizX0UpqID58gu4-w6dQ_Yc84XDQElg&s'
        />
        
        <Posts 
        year='3 months ago'
        image='https://static-assets.codecademy.com/assets/course-landing-page/meta/16x9/introduction-to-javascript.jpg'
        username='Kim Lee'
        views='357k views'
        title='Learn Javascript for free'
        duration='3:54:43'
        profilepic='https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg'
        />
        <Posts 
        year='2 months ago'
        image='https://i.ytimg.com/vi/jDItlEiFFdo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCzDzsnsmrmWevOZiJGdKUr6UJhkg'
        username='FutBol'
        views='500k views'
        title='Top 10 saddest momments in Football History'
        duration='12:36'
        profilepic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGBbhnWCq5yEvdiXCbaDbtEBHPWwabg0vxQ&s'
        />
    </div>
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-shorts-icon.png" alt="" className='shorts-img'/>
    <h3 className='h'>Shorts</h3>

    <div className="reels">


    <div className="short-reels">

    <Shorts 
    shortsimg='https://www.gamereactor.eu/media/90/_4629003b.jpg'
    title='ballon dior prediction'
    views='91K views'
    />
    </div>
    
    <div className="short-reels">

    <Shorts 
    shortsimg='https://m.media-amazon.com/images/I/71bAFhNuAkL._UF1000,1000_QL80_.jpg'
    title='#Zachking #free #trailer'
    views='45K views'
    />
    </div>
    
    <div className="short-reels">

    <Shorts 
    shortsimg='https://www.shutterstock.com/editorial/image-editorial/M1T2M70eOeDbU417NzYwMzU=/senegalese-born-italian-blogger-khaby-lame-arrives-premiere-440nw-13369752a.jpg'
    title='#khaby lame #trending'
    views='12M views'
    />
    </div>
    
    <div className="short-reels">

    <Shorts 
    shortsimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoweRlRlfzCAvirqpXalp705k-_sJ_QYhd1g&s'
    title='welcome to real madrid'
    views='1.6M views'
    />
    </div>
    
    <div className="short-reels">

    <Shorts 
    shortsimg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBle6uNBsP4OgP1hArzNtuy52qzIY-YcppZiVtV_5vkZoeLG06OYS6WJZWUQTeBzmeSQ&usqp=CAU'
    title='#Rafael leao #Ac Milan
    '
    views='32K views'
    />
    </div>
    </div>
    
    <div className='post'>
        
        <Posts
        year='4 days ago' 
        image='https://e0.365dm.com/25/07/2048x1152/skysports-luis-diaz-bayern-munich_6977822.jpg?20250730122921'
        username='Transfer market'
        views='72k views'
        title='Diaz leaves Liverpool for Bayern with worth £65.5m transfer fee'
        duration='4:43'
        profilepic='https://yt3.googleusercontent.com/hzMUIpJ6WF3ebc_lKA8C7Gs1S7MC-RFEK0aXWjphzbMb1V2cObVWKDMAz3E71mSfIIyShLN_=s900-c-k-c0x00ffffff-no-rj'
        />
        <Posts
        year='4 months ago' 
        image='https://i.ytimg.com/vi/HuN_hhz6oXQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC2NCn5Y2pVE18vOycAWJaDvICzsw'
        username='Footbooleditz'
        views='737k views'
        title='The Season Of Cristiano Ronaldo'
        duration='24:43'
        profilepic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9IuheFThH3dbGeF9daDSm3gzcB71p_dLKw&s'
        />
        <Posts 
        year='4 days ago'
        image='https://images2.minutemediacdn.com/image/upload/c_crop,w_1919,h_1079,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01k07vnfvfcsfg4afmxb.jpg'
        username='FutBol'
        views='500k views'
        title='ballon dior 2025 prediction?'
        duration='18:10'
        profilepic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQGBbhnWCq5yEvdiXCbaDbtEBHPWwabg0vxQ&s'
        />
    </div>
    
       
    <div className='post'>
        <Posts 
        year='22 hours ago'
        image='https://static.footballtransfers.com/images/cf/image/upload/footballcritic/stknf2herwcfvjmacbxb/q=75,w=1200,format=auto'
        username='FabrizioRom'
        views='564k views'
        title='Romano makes Sesko prediction as Newcastle issue transfer'
        duration='4:56'
        profilepic='https://pbs.twimg.com/profile_images/1741753635158024192/j0m8Ucvv_400x400.jpg'
        />
        
        <Posts 
        year='7 months ago'
        image='data:image/jpeg;base64,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'
        username='Efootball Gamer'
        views='37k views'
        title='Efootball 2026 predictions'
        duration='2:20'
        profilepic='https://logos-world.net/wp-content/uploads/2021/08/eFootball-Emblem.png'
        />
        <Posts 
        year='1 week ago'
        image='https://i.ytimg.com/vi/p4-FOIEXIzI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD5S4Vd3UEUGadIgHEmKUVBbmaXsA'
        username='LFC News'
        views='52k views'
        title='Alexander Isak To Liverpool Transfer News After Latest BOMBSHELL!'
        duration='9:28'
        profilepic='https://play-lh.googleusercontent.com/MA4P5q2t4ZOm-KUmEAbglmnwzCRiEYoJTLxQLGxv18vjgFaeQRMqImRrMqWdo-xzpg'
        />
    </div>

        </div>
  )
}

export default Post