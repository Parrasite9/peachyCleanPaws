import React, { useState } from 'react'
import HeroVideoPlayer from './HeroVideoPlayer'
import '../../css/Home/Hero/Hero.css'

function Hero() {

  const [isMobile, setIsMobile] = useState(true)

  return (
    <div className='hero' style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c167 C 72%2c218.8 216%2c405.8 360%2c426 C 504%2c446.2 576%2c261.8 720%2c268 C 864%2c274.2 936%2c504.4 1080%2c457 C 1224%2c409.6 1368%2c116.2 1440%2c31L1440 560L0 560z' fill='rgba(18%2c 144%2c 203%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`
    }}>
            
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
