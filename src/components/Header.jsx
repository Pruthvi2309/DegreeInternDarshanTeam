import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <header className="header">
      <div className="logoContent">
        <a href="#" className="logo"><img src="images/logo.png" alt="" /></a>
        <h1 className="logoName">Daily Delights</h1>
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to='/about'>About us</Link>
        <Link to='contact'>Contact us</Link>
        <Link to='login'>Login</Link>
      </nav>
    </header>

    
    </div>
  )
}

export default Header