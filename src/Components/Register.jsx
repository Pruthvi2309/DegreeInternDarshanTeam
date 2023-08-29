import React, { useState,useEffect } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const collectData = async () => {
        
        let result = await fetch('http://localhost:4000/login', {
            method: 'post',
            body: JSON.stringify({ username, email, password}),
            headers: { 'Content-Type': 'application/json' },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("items", JSON.stringify(result));

    }
  return (
    <>
        <div className="reg">
            <div className="reg-box">
               <form action="">
               <h2>Register!</h2>
                <div className="inputbox">
                    <span>UserName</span>
                    <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                </div>
                <div className="inputbox">
                    <span>E-mail Address</span>
                    <input type="text" value={email} onChange={(e) =>setEmail(e.target.value)} />
                </div>
                <div className="inputbox">
                    <span>Password</span>
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
                </div>
                <div className="inputbox">
                    <span>Confirm Password</span>
                    <input type="password" />
                </div>
                <div className="inputbox">
                    <span></span>
                    <input type="submit" onClick={collectData} value="Register" name="" id=""/>
                </div>
                <div className="inputbox">
                    <p>Already a User? <Link to="/Login" href="">Login Now</Link></p>
                </div>
                <h3>OR <br />
                 Sign Up With
                 </h3>
                    <ul className='social-1'>
                        <li className='google'><i class="fa-brands fa-google"></i></li>
                        <li className='fb'><i class="fa-brands fa-facebook"></i></li>
                        <li className='twitter'><i class="fa-brands fa-x-twitter"></i></li>
                        <li className='amazon'><i class="fa-brands fa-amazon"></i></li>
                            {/* <li><i class="fa-brands fa-linkedin"></i></li> */}
                    </ul>
               </form>
               
                
                
                
                
                
            </div>
        </div>

    </>
  )
}

export default Register