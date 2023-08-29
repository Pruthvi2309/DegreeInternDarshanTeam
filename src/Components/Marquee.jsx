import React from 'react'
// import './Marquee.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Marquee() {
  return (
   <Wrapper>
        <div className="marquee">
        <Link to="/"><marquee behavior="" direction=""><a href="#">
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
            </a></marquee></Link>
       
       
        

            
            </div>
   </Wrapper>
  )
}
const Wrapper = styled.div`


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');



marquee{
    /* background:linear-gradient(to right,green,lightgreen); */
    /* background: #003039; */
    /* background: rgb(213, 93, 56); */
    background: #ff4584;
    position:fixed;
    z-index: 999;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin-top: -10rem;
    
    /* position:fixed;
    z-index: 999;
   
}
.marquee a{
    text-decoration: none;
    /* right: 0; */
    /* background: #003039; */

}
marquee a{
  text-decoration: none;
}
marquee .text-marquee{
    display: flex;
    justify-content: flex-start;
    /* background: #003039; */
}
.text-marquee h1{
    font-size: 48px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke-width:1px ;
    -webkit-text-stroke-color: white;
    /* -webkit-text-stroke-color: white; */
    white-space: nowrap;
    padding: 0 6rem;
    letter-spacing: 1px;
    /* will-change: transform; */
    animation: marquee 7s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}


@media screen and (max-width: 786px) {
  .marquee {
    /* Adjust marquee styles for mobile screens */
    position: static; /* Reset position to static for better mobile display */
    padding: 0px 0; /* Add padding for spacing */
    overflow: hidden;
    margin-bottom: -5px;
    display: flex;
    /* align-items: center;
    flex-direction: column; */
  }

  .marquee a {
    /* Adjust anchor styles for mobile screens */
    display: block; /* Full width for links */
  }

  .text-marquee {
    /* Adjust text alignment and flex direction for mobile */
    justify-content: center; /* Center text horizontally */
    flex-direction: column; 
    align-items: center;
    /* display: flex; */
  }

  .text-marquee h1 {
    /* Adjust font size and padding for mobile */
    font-size: 24px;
    padding: 0 2rem;
  }
}









`
export default Marquee