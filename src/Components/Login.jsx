import React, { useState,useEffect } from 'react';
import './Login.css'
import styled from 'styled-components'
import { Link , useNavigate } from 'react-router-dom'
function Login() {
    // const [user, setName] = useState("");
    // const [pass, setContact] = useState("");

    

    // const collectData = async () => {
    //     // console.warn(username, password, email, role);
    //     let result = await fetch('http://localhost:4000/signup', {
    //         method: 'post',
    //         body: JSON.stringify({ user, pass}),
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //     result = await result.json();
    //     console.warn(result);
    //     localStorage.setItem("items", JSON.stringify(result));
        
    // }

    // const [values, setValues] = useState({

    //     username: '',
    //     password: ''
    // })

    // const handleSubmit =(event)=> {
    //     event.preventDefault();
    // }


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    //Logic for login into website.
    const fetchData = async () => {
        const userData = {email, password};

        try{
            const response = await fetch('http://localhost:4000/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),     
            });

            const data = await response.json();
            if(data.success){
                console.log("hello");
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
    <Wrapper>
        {/* <div className="loginf"> */}
        {/* <img src="images/loginNew.png" alt="" /> */}
            <section className="ful">
                
                {/* <div className="img-cont">
                    
                        <img src="images/loginNew.png" alt="" />
                        
                    
                </div> */}
                <div className="main-cont">
                {/* <img src="images/loginNew.png" alt="" /> */}
                    <div className="formbx">
                        <h2>Login</h2>
                        <form action="">
                            <div className="inputbx">
                                <span>Username</span>
                                {/* <input type="text" value={user} onChange={(e) => setName(e.target.value)} /><br /> */}
                                <input type="text" value={email} name='email' onChange={(e) => setEmail(e.target.value)}/>
                                <div id="user_error">please enter your email or username*</div>
                            </div>
                            
                            <div className="inputbx">
                                <span>Password</span>
                                {/* <input type="password" value={pass} onChange={(e) => setContact(e.target.value)}  /><br/> */}
                                <input type="password" value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                                <div id="pass_error">please enter your password*</div>
                            </div>
                            <div className="remember">
                                <label htmlFor=""><input type="checkbox" />Remember me</label>
                            </div>
                            <div className="inputbx">
                                <input type="submit" onClick={fetchData} value="Sign in" name="" id="" />
                            </div>
                            <div className="inputbx">
                                <p>Don't have an account?<Link to="/Register" href="">Register Now</Link></p>
                            </div>
                        </form>
                        <h3>Our Social Media</h3>
                        <ul className='social-l'>
                            <li className='google1'><i class="fa-brands fa-instagram"></i></li>
                            <li className='fb1'><i class="fa-brands fa-facebook"></i></li>
                            <li className='twitter1'><i class="fa-brands fa-x-twitter"></i></li>
                            <li className='amazon1'><i class="fa-brands fa-amazon"></i></li>
                            {/* <li><i class="fa-brands fa-linkedin"></i></li> */}
                        </ul>
                    </div>
                </div>
            </section>   
        {/* </div>     */}



    </Wrapper>
  )
}
const Wrapper=styled.section`


    /* background-size: cover; */
    background: url(./backg.jpg);
    margin-top: 10rem;
    font-family: Georgia, 'Times New Roman', Times, serif;

section{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: black; */
   /* margin: 5rem 5rem; */
   /* background: url(./Login1.png); */
  
}
#user_error,
#pass_error {
    color: red;
    display: none;
    margin-left:1rem
    
}


section .img-cont{
    position: relative;
    width: 50%;
    height: 100%;
}
section .img-cont::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.2));
    z-index: 1;
    /* mix-blend-mode: screen; */
}
section .img-cont img{justify-content: center;
    align-items: center;
    display: flex;
    width: 50%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit:cover;
}
section .main-cont{
    justify-content: center;
    align-items: center;
    display: flex;
    width: 96%;
    height: 100%;
    /* margin-left: 50%; */
    /* background: url(./Login1.png); */
    background-size: cover;
    margin-left: 4rem;
    padding: 14rem;
    
}
section .main-cont .formbx{
    width: 50%;
    z-index: 1;
    // background:rgba(7, 4, 4, 0.9);
    background:rgba(6, 6, 6, 0.8);
    width:70%;
    padding: 95px;
    padding-bottom: 4rem;

}
section .main-cont .formbx h2{
    color: white;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    /* border-bottom: 4px solid lightgreen;  */
    display: inline-block;
    letter-spacing: 1px;
    justify-content: center;
    align-items: center;
    display: flex;
}
section .main-cont .formbx .inputbx{
    margin-bottom: 20px;
}
section .main-cont .formbx .inputbx span{
    font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
    color: white;
    font-weight: 300;
    letter-spacing: 1px;

}
section .main-cont .formbx .inputbx input{
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid white;
    letter-spacing: 1px;
    color: white;
    background: transparent;
    border-radius: 30px;
}
section .main-cont .formbx .inputbx input[type="submit"] {
    background: #ff4584;
    color: white;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: pointer;
}
section .main-cont .formbx .inputbx input[type="submit"]:hover{
    background: darkgreen;
}
section .main-cont .formbx .remember{
    margin-bottom: 10px;
    color: white;
    font-weight: 400;
    font-size: 14px;
    /* display: flex;
    justify-content: center;align-items: center; */

}
section .main-cont .formbx .inputbx p{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
section .main-cont .formbx .inputbx p a{
    color: #ff4584;
}
section .main-cont .formbx .inputbx p a:active{
    background:none;
}
section .main-cont .formbx h3{
    color: #ff4584;
    text-align: center;
    margin: 80px 0 10px;
    font-weight: 500;
    margin-left: 0.5rem;
}
section .main-cont .formbx .social-l{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -1.5rem;
}
section .main-cont .formbx .social-l li{
    list-style: none;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #607d8b;
    border-radius: 30px;
    margin: 0 7px;
    cursor: pointer;


}
section .main-cont .formbx .social-l .google1:hover 
{
    background: #DD2A7B;
-ms-transform: scale(1.1);
  -webkit-transform: scale(1.1); 
  transform: scale(1.1);  


}
section .main-cont .formbx .social-l .fb1:hover 
{
    background: #4267B2;
    -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1); 
      transform: scale(1.1); 

}
section .main-cont .formbx .social-l .twitter1:hover 
{
    background:#00acee;
    -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1); 
      transform: scale(1.1); 


}
section .main-cont .formbx .social-l .amazon1:hover 
{
    background: #FF9900;
    -ms-transform: scale(1.1);
      -webkit-transform: scale(1.1); 
      transform: scale(1.1); 


}
@media (max-width: 786px) {
    section {
      flex-direction: column;
      margin-top: 0;
    }
    section .img-cont {
      width: 100%;
      height: 40vh;
    }
    section .main-cont {
      width: 100%;
      margin-left: 0;
      padding: 4rem 1rem;
      align-items: center;
    }
    section .main-cont .formbx {
      width: 90%;
      padding: 2rem;
    }
    section .main-cont .formbx h2 {
      font-size: 1.2em;
    }
  }

  
`

export default Login

