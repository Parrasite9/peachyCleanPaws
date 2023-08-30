import React from 'react'
import Hero from './Hero'
import Navbar from '../Navbar'
import Mission from './Mission'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <Mission />
    </div>
  )
}

export default Home
