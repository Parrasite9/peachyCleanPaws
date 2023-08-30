import React from 'react'
import Hero from './Hero'
import Navbar from '../Navbar'
import Mission from './Mission'
import Services from './Services'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <Mission />
      <Services />
    </div>
  )
}

export default Home
