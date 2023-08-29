import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/effect-cube';
// import './Homeslider.css'
import './Logoslider.css'
// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';

const Menpage = () => {
        // const url = 'https://localhost:4000/shirt';
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
    <div className='Men'>
              
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
      
        <div className='heading'>
        <h1 className='header-text'>New Arrivals(Men)</h1>
        </div>
        
      
        <section className='sec'>
            
              
            <div className="products" >
            {data.map((elem) =>{
                const img = "shirtimg/"+elem.Shirt_ID+".gif";
                return(
                <div className="card" key={elem.Shirt_ID}>
                    <div className="img"><Link to="/Desc" target='/_b' href="#"><img src={img} alt="" /></Link></div>
                    <p className='p1-text'>Men's casual</p>
                    <div className="title1">{elem.Shirt_Name}</div>
                    <p className='p-text'><i class="fa-solid fa-indian-rupee-sign"></i>{elem.Shirt_Price}</p>
                    <p className = "old-pr"><i class="fa-solid fa-indian-rupee-sign"></i>{elem.Old_Price}</p>
                </div>
                )}
            )}  
            </div>
          
            <div className="hello">
              <Link className='explr-link' to="/Men-Shirts"><button className='btn'>Explore More</button></Link>
            </div>

        </section>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`






    /* background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)); */
    /* background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.2)), url(./garmnet.jpg); */
    /* background: linear-gradient(to bottom,green,lightgreen,transparent); */
    background-size: cover;
    
    /* margin: 20px 10px; */
    /* height: 20px; */
    margin-top: -8rem; 
    

/* .hello{
    border-color: #e8e8e8;
    color: white;
    font-weight: normal;
    display: grid;grid-template-columns: auto auto;
    grid-column-gap: 20px;
    padding: 15px;
    margin-bottom: 10px;
    text-transform: uppercase;
} */
.Men .heading{
    /* top: 20px; */
    text-align: center;
    /* margin: 20px 0; */
    /* color: black; */
    font-family: sans-serif;
   
}
.Men .heading .header-text{
    /* font-size:1em ; */
    margin-top: 1rem;
    /* margin: 0; */
    color: black;
    /* line-height: 1.4em;
    text-align: left; */
    /* text-align: center; */
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.Men section{
    padding: 10px 5%;
    margin-top: -10rem;
    // display: grid;
    // grid-template-columns: repeat(4,1fr);
}
section .hello{
    margin-left: 40rem;
    /* text-transform: uppercase; */
}
section .hello .btn{
    text-transform: uppercase;
    background-color: lightgreen;
    border-radius: 20px;
    font-weight: bold;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: -2.5rem;
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
    margin-top:-1rem;
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
.card .p1-text{
  left: 50;
  text-align:left;
  font-size: 16px;
  font-family: sans-serif;
  // color:rgb(46, 42, 42);
  color:green;
  font-weight: 700;
  letter-spacing: var(--typeBaseSpacing);
  margin-left: 17px;
  font-family: sans-serif;
    margin-top:0rem;
  //   font-family: Oswald;
  
  //  animation: Color 4s linear infinite;
  // -webkit-animation: Color 4s ease-in-out infinite;
  // text-shadow: 10px 10px #F0F0F0;
  
}

// @keyframes Color{
//   0%{
//     color:#A0D468;
//   }
  
//   20%{
//     color:purple;
//   }
  
//   40%{
//     color:#FFCE54;
//   }
  
//   60%{
//     color:#FC6E51;
//   }
  
//   80%{
//     color:#ED5565;
//   }
  
//   100%{
//     color:#AC92EC;
//   }
// }

// @-moz-keyframes Color{
//    0%{
//     color:#A0D468;
//   }
  
//   20%{
//     color:purple;
//   }
  
//   40%{
//     color:#FFCE54;
//   }
  
//   60%{
//     color:#FC6E51;
//   }
  
//   80%{
//     color:#ED5565;
//   }
  
//   100%{
//     color:#AC92EC;
//   }
// }

// @-webkit-keyframes Color{
//   0%{
//     color:#A0D468;
//   }
  
//   20%{
//     color:#4FC1E9;
//   }
  
//   40%{
//     color:#FFCE54;
//   }
  
//   60%{
//     color:#FC6E51;
//   }
  
//   80%{
//     color:#ED5565;
//   }
  
//   100%{
//     color:#AC92EC;
//   }
// }

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
    // margin-left: -3.5rem;
    
  }
  
  .card .box .size-btn  a:hover {
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
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  /* background:linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.3));*/
  background-color: black;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 18rem;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  margin-top: -2.5rem;
  height: 80vh;
  
}

@media (max-width: 1024px) {
    section .products {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 6rem;
      margin-left: 0;
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (max-width: 768px) {
    section .products {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 6rem;
      margin-left: 0;
      padding-right: 10px;
      padding-left: 10px;
    }
  }




  .container {
    position: relative;
    width: 50%;
  }
  
  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  
  .container:hover .image {
    opacity: 0.3;
  }
  
  .container:hover .middle {
    opacity: 1;
  }
  
  .text {
    background-color: #transperent;
    color: black;
    font-size: 16px;
    padding: 16px 32px;
  }







`;
export default Menpage