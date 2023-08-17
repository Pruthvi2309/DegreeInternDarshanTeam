import React, {useState} from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState("")
    const [bday, setBday] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    // const [registerStatus, setRegisterStatus] = useState("")

    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/register",{
            name:name,
            bday:bday,
            email:email,
            phone:phone,
            password:password
        }).then((response) => {
            if(response.data.message){
                setRegisterStatus(response.data.message);
            }
            else{
                setRegisterStatus("Account Created Successfully");
            }
        })
    }
  return (
    <div>
    <main className='main-4'>
    <section class="lefi-sec">
        <img className='lower' src='images/Signup BG.gif' height={500} width={550}/>
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
                <input type='text'  onChange={(e) => {setName(e.target.value)}} placeholder='Enter Your Name' required/><box-icon name='user-circle'></box-icon>
            </div>

            <div className="input-box1">
                <input type='date' onChange={(e) => {setBday(e.target.value)}} placeholder='Birthdate' required/> 
            </div>
            
            <div className="input-box1">
                <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter Email' required/><box-icon name='mail-send'></box-icon>
            </div>

            <div className="input-box1">
                <input type='text' onChange={(e) => {setPhone(e.target.value)}} placeholder='Phone Number' required/><box-icon name='phone'></box-icon>
            </div>

            <div className="input-box1">
                <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter Password' required/><box-icon name='lock'></box-icon>
            </div>

            <Link to='/'><button type='submit' onClick={register} className="btn1">Register</button></Link>
        </form>
        </div> 
        </div>
    </section>
    </main>
    </div>
  )
}

export default Signup