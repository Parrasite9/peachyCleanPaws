import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import "../../css/Home/Hero/HeroVideoPlayer.css"

function HeroVideoPlayer({onClose}) {

  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const openVideo = () => {
    setIsVideoVisible(true)
  }

  const closeVideo = () => {
    setIsVideoVisible(false)
    onClose()
  }

  return (    
    <div className='heroVideoPlayer'>
      
      {isVideoVisible && (
        <div className="video__overlay">
            <div className="video__popup">
                <button className="close__button" onClick={closeVideo}>
                    <CloseIcon />
                </button>

                <video controls autoPlay>
                    <source src='images/heroVideo.mp4' type='video/mp4' />
                </video>
            </div>
        </div>
      )}

      <button className='play__button' onClick={openVideo}>
        <PlayCircleIcon className='videoIcon' />
        <p>Play Video</p>
      </button>

    </div>
  )
}

export default HeroVideoPlayer
