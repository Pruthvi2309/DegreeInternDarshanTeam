import React, {useState} from 'react'
import './Login.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Validation from './LoginValidation';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    //Logic for login into website.
    const fetchData = async () => {
        const userData = {email, password};

        try{
            const response = await fetch('http://localhost:3000/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),     
            });

            const data = await response.json();
            if(data.success){
                navigate('/');
                localStorage.setItem("items",JSON.stringify(userData));
            }
            else{
                alert('Invalid Credentials');
            }
            }
            catch(error){
                console.error('Error logging in :', error);
            }
    }
  return (
    <div>
    <main className='main-3'>
    <section className="lefi-sec">
        <center><img className='lower' src='images/Login BG.gif' height={550} width={550}></img></center>
    </section>

    <section className='right-sec'>
    <div className='flow'>
            {/* <img src="images/cake.jpg"/> */}
        <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className="input-box">
                <input type='email' onChange={(e) => {setEmail(e.target.value)}} name = "email" placeholder='Enter Your Email' value={email} required/><box-icon className='thin' name='mail-send'></box-icon>
                {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
            </div>

            <div className="input-box">
                <input type='password' onChange={(e) => {setPassword(e.target.value)}} name="password" placeholder='Enter Password' value={password} required/><box-icon className='thin' name='lock'></box-icon>
                {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
            </div>

            <div className="remeber">
                <label><input type='checkbox'/> Remeber Me</label>
                <Link to='/forgot'>Forgot password</Link>
            </div>

           <button type='submit' onClick={fetchData} className="btn">Login</button>

            <div className="register">
                <p>Don't have an account?<Link to='/register'>Register</Link></p>
            </div>  
        </form>
        </div> 
        </div> 
    </section>
    </main>
    </div>
  )
}

export default Login