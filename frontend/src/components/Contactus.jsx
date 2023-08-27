import React, {useState} from 'react'
import './Contactus.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'preact/hooks';


export const Contactus = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('items');
    if(auth){
      navigate('/')
    }
  })

  const contactData = async(req, res) => {
    console.warn(name, email, message);
    let result = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        body: JSON.stringify({name, email, message}),
        headers: {'Content-Type':'application/json'},
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("items", JSON.stringify(result));
    if (result){
        navigate('/')
    }
}

  return (
    <>
    <div className="heading-5">
            <h3><center>Contact Us</center></h3>
        </div>
    <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
          <box-icon type='solid' name='home'></box-icon>
          <div className="topic">Address</div>
          <div className="text-one">Anand</div>
          {/* <div className="text-two">Birendranagar 06</div> */}
        </div>
        <div className="phone details">
          {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
          <box-icon type='solid' name='phone-call'></box-icon>
          <div className="topic">Phone</div>
          <div className="text-one">+91 901631292</div>
          <div className="text-two">+91 9054762792</div>
        </div>
        <div className="email details">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <box-icon type='solid' name='envelope'></box-icon>
          <div className="topic">Email</div>
          <div className="text-one">admi123@gmail.com</div>
          {/* <div className="text-two">info.codinglab@gmail.com</div> */}
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>
          If you have any work from me or any types of queries related to my tutorial, you can send me a message from here.
          It's my pleasure to help you.
        </p>
        <form action="#">
          <div className="input-box-5">
            <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder="Enter your name" />
          </div>
          <div className="input-box-5">
            <input type="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your email" />
          </div>
          {/* <div className="input-box message-box">
            <input type="text" placeholder="Type Your Message" />
          </div> */}
          <div className="input-box-5">
            {/*<input type="text" placeholder="Type Your Message" />*/}
            <textarea onChange={(e) => {setMessage(e.target.value)}} rows="4" cols="50" name="comment" form="usrform" placeholder="Type Your Message"></textarea>
          </div>
          <div>
            <button onClick={contactData} className="button-23" type="submit">Send Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </>
);
};

export default Contactus;
