import React from 'react'
import './Signup.css';
// import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
    <main className='main-4'>
    <section class="lefi-sec">
        <img src='images/Signup BG.gif' height={550} width={600}/>
            {/* <h2 className='h1-txt'>We Are Here For You</h2>
            <h1>Homemade Cakes & Pastries</h1>
            <p>We are here for your service 24/7. Any help just visit our website.</p>
            <button>More product</button> */}
    </section>

    <section className='right-sec'>
    <div className='zero'>
        <div className='wrapper1'>
        <form>
            <h1>Register Here</h1>
            <div className="input-box1">
                <input type='text' placeholder='Enter Your Name' required/><box-icon name='user-circle'></box-icon>
            </div>

            <div className="input-box1">
                <input type='text' placeholder='Birthdate' required/><box-icon name='cake'></box-icon>
            </div>
            
            <div className="input-box1">
                <input type='email' placeholder='Enter Email' required/><box-icon name='mail-send'></box-icon>
            </div>

            <div className="input-box1">
                <input type='text' placeholder='Phone Number' required/><box-icon name='phone'></box-icon>
            </div>

            <div className="input-box1">
                <input type='text' placeholder='Enter Password' required/><box-icon name='lock'></box-icon>
            </div>

            <button type='submit' className="btn1">Register</button>
        </form>
        </div> 
        </div>
    </section>
    </main>
    </div>
  )
}

export default Signup