import React from 'react'
import'./Product1.css';
import RatingStar2 from './RatingStar2';

function Product2() {
  return (
    <>
    <div className="row">
        <div className="col-md-6">
        <img className='lake'src="images/P2.jpg"/>
        </div>
    
        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Chocolate Cake(500 gm)</h2>
          <RatingStar2/>
        <p>Made by: Anjali Mehta | Bakrol</p>      
        <hr></hr>
        <span className="p1-price">Rs.550</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src="images/P2.jpg" alt="Product Image"/><br></br>
            <span className="price">500 gm</span><br></br>
            <span className="p">Rs.550</span>
          </div>

          <div className='p-card'>
           <img className='river'src="images/P2.jpg" alt="Product Image"/><br></br>
            <span className="price">1 kg</span><br></br>
            <span className="p">Rs.1100</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>A chocolate cake is a cake made with chocolate or cocoa. The ingredients are put into a bowl and mixed together; then the mixed ingredients are put into a cake tin and put in an oven until it is fully cooked. Then the cake is taken out of the oven and placed on a cooling stand.</  p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon">Chocolate fudge cake</option>
          <option value="vanilla">Chocolate lava cake</option>
          <option value="citric">Chocolate truffle cake</option>
          <option value="kitkat">Chocolate mud cake</option>
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

export default Product2