import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Firestone from '../images/kygo.mp3'
import './swipe.css'
import video from '../images/crowd.mp4'


let myArray = ["Fire Stone by Kygo", "Party in the U.S.A by Miley Cyrus", "Fade by Alan Walker"]

const Swipe = () => {
  return (
    <div>
        <video src = {video} 
            autoPlay loop muted
            width = {2000}
            />
       
        <h1 className = "title">Find Your Next Rave Song.</h1>
        <h2 className = "song"> {myArray[Math.floor(Math.random()*myArray.length)]}</h2>
        <ReactAudioPlayer className = "player"
        src= {Firestone}
        autoPlay
        controls
      />
      <p></p>
        <button className = "next" onClick={() => window.location.reload()}>NEXT</button>
        <button className = "liked" title = "added!"> Like Song </button>
        <a className = "vid" href = "https://www.youtube.com/watch?v=9Sc-ir2UwGU"> MUSIC VID </a>
        <p></p>

    </div>
  )
}

export default Swipe