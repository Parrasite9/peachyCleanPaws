import React, { useEffect, useState } from 'react'
import '../css/Home/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

  const [menuOpen, setmenuOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const showMenu = () => {
      setmenuOpen(true)
  }

  const closeMenu = () => {
      setmenuOpen(false)
  }

  useEffect(() => {
      const handleResize = () => {
          // setmenuOpen(window.innerWidth)
          setScreenWidth(window.innerWidth)
      }

      // Initial check for screen width
      handleResize();


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

      {screenWidth < 900 ? (
        <>
              {menuOpen ? (
                <div className="mobile__navlinks__container">
                    <div className='closeIcon' onClick={closeMenu}>
                        <CloseIcon />
                    </div>

                    <div className="mobile__navlinks__inside__container">
                        <div className="navlink mobile__navlink mobile__navlink1"><a href=''>Home</a></div>
                        <div className="navlink mobile__navlink mobile__navlink2"><a href=''>About Us</a></div>
                        <div className="navlink mobile__navlink mobile__navlink3"><a href=''>Prices</a></div>
                        <div className="navlink mobile__navlink mobile__navlink4"><a href=''>Appointments</a></div>
                    </div>
                </div>
                ):(
                <div className="burgerMenu" onClick={showMenu}><MenuIcon /></div>
                )}
        </>
      ) : (
        <div className="desktop__navlink__container">
          <div className="desktop__navlinks__inside__container">
            <div className="navlink desktop__navlink desktop__navlink1"><a href=''>Home</a></div>
            <div className="navlink desktop__navlink desktop__navlink2"><a href=''>About Us</a></div>
            <div className="navlink desktop__navlink desktop__navlink3"><a href=''>Prices</a></div>
            <div className="navlink desktop__navlink desktop__navlink4"><a href=''>Appointments</a></div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Navbar
