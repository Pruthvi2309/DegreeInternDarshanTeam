import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Daily Delights </h4>
  	 			<ul>
  	 				<li><Link to='/'>Home</Link></li>
  	 				<li><Link to='/product'>Product</Link></li>
  	 				<li><Link to='/about'>About Us</Link></li>
  	 				<li><Link to='/contact'>Contact us</Link></li>
                    <li><Link to='/login' >Login</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Shipping</a></li>
  	 				<li><a href="#">Order status</a></li>
  	 				<li><a href="#">Payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">Cakes</a></li>
  	 				<li><a href="#">Pastries</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer