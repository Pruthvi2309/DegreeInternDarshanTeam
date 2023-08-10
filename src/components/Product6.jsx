import React from 'react'
import'./Product1.css';
import RatingStar2 from './RatingStar2';

function Product6() {
  return (
    <>
    <div className="row">
        <div className="col-md-6">
        <img className='lake'src="images/P6.jpeg"/>
        </div>

        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Rainbow Cake(500 gm)</h2>
          <RatingStar2/>
        <p>Made by: Diya Parmar | AV Road</p>      
        <hr></hr>
        <span className="p1-price">Rs.650</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src="images/P6.jpeg" alt="Product Image"/><br></br>
            <span className="price">500 gm</span><br></br>
            <span className="p">Rs.650</span>
          </div>

          <div className='p-card'>
           <img className='river'src="images/P6.jpeg" alt="Product Image"/><br></br>
            <span className="price">1 kg</span><br></br>
            <span className="p">Rs.1300</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>The Rainbow Cake isn't just a dessert; it symbolizes unity, acceptance, and celebration. Each layer represents the beauty of diversity, reminding us that together, we can create something extraordinary.</p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon"> sweet and sour raspberries</option>
          <option value="vanilla">Warming orange</option>
          <option value="citric">Fruity blueberry</option>
          <option value="kitkat">Perfumey lavender</option>
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

export default Product6