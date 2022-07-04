import React, { useEffect, useRef, useState } from 'react'

//icons
import ReactPlayer from 'react-player'
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";


import { trailer } from '../HomePage/CarouselItems/CarouselItems';

//HINT: I can use video player pure react but i want to show u how i can work and change property of library
// it is similar make <video ref={} autoplay={} style={}/>

import './VideoPlayer.scss'
const VideoPlayer = () => {

  const playerRef = useRef(); //useRef hook to show property of container 


  const [play, setIsplay] = useState(false);// have boolean variable


  //handlefunction to edit the time of vide (+30 second and -30 second )
  const HandleBack = () => {
    // go to current time and change when i click
    //seekTo to edit

    playerRef.current?.seekTo(playerRef.current.getCurrentTime() - 30);
  };

  const HandleForward = () => {
      // go to current time and change when i click
    playerRef.current?.seekTo(playerRef.current.getCurrentTime() + 30);
  };

  //handle play to play and pause video
  const HandlePlay = () => {
    // callbackb function if true set false and if false set true
    setIsplay(play=>!play);
  };

  return (
    <div className="container">

      <div className="wrapper">


        <ReactPlayer
          ref={playerRef}
          url={trailer}
          playing={play} // const from useState
          controls={true} // show default controls
          pip={true} // that is good to developer if watch and create a code can make picture in picture screen
        />
        {/* //custom controls position absolute on video */}
        <div className="controls">
       
          <h1>-30S</h1>
          <FastRewindIcon onClick={HandleBack} className='icon' />


{/* Change icon if play or pause */}
          {play ?
            <PauseIcon className='icon' onClick={HandlePlay} /> :
            <PlayArrowIcon className='icon' onClick={HandlePlay} /> }

          <FastForwardIcon className='icon' onClick={HandleForward} />
          <h1>+30S</h1>
       
        </div>
      </div>
    </div>

  )
}

export default VideoPlayer