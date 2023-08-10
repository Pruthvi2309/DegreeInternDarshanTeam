import React from 'react'
import './Menpage.css'
import { Link } from 'react-router-dom'

function Menpage() {
  return (
    <>
    {/* <div className="marquee">
            <marquee behavior="" direction=""><a href="#">
            <div className="text">
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                    </div>
            </a></marquee>
       
       
        

            
            </div> */}
    {/* <div className='full'>
      <header className='header'>
        <div className='logo'></div>
        
        <nav className='navig'>
          <div className='title'>
          Aesthetics
          </div>
          
          <div className='category1'>
            <button className='men-btn'>Men</button>
            <div className='content1'>
              <a href="#">Shirt</a>
              <a href="#">T-Shirts</a>
              <a href="#">Trousers</a> 
            </div> 
          </div>

          <div className='category2'>
            <button className='women-btn'>Women</button>
            <div className='content2'>
              <a href="#">Shirt</a>
              <a href="#">T-Shirts</a>
              <a href="#">Trousers</a> 
            </div> 
          </div>

          <div className='category3'>
            <button className='kids-btn'>Kids</button>
            <div className='content3'>
              <a href="#">Shirt</a>
              <a href="#">T-Shirts</a>
              <a href="#">Trousers</a> 
            </div>  
          </div>                     */}
          
          {/* <div className='dropdown'>
          <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>           
          </div> */}
          
{/* 
          <div className='search'>
           
          <input type="text" name="searchbar" id="" placeholder='Search'  />
          </div>
          <div className="about-us">
          <a href="#">About Us</a>
          </div> */}
          {/* <div className="contact-us">
          <a href="#">Contact Us</a>
          </div> */}
          {/* <div className='Login'>
         <a href="#"><i class="fa-solid fa-user"></i></a>
         
          </div>
          <div className='Login'>
         <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
         
          </div>


        </nav>
        

      </header>
    </div> */}
    <div className='Men'>
      
        <div className='heading'>
        <h1 className='header-text'>New Arrivals(Men)</h1>
        </div>
        
      
        <section className='sec'>
            <div className="products">
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider-image1.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider-image1.webp" alt="" /></a></div>
                    <div className="title1">Plateau White Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider-image1.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider-image1.webp" alt="" /></a></div>
                    <div className="title1">Plateau White Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a href="#">XS</a>
                          <a href="#">S</a>
                          <a href="#">L</a>
                          <a href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                
                

                
            </div>
            <div className="hello">
              <Link to="/Men-Shirts"><button className='btn'>Explore More</button></Link>
            </div>

        </section>
        {/* <div className='heading'>
        <h1 className='header-text1'>Categories</h1>
        </div>
       <section className='sec'>
            <div className="products1">
                <div className="card">
                    <div className="img1"><a href="#"><img src="images/hover-shirt-1.avif" alt="" /></a></div>
                    <div className="title1">Men</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        
                    </div>
                </div>
                <div className="card">
                    <div className="img2"><a href="#"><img src="images/women.jpg" alt="" /></a></div>
                    <div className="title1">Women</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        
                    </div>
                </div>
                <div className="card">
                    <div className="img3"><a href="#"><img src="images/kid-hover.jpg" alt="" /></a></div>
                    <div className="title1">Kids</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                       
                    </div>
                </div>
                
                
                
                

                
            </div>

        </section> */}
        
    </div>
    </>
  )
}

export default Menpage