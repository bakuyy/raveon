import React from 'react'
import video from '../images/video.mp4'
import rave from '../images/rave.jpg'
import './home.css'

const home = () => {
  return (
    <div className = ''>
        <video src = {video} 
        autoPlay loop muted
        width = {2000}
        />
        <div className = "content">
            <h1>It’s Tinder, but for music</h1>
            <h3>the ultimate house concert tool</h3>
        </div>
        <div className = "image">
            <img src={rave}
                alt = "rave"/>
        </div>
    </div>
  )
}

export default home