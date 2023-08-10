import React, { useState } from 'react';
import './style.css'


function Registration() {
//   const [formData, setFormData] = useState({
//     name: '',
//    // email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };keyword

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform registration logic here
//     console.log('Form submitted with data:', formData);
//   };

 return ( 
  <>
  <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="Name" required=""/> 
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="tel" name="telephone" placeholder="Mobile No." required=""/> 
					<button style={{ background: '#573b8a' }}>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button style={{ background: '#573b8a' }}>Login</button>
				</form>
			</div>
	</div>
  </>
  
);
}

export default Registration;
