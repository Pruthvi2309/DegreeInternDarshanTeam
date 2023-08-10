import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
    <main className='main-3'>
    <section className="lefi-sec">
    <img src='images/womi2.jpg'></img>
    </section>

    <section className='right-sec'>
    <div className='flow'>
            {/* <img src="images/cake.jpg"/> */}
        <div className='wrapper'>
        <form>
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' placeholder='Enter Your Email' required/><box-icon className='thin' name='mail-send'></box-icon>
            </div>

            <div className="input-box">
                <input type='text' placeholder='Enter Password' required/><box-icon className='thin' name='lock'></box-icon>
            </div>

            <div className="remeber">
                <label><input type='checkbox'/> Remeber Me</label>
                <a href='Signup.jsx'>Forgot password</a>
            </div>

            <button type='submit' className="btn">Login</button>

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