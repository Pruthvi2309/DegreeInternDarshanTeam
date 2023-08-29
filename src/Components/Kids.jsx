import React from 'react'
// import './Kids.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './Slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Kids = () =>{
  return (
    <Wrapper>
         <Swiper
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
          <img src="images/arr-w.gif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
        <div className='Kids'>
        <div className='heading'>
        <h1 className='header-text'>New Arrivals(Kids)</h1>
        </div>
        <section className='sec'>
            <div className="products">
                <div className="card">
                    <div className="img"><a href="#"><img src="images/kids-slider.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k3.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k2.webp" alt="" /></a></div>
                    <div className="title1">Plateau White Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k4.jpg" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                    
                </div>
                
               
                
                
                

                
            </div>
          
          


            
            
        </section>
        
        
        <div className='heading'>
        <h1 className='header-text'>Shirts(Kids)</h1> 
        </div>
        <section className='sec'>
            <div className="products">
                <div className="card">
                    <div className="img"><a href="#"><img src="images/kids-slider.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k3.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k2.webp" alt="" /></a></div>
                    <div className="title1">Plateau White Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k4.jpg" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                    
                </div>
                
               
                
                
                

                
            </div>
          
            {/* <div className="hello">
              <Link className='explr-link' to="/Men-Shirts"><button className='btn'>Explore More</button></Link>
            </div> */}

            
            
        </section>



       
        <div className='heading'>
        <h1 className='header-text'>T-Shirts(Kids)</h1>
        </div>
        <section className='sec'>
            <div className="products">
                <div className="card">
                    <div className="img"><a href="#"><img src="images/kids-slider.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k3.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k2.webp" alt="" /></a></div>
                    <div className="title1">Plateau White Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k4.jpg" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                    
                </div>
                
               
                
                
                

                
            </div>
            <div className='heading'>
        <h1 className='header-text'>Trousers(kids)</h1>
            </div>

          


            
            
        </section>
        
        <section className='sec'>
            <div className="products">
                <div className="card">
                    <div className="img"><a href="#"><img src="images/kids-slider.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k3.webp" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k2.webp" alt="" /></a></div>
                    <div className="title1">Plateau White Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/k4.jpg" alt="" /></a></div>
                    <div className="title1">shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        <div className="size-btn">
                          <a className='dars' href="#">XS</a>
                          <a className='dars' href="#">S</a>
                          <a className='dars' href="#">L</a>
                          <a className='dars' href="#">XL</a>
                          
                        </div>
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                    
                </div>
                
               
                
                
                

                
            </div>
            <div className='heading'>
        <h1 className='header-text'></h1>
            </div>

          


            
            
        </section>

        
        </div>
    
    </Wrapper>
  )
}
const Wrapper=styled.div`
.Kids{
  /* background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)); */
  /* background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.2)), url(./garmnet.jpg); */
  /* background: linear-gradient(to bottom,green,lightgreen,transparent); */
  background-size: cover;
  
  /* margin: 20px 10px; */
  /* height: 20px; */
  margin-top: -9rem; 
  background-color: white;
  
}
.Kids .heading{
  /* top: 20px; */
  /* text-align: center; */
  /* margin: 20px 0; */
  /* color: black; */
  font-family: sans-serif;
 
}
.Kids .heading .header-text{
  margin-top: 10rem;
  color: black;
  text-align: left;
  margin-left: 6.3rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
}


.Kids section{
  padding: 10px 5%;
  margin-top: -10rem;
}
section .products{
  display: grid;
  grid-template-columns: repeat(4,1fr);  
  /* grid-template-columns: repeat(auto-fit,minmax(320px,5fr)); */
  margin-top: 9rem;
  margin-left: -6rem;
  padding-right: 403px;
  padding-left: 92px;
  margin-bottom: -10rem;
  
}
.Kids sec1{
  padding: 10px 5%;
  margin-top: -10rem;
}
sec1 .products{
  display: grid;
  grid-template-columns: repeat(4,1fr);  
  /* grid-template-columns: repeat(auto-fit,minmax(320px,5fr)); */
  margin-top: rem;
  margin-left: -6rem;
  padding-right: 403px;
  padding-left: 92px;
  margin-bottom: -10rem;
  
}

.products .card{
  width: 310px;
  /* background:linear-gradient(rgba(0,0,0,0.8),rgba(99, 111, 158, 0.679)); */
  /* border-color:red ; */
  /* border-radius: 20px; */
  border: 0;
  margin: 20px ;
  /* background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)); */
  
}
.products .card img{
  height: 310px;
  width: 258px;
  box-shadow: 0px 10px 20px rgba(2, 150, 89, 0.3);
  /* border-radius: 20px; */
  border: 0;
  /* padding: 5px ; */
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 40px;
  

}
          /* Categories */
/* .card .img1 img:hover{
      content: url(./men-model.jpeg);
}
.card .img2 img:hover{
  content: url(./women-model1.jpeg);
}.card .img3 img:hover{
  
  content: url(./kid.avif);
} */

.card .title1{
  font-weight: bold;
  text-align:center;
  margin-left: -26px;
  font-size: 17px;
  font-family: sans-serif;

}
.card .p-text{
  left: 50;
  text-align:center;
  font-size: 16px;
  font-family: var(--typeBasePrimary),var(--typeBaseFallback);
  letter-spacing: var(--typeBaseSpacing);
  margin-left: -28px;
}
.card .box{
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 20px     6px;
  padding-top: 0px;
  padding-left: 11px;
}

.card .box .size-btn a:link, .card .box .size-btn a:visited {
  background-color: white;
  color: black;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  /* box-sizing: border-box; */
  border-radius: 10px;
  
}

.card .box .size-btn a:hover {
  background-color: lightgreen;
  border-radius: 20px;
}
/* .price{
  color: orange;
  font-weight: bold;
  font-size: 20px;
} */
/* .btn{
  color: indianred;
  font-size: 13px;
  padding: 10px 18px;
  border: 1px solid indianred;
  border-radius: 20px;

}
.btn:hover{
  cursor: pointer;
  background: indianred;
  color: white;
} */
.card .img a:active{
  background-color: white;
}
.hello .explr-link{
  color: black;
  
  
}
.hello .explr-link .btn:active{
background-color: white;

}
section .hello{
  margin-left: 38rem;
  
}
`;

export default Kids