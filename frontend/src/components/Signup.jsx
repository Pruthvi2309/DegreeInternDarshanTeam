import React, {useState} from 'react'
import './Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './SignupValidation';
import { useEffect } from 'preact/hooks';

function Signup() {
    const [name, setName] = useState("")
    const [bday, setBday] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    // const [registerStatus, setRegisterStatus] = useState("")

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('items');
        if(auth){
            navigate('/login')
        }
    })

    const collectData = async(req, res) => {
        console.warn(name, bday, email, phone, password);
        let result = await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify({name, bday, email, phone, password}),
            headers: {'Content-Type':'application/json'},
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("items", JSON.stringify(result));
        if (result){
            navigate('/')
        }
    }

    // const register = (e) => {
    //     e.preventDefault();
    //     axios.post("http://localhost:3000/register",{
    //         name:name,
    //         bday:bday,
    //         email:email,
    //         phone:phone,
    //         password:password
    //     }).then((response) => {
    //         if(response.data.message){
    //             setRegisterStatus(response.data.message);
    //         }
    //         else{
    //             setRegisterStatus("Account Created Successfully");
    //         }
    //     })
    // }

    // const [values, setValues] = useState({
    //     name:'',
    //     bday:'',
    //     email:'',
    //     phone:'',
    //     password:''
    // })
   
    // const [errors, setErrors] = useState({})

    // const handleInput = (event) => {
    //     setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // setErrors(Validation(name, bday, email, phone, password));
    //     if(errors.email === "" && errors.password === "") {
    //         axios.post('http://localhost:3000/register', values)
    //         .then(res => {
    //             navigate('/login');
    //         })
    //         .catch(err => console.log(err));
    //     }
    // }
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
        <form action=''>
        {/* <form> */}
            <h1>Register Here</h1>
            <div className="input-box1">
                <input type='text' onChange={(e) => {setName(e.target.value)}} placeholder='Enter Your Name' required/><box-icon name='user-circle'></box-icon>
                {/* {errors.name && <span className='text-danger'>{errors.name}</span>} */}
            </div>

            <div className="input-box1">
                <input type='date' onChange={(e) => {setBday(e.target.value)}} placeholder='Birthdate' required/> 
                {/* {errors.bday && <span className='text-danger'>{errors.bday}</span>} */}
            </div>
            
            <div className="input-box1">
                <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter Email' required/><box-icon name='mail-send'></box-icon>
                {/* {errors.email && <span className='text-danger'>{errors.email}</span>} */}
            </div>

            <div className="input-box1">
                <input type='text' onChange={(e) => {setPhone(e.target.value)}} placeholder='Phone Number' required/><box-icon name='phone'></box-icon>
                {/* {errors.phone && <span className='text-danger'>{errors.phone}</span>} */}
            </div>

            <div className="input-box1">
                <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter Password' required/><box-icon name='lock'></box-icon>
                {/* {errors.password && <span className='text-danger'>{errors.password}</span>} */}
            </div>

            <button type='submit' onClick={collectData} className="btn1">Register</button>
        </form>
        </div> 
        </div>
    </section>
    </main>
    </div>
  )
}

export default Signup