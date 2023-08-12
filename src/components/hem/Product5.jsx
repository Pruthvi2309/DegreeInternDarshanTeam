import React from 'react'
import'./Product1.css';
// import RatingStar2 from './components/RatingStar2';

function Product5() {
  return (
    <>
    <div className="row">
        <div className="col-md-6">
        <img className='lake'src="images/P5.jpg"/>
        </div>

        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Black Forest Cake(500 gm)</h2>
          {/* <RatingStar2/> */}
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='fas fa-star-half-alt'></i>
        <p>Made by: Unnati Shah | vv nagar</p>      
        <hr></hr>
        <span className="p1-price">Rs.500</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src="images/P5.jpg" alt="Product Image"/><br></br>
            <span className="price">500 gm</span><br></br>
            <span className="p">Rs.500</span>
          </div>

          <div className='p-card'>
           <img className='river'src="images/P5.jpg" alt="Product Image"/><br></br>
            <span className="price">1 kg</span><br></br>
            <span className="p">Rs.1000</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>Black Forest gateau consists of several layers of chocolate sponge cake sandwiched with whipped cream and cherries. It is decorated with additional whipped cream, maraschino cherries, and chocolate shavings.</p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon">Black Forest Oreo Cake</option>
          <option value="vanilla">Yummy Black Forest Treat Cake</option>
          <option value="citric">Flakey Hearts Black Forest Cake</option>
          <option value="kitkat">Creamy Drip Black Forest Cake</option>
          </select>
          <hr></hr>
          <label><h5>Message on cake (20 characters)</h5></label><br></br>
          <input type='text' className='Message' placeholder='Type Here'/>
          <hr></hr>
          <footer className='butn'>
            <button className="b-button me-5">Order Now<box-icon className='bag' name='shopping-bag'></box-icon></button>
            <button className="wishlist">Wishlist<box-icon className='heart' name='heart' ></box-icon></button>
          </footer>
      </div>
    </div>
    </>
  )
}

export default Product5