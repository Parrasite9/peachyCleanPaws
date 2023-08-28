import React from 'react'
import HeroVideoPlayer from './HeroVideoPlayer'
import '../css/Home/Hero/Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero__text">
        <h1>Love, Care, & Convenience For You & Your Furry Friend</h1>
      </div>

      <div className="hero__img">
        <img src="/images/MainDog.png" alt="#" />
      </div>

      <div className="hero__buttons">
        <HeroVideoPlayer onClose={() => {}} />
        <button>Book Appointment</button>
      </div>
    </div>
  )
}

export default Hero
