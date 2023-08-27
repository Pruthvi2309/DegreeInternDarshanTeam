import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

  function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <div>
    <header className="header">
      <div className="logoContent">
        <Link to='/' className="logo"><img src="images/logo.png" alt="Logo"/></Link>
        <h1 className="logoName">Daily Delights</h1>
      </div>
      <div className="mobileMenuIcon" onClick={toggleMenu}>
          {menuOpen ? (
            <box-icon name='x'></box-icon>
          ) : (
            <box-icon name='menu'></box-icon>
          )}
        </div>

        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to='/about'>About us</Link>
        <Link to='/contact'>Contact us</Link>
        <Link to='/login'>Login</Link>
      </nav>
    </header>
    </div>
  )
}

export default Header