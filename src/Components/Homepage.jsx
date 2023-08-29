import React, { useRef, useState } from 'react';
import './Homepage.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/effect-cube';
import './Homeslider.css'
import './Logoslider.css'
// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';


function Homepage() {
  return (
    <>
    
   {/* <Swiper
        
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/k1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider1.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider2.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider3.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider4.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider5.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider6.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider7.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ws-slider8.gif" />
        </SwiperSlide>
      </Swiper> */}
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  <img src="./images/Mybanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Newbanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Mybanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Newbanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Mybanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Newbanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Mybanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Newbanner.png" /></SwiperSlide>
        <SwiperSlide>  <img src="./images/Mybanner.png" /></SwiperSlide>
      </Swiper>
      <div className="arr-header"><h1>Our Best Sellers</h1></div>
      <div class="logos">
      <div class="logos-slide">
      <a href=""><img src="./images/women.jpg" />
        <img src="./images/ww2.webp" />
        <img src="./images/desc-in.jpg" />
        <img src="./images/women.jpg" />
        <img src="./images/desc-shirt.jpg" />
        <img src="./images/mens.jpg" />
        <img src="./images/ww1.webp" />
        <img src="./images/ww3.webp" />
        </a> 
      </div>

      <div class="logos-slide">
      <a href=""><img src="./images/women.jpg" />
        <img src="./images/ww2.webp" />
        <img src="./images/desc-in.jpg" />
        <img src="./images/women.jpg" />
        <img src="./images/desc-shirt.jpg" />
        <img src="./images/mens.jpg" />
        <img src="./images/ww1.webp" />
        <img src="./images/ww3.webp" />
        </a>
      </div>
    </div>
    {/* <marquee behavior="" direction=""><a href="#">
            <div className="text-marquee">
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                        <h1>Best Deals Of the Year! Shop Now</h1>
                    </div>
            </a></marquee> */}
    <div className='Homepage'>
    {/* <a className='garmnet' href=""><img src="./images/garmnet.jpg" alt="" /></a>     */}
      <section className='text'>
      
        <h1 className='header-txt'>
        {/* Aesthetics <br/>  */}
        
        </h1> 
        {/* <p className='lower-text'>Your closet called,<br/> It needs an upgrade!</p> */}
        {/* <img src="images/3d-image.jpg" alt="" height={200} width={200} /> */}
        {/* <a href=""><img src="images/poster.avif" alt="" /></a> */}
      </section>
      
      {/* <footer className="footer"> 
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4 className='h4-txt'>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Serives</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Our Branches</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='h4-txt'>Help</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Serives</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Our Branches</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='h4-txt'>about us</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Serives</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Our Branches</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">                          
                           <a href="#"><i className="fa-brands fa-facebook"></i></a>
                           <a href="#"><i className="fa-brands fa-twitter"></i></a>
                           <a href="#"><i className="fa-brands fa-instagram"></i></a>
                           <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                            
                            
                    </div>
                </div>
              </div>  
        </footer> */}
    </div>
    <div className="arr-header"><h1>New Arrivals</h1></div>
    <div className="productss">
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider-image1.webp" alt="" /></a></div>
                    <div className="sub-title">Dennis Lingo Martin Shirt</div>
                    <p className='p-subtext'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k1.webp" alt="" /></a></div>
                    <div className="sub-title">H&M Overshirt</div>
                    <p className='p-subtext'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="sub-title">Plateau White Shirt</div>
                    <p className='p-subtext'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/arr-w2.gif" alt="" /></a></div>
                    <div className="sub-title">Tuxedo Shirt </div>
                    <p className='p-subtext'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>                   
            </div>
            <div className="cat-header"><h1>Shop By Category!</h1></div>
            
            <div className="products1">
                <div className="card">
                    <div className="img1"><Link to="/Men" target='/_b' href="#"><img src="images/m-hover.jpg" alt="" /></Link></div>
                    <div className="sub-title">Men</div>
                    <p className='p-subtext'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        
                    </div>
                </div>
                <div className="card">
                    <div className="img2"><Link to="/Women" target='/_b' href="#"><img src="images/w-home.jpg" alt="" /></Link></div>
                    <div className="sub-title">Women</div>
                    <p className='p-subtext'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        
                    </div>
                </div>
                <div className="card">
                    <div className="img3"><Link to="/Kids" href="#"><img src="images/kid-hover.jpg" alt="" /></Link></div>
                    <div className="sub-title">Kids</div>
                    <p className='p-subtext'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                       
                    </div>
                </div>
            

                
                
                
                
                

                
            </div>
             
    
    </>
    
  )
}

export default Homepage
