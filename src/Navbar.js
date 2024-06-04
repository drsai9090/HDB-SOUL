import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleMouseOver = () => setShowNavbar(true);
    const handleMouseOut = () => setShowNavbar(false);
    const handleTouch = () => {
      setShowNavbar(true);
      setTimeout(() => setShowNavbar(false), 3000);
    };

    const navbarElement = document.querySelector('.navbar-container');
    if (location.pathname !== '/') {
      navbarElement.addEventListener('mouseover', handleMouseOver);
      navbarElement.addEventListener('mouseout', handleMouseOut);
      navbarElement.addEventListener('touchstart', handleTouch);
    }

    return () => {
      navbarElement.removeEventListener('mouseover', handleMouseOver);
      navbarElement.removeEventListener('mouseout', handleMouseOut);
      navbarElement.removeEventListener('touchstart', handleTouch);
    };
  }, [location.pathname]);

  return (
    <div className="navbar-container">
      <nav className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
        <div className="navbar-left">
          <h1>HAPPY BIRTHDAY SOUL</h1>
        </div>
        <ul className="navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/letter">Letter</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
