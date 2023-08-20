import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'

function Navbar() {

    const [menuStatus, setMenuStatus] = useState(false)

    const showMenu = () => {
        setMenuStatus(true)
    }

    const closeMenu = () => {
        setMenuStatus(false)
    }

    useEffect(() => {
        const handleResize = () => {
            setMenuStatus(window.innerWidth >= 900)
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
