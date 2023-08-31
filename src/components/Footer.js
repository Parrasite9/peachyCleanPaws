import React from 'react';
// import '../css/Footer';
import '../css/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer__content'>
        <p>&copy; {currentYear} Peachy Clean Paws. All rights reserved.</p>
        <nav className='footer__nav'>
          <a href='#'>Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Prices</a>
          <a href='#'>Appointments</a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
