import React from 'react';
import { Link } from 'react-router-dom';
import './StyleSheets/Footer.css';
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import RealEstateLogo from '../Images/logo/logo.svg';

function Footer() {
  return (
    <div className="footer-content">
      <div className="logo-footer">
        <a href="/index.html">
        <img src={RealEstateLogo} alt="Real Estate Logo" />
        </a>
      </div>
      <div className="quick-menu">
        <h4>QUICK MENU</h4>
        <Link as={Link} to="/"><p>Home</p></Link>
        <Link as={Link} to= "/AddPropertyPage"><p>Propety list</p></Link>
      </div>
      <div className="contact-us">
        <h4>CONTACT US</h4>
        <h6>+27 98 678 483</h6>
        <h6>Info@house25.co.za</h6>
      </div>
      <ul className='social_icons'>
            
            <a href='https://www.instagram.com/openwindowinstitute/?hl=en'>
              <FaInstagram />
            </a>
          
            <a href='https://twitter.com/open_window_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
            <BsTwitterX />
            </a>
          
            <a href='https://www.facebook.com/theopenwindow/'>
            <CiFacebook />
            </a>
          
        </ul>
      
      </div>
  );
}

export default Footer;
