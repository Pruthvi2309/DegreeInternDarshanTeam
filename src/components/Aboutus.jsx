import React from 'react';
import './Aboutus.css'; // Make sure to adjust the path to your CSS file

function AboutUs() {
  return (
    <>
    <div className="heading-4">
            <h2><center>About Us</center></h2>
        </div>
    <div className='bg'>
    <div className="About" id="about">
      <div className="about-main">
        <div className="Image">
          <img src="images/womi3.jpg" alt="Cookies Pastry" />
        </div>
        <div className="About-text">
          
          <h3>Why home products?</h3>
          <p className='discri'>
            Home products serve essential needs for daily living, enhancing comfort, organization, and aesthetics.
            They create a welcoming environment, facilitate convenience, and improve overall quality of life.
            Additionally, the home product market presents lucrative opportunities for businesses due to high demand
            and diverse consumer preferences.
          </p>
        </div>
      </div>
      {/* <a href="#" className="about-btn">Order Now</a> */}
    </div>
    </div>
    </>
  );
}

export default AboutUs;



