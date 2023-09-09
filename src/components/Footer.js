import React from 'react';
import '../css//Footer.css'; // Import your footer CSS file

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__contact'>
          <div className='footer__contact-info'>
            <p>Contact Us:</p>
            <a href='mailto:Support@support.com'>Support@support.com</a>
            <a href='tel:+18178888888'>(817) 888-8888</a>
          </div>
          <div className='footer__logo'>
            <img src="images/logo.png" alt="#" />
          </div>
        </div>
        <nav className='footer__nav'>
          <a href='#'>Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Prices</a>
          <a href='#'>Appointments</a>
        </nav>
      </div>
      <p className='footer__copyright'>&copy; {currentYear} Peachy Clean Paws. All rights reserved.</p>
    </div>
  );
}

export default Footer;
