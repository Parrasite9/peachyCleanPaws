import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
                <div className='closeIcon' onClick={closeMenu}>
                    <CloseIcon />
                </div>

                <div className="navlinks__inside__container">
                    <div className="navlink navlink1"><a href=''>Home</a></div>
                    <div className="navlink navlink2"><a href=''>About Us</a></div>
                    <div className="navlink navlink3"><a href=''>Prices</a></div>
                    <div className="navlink navlink4"><a href=''>Appointments</a></div>
                </div>
            </div>

            // DIFFERENCE BETWEEN COMMENTED OUT AND THE ABOVE CODE IS THE FIRST DIV. ONLY KEEPING THIS HERE FOR NOW
            // IN CASE I NEED IT FOR A LARGER MEDIA QUERY
            // <div
            //     className={`navlinks__container ${menuStatus ? "active" : ""}`}
            // >
            // <div className="navlinks__container">
            //   <div className="navlink navlink1"><a href=''>Home</a></div>
            //   <div className="navlink navlink2"><a href=''>About Us</a></div>
            //   <div className="navlink navlink3"><a href=''>Prices</a></div>
            //   <div className="navlink navlink4"><a href=''>Appointments</a></div>
            //   <div onClick={closeMenu}><CloseIcon /></div>
            // </div>
            // </div>
      ):(
        <div className="burgerMenu" onClick={showMenu}><MenuIcon /></div>
      )}
    </div>
  )
}

export default Navbar
