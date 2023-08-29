import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import './Women.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import 'swiper/css/effect-cube';
// import './Slider.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
function Women() {

  const [data, setData] = useState([]);
    
        const fetchInfo = async () =>{
            try{
                const response  = await fetch('http://localhost:4000/shirt',{
                    method: 'get',
                    headers: {'Content-Type': 'application/json'},
                });

                const responseData = await response.json();
                setData(responseData);
                
            }catch(err) {
                console.error('error fetching data',err);
            }
        }
        useEffect(()=>{
            fetchInfo();
        },[]);

  return (
    <Wrapper>
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
          <img src="images/arr-w.gif" />
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
        <div className='Women'>
          <div className='heading'>
          <h1 className='header-text'>New Arrivals(Women)</h1>
          </div>
            <section className='sec'>
            <div className="products" >
            {data.map((elem) =>{
                const img = "women/"+elem.Shirt_ID+".gif";
                return(
                <div className="card" key={elem.Shirt_ID}>
                    <div className="img"><Link to="/Desc" target='/_b' href="#"><img src={img} alt="" /></Link></div>
                    <div className="title1">{elem.Shirt_Name}</div>
                    <p className='p-text'><i class="fa-solid fa-indian-rupee-sign"></i>{elem.Shirt_Price}</p>
                    <p className = "old-pr"><i class="fa-solid fa-indian-rupee-sign"></i>{elem.Old_Price}</p>
                </div>
                )}
            )}  
            </div>
            <div className="hello">
              <Link className='explr-link' to="/Women-Shirts"><button className='btn'>Explore More</button></Link>
            </div>
        </section>
        </div>
    
    </Wrapper>
    
  )
}
const Wrapper = styled.div`

  /* background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)); */
  /* background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.2)), url(./garmnet.jpg); */
  /* background: linear-gradient(to bottom,green,lightgreen,transparent); */
  background-size: cover;
  
  /* margin: 20px 10px; */
  /* height: 20px; */
  margin-top: 0rem; 
  

.Women .heading{
  /* top: 20px; */
  /* text-align: center; */
  /* margin: 20px 0; */
  /* color: black; */
  font-family: sans-serif;
 
}
.Women .heading .header-text{
  margin-top: 10rem;
  color: black;
  text-align: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.Women section{
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
  text-align:left;
  margin-left: 16px;
  font-size: 17px;
  font-family: sans-serif;

}
.card .p-text{
  left: 50;
  text-align:left;
  font-size: 16px;
  font-family: sans-serif;
  color: green;
  font-weight: 700;
  letter-spacing: var(--typeBaseSpacing);
  margin-left: 17px;
}
.card .old-pr {
  margin-left:4rem;
  text-align:left;
  font-size: 16px;
  font-family: sans-serif;
  color: green;
  font-weight: 700;
  letter-spacing: var(--typeBaseSpacing);
  margin-top:-2.48rem;
  color: #f64749;
  text-decoration: line-through;
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


`
export default Women