import React from 'react'
import styled from 'styled-components'
// import './Footer.css'
const Footer = () =>{
  return (
    
         <Wrapper className="footer"> 
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4 className='h4-txt'>Company</h4>
                        <ul>
                           <li><a className='about' href="#">About Us</a></li>
                            <li><a className='about' href="#">Our Serives</a></li>
                            <li><a className='about' href="#">Privacy policy</a></li>
                            <li><a className='about' href="#">Our Branches</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='h4-txt'>Help</h4>
                        <ul>
                           <li><a className='about' href="#">About Us</a></li> 
                            <li><a className='about' href="#">Our Serives</a></li>
                            <li><a className='about' href="#">Privacy policy</a></li>
                            <li><a className='about' href="#">Our Branches</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className='h4-txt'>about us</h4>
                        <ul>
                           <li><a className='about' href="#">About Us</a></li>
                            <li><a className='about' href="#">Our Serives</a></li>
                            <li><a className='about' href="#">Privacy policy</a></li>
                            <li><a className='about' href="#">Our Branches</a></li>
                            
                             
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">                          
                           <a href="https://www.facebook.com/" target='/_blank1'><i className="fa-brands fa-facebook"></i></a>
                           <a href="https://twitter.com/MacwanShrutam" target='/_blank2'><i className="fa-brands fa-x-twitter"></i></a>
                           <a href="https://www.instagram.com/shrutam__05/" target='/_blank3'><i className="fa-brands fa-instagram"></i></a>
                           <a href="https://www.linkedin.com/in/shrutam-macwan-b31a99237/" target='/_blank4'><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                            
                            
                    </div>
                </div>
                {/* <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">                          
                           <a href="#"><i className="fa-brands fa-facebook"></i></a>
                           <a href="#"><i className="fa-brands fa-twitter"></i></a>
                           <a href="#"><i className="fa-brands fa-instagram"></i></a>
                           <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                            
                            
                    </div> */}
              </div>  
        </Wrapper>
        
  )
}

const Wrapper =styled.footer`

    background: #24262b;
    padding: 70px 0;
    /* color: white; */
    // font-family: 'Poppins',sans-serif;
    margin-bottom: 0px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  
  .container{
    max-width: 1170px;
    /* background-color: red; */
    margin: auto;
  }
  
  .row{
    display: flex; 
    flex-wrap:wrap;
  }
  
  ul{
    list-style: none;
    
  }
  .footer-col{
      width: 25%;
      padding:  0 15px
  }
  .h4-txt{
    margin-left: 33px;
  }
  .footer-col h4{
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 35px;
    text-transform: capitalize;
    font-weight: 500;
    position: relative;
    /* background-color: red; */
  }
  .footer-col h4::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 2px;
    background-color: green;
    box-sizing: border-box;
    width: 50px;
  }
  .footer-col ul li:not(:last-child){
    margin-bottom: 10px;
  }
  .footer-col ul li a{
    font-size: 16px; 
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
  }
  .footer-col ul li a:hover{
    color: green;
    padding-left:10px ;
  }
  /* .social-links{
    margin-left: 50px;
   
  } */
  .footer-col .social-links a{
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(225,225, 225, 0.2);
    margin-right: 10px;
    text-align: center;
    line-height: 40px;
    color:white;
    border-radius: 10px;
  }
  .footer-col .social-links a:hover{
    border-color:linear-gradient(rgba(0,0,0,0.8),rgba(99, 111, 158, 0.679));
      -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1); 
      transform: scale(1.1); 
      background-color: green;
  }
  .footer-col li .about:active{
    background-color: #24262b;
  }
  
 

  @media (max-width: 786px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }

    .footer-col h4::before {
      width: 30px;
    }

    .footer-col ul li a {
      font-size: 14px;
    }

    .h4-txt {
      margin-left: 0;
      text-align: center;
    }
  }
    
    


`;
export default Footer 
