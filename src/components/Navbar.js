import React, { useState } from 'react'
import '../css/Navbar.css'

function Navbar() {

    const [menuStatus, setMenuStatus] = useState(false)

    const showMenu = () => {
        setMenuStatus(true)
    }

    const closeMenu = () => {
        setMenuStatus(false)
    }

  return (
    <div className='navbar'>
      <div className="logo__container">
        <img className='logo' src="/images/logo.png" alt="logo" />
      </div>

      {menuStatus ? (
            <div className="navlinks__container">
              <p onClick={closeMenu}>X</p>
              <div className="navlink navlink1"><a href=''>Home</a></div>
              <div className="navlink navlink2"><a href=''>About Us</a></div>
              <div className="navlink navlink3"><a href=''>Prices</a></div>
              <div className="navlink navlink4"><a href=''>Appointments</a></div>
            </div>
      ):(
        <div className="burgerMenu" onClick={showMenu}>E</div>
      )}
    </div>
  )
}

export default Navbar
