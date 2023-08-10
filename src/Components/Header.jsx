import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      

<div className='full'>
      <header className='header'>
        {/* <div className='logo'></div> */}
        
        <nav className='navig'>
          <div className='title'>
          Aesthetics
          </div>
          <div className='category1'>
            <Link to="/"><button className='men-btn'>Home</button></Link>
          </div>
          <div className='category1'>
            <Link to="/Men"> <button className='men-btn'>Men</button></Link>
            <div className='content1'>
            <Link to="/Men-Shirts">Shirts</Link>
            <Link to="/Men-Tshirts">T-Shirts</Link>
            <Link to="/Men-Trouser">Trousers</Link>
            </div> 
          </div>
          

          <div className='category2'>
          <Link to="/Women"> <button className='men-btn'>Women</button></Link>
            <div className='content2'>
            <Link to="/Women-Shirts">Shirts</Link>
            <Link to="/Women-Tshirts">T-Shirts</Link>
            <Link to="/Women-Trouser">Trousers</Link>
            </div> 
          </div>

          <div className='category3'>
          <Link to="/Kids"> <button className='men-btn'>Kids</button></Link>
            <div className='content3'>
            <Link to="/Kids-Shirts">Shirts</Link>
            <Link to="/Kids-Tshirts">T-Shirts</Link>
            <Link to="/KIds-Trouser">Trousers</Link>
            </div>  
          </div>                   
          
          {/* <div className='dropdown'>
          <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>           
          </div> */}
          

          <div className='search'>
           
          <input type="text" name="searchbar" id="" placeholder='Search'  />
          </div>
          {/* <div className="about-us">
          <a href="#">About Us</a>
          </div> */}
          {/* <div className="contact-us">
          <a href="#">Contact Us</a>
          </div> */}
          <div className='Login'>
         <a href="#"><i class="fa-solid fa-user"></i></a>
         
          </div>
          <div className='Cart'>
         <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
         
          </div>
          <div className='Heart'>
         <a href="#"><i class="fa-regular fa-heart"></i></a>
         
          </div>
          {/* <div className='Heart'>
         <a href="#"><i class="fa-regular fa-heart"></i></a>
         
          </div> */}
          


        </nav>
        

      </header>
    </div>
    </>
  )
}

export default Header