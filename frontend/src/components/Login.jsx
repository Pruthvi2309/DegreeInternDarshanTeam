import React, {useState} from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [loginStatus, setLoginStatus] = useState("")
   
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/login",{
            email:email,
            password:password
        }).then((response) => {
            if(response.data.message){
                setLoginStatus(response.data.message);
            }
            else{
                setLoginStatus(response.data[0].email);
            }
        })
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
        <form>
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter Your Email' required/><box-icon className='thin' name='mail-send'></box-icon>
            </div>

            <div className="input-box">
                <input type='password' onChange={(e) => {setPassword(e.target.value)}}  placeholder='Enter Password' required/><box-icon className='thin' name='lock'></box-icon>
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