import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
         <footer className="footer"> 
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
                           <a href="https://www.instagram.com/shrutam__05/" target='/_blank'><i className="fa-brands fa-facebook"></i></a>
                           <a href="#"><i className="fa-brands fa-twitter"></i></a>
                           <a href="#"><i className="fa-brands fa-instagram"></i></a>
                           <a href="#"><i className="fa-brands fa-linkedin"></i></a>
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
        </footer>
    </>
  )
}

export default Footer