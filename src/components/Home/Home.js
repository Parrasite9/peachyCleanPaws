import React from 'react'
import Hero from './Hero'
import Navbar from '../Navbar'
import Mission from './Mission'
import Services from '../Home/Services/Services'
import Footer from '../Footer'
import SocialStatus from './SocialStatus'
import Testimonials from './Testimonials'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <Services />
      <SocialStatus />
      <Mission />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
