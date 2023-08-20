import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo__container">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="navlinks__container">
        <div className="navlink navlink1"><a href=''>Home</a></div>
        <div className="navlink navlink2"><a href=''>About Us</a></div>
        <div className="navlink navlink3"><a href=''>Prices</a></div>
        <div className="navlink navlink4"><a href=''>Appointments</a></div>
      </div>
    </div>
  )
}

export default Navbar
