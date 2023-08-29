import React, {useState} from 'react'
import './New-nav.css'
import { Link } from 'react-router-dom'
function NewNav() {
    const [menuActive, setMenuActive] = useState(false);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  return (
    <>
        <header className="hello1">
              <Link to='/' href="#" className='unique'>Aesthetics</Link>      
          
              <ul className={`navbar1 ${menuActive ? 'active' : ''}`}>
          
            <li><Link to="/" href="#" className='Home1'>Home</Link>
            </li>
            <li>
                          <div class="menu-wrap">
                      <ul class="menu">
                          <li class="menu-item">
                              <Link to="/Men" href="#">Men</Link>
                              <ul class="drop-menu">
                                  <li class="drop-menu-item">
                                      <Link to ="/Men-Shirts"href="#">Shirts</Link>
                                  </li>
                                  <li class="drop-menu-item">
                                  <Link to ="/Men-Tshirts"href="#">T-Shirts</Link>
                                  </li>
                                  <li class="drop-menu-item">
                                      <Link to="/Men-Trouser" href="#">Trousers</Link>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
            </li>
            <li>
                 <div class="menu-wrap">
                      <ul class="menu">
                          <li class="menu-item">
                              <Link to="/Women" href="#">Women</Link>
                              <ul class="drop-menu">
                                  <li class="drop-menu-item">
                                  <Link to ="/Women-Shirts"href="#">Shirts</Link>
                                  </li>
                                  <li class="drop-menu-item">
                                  <Link to ="/Women-Tshirts"href="#">T-Shirts</Link>
                                  </li>
                                  <li class="drop-menu-item">
                                  <Link to="/Women-Trouser" href="#">Trousers</Link>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
            </li>
            <li>
                          <div class="menu-wrap">
                      <ul class="menu">
                          <li class="menu-item">
                              <Link to="/Kids" href="#">Kids</Link>
                              <ul class="drop-menu">
                                  <li class="drop-menu-item">
                                  <Link to ="/Kids-Shirts"href="#">Shirts</Link>
                                  </li>
                                  <li class="drop-menu-item">
                                  <Link to ="/Kids-Tshirts"href="#">T-Shirts</Link>
                                  </li>
                                  <li class="drop-menu-item">
                                  <Link to="/Kids-Trouser" href="#">Trousers</Link>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </div>
            </li>
            
          </ul>  
            <div className="other1">
              <Link to="/Login" href="#"><i class="fa-solid fa-user"></i></Link>
              <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
              <a href="#"><i class="fa-regular fa-heart"></i></a>
              <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>
            </div>
       </header>  
    </>
  )
}

export default NewNav