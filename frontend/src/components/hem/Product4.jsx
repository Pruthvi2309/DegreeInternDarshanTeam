import React from 'react'
import'./Product1.css';
// import RatingStar2 from './components/RatingStar2';

function Product4() {
  return (
    <>
    <div className="row">
        <div className="col-md-6">
        <img className='lake'src="images/P4.jpg"/>
        </div>

        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Chocolate Cupcake(125 gm)</h2>
          {/* <RatingStar2/> */}
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='fas fa-star-half-alt'></i>
        <p>Made by: Neha Pandya | Borsad</p>      
        <hr></hr>
        <span className="p1-price">Rs.250</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src="images/P4.jpg" alt="Product Image"/><br></br>
            <span className="price">125 gm</span><br></br>
            <span className="p">Rs.250</span>
          </div>

          <div className='p-card'>
           <img className='river'src="images/P4.jpg" alt="Product Image"/><br></br>
            <span className="price">250 kg</span><br></br>
            <span className="p">Rs.500</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>Chocolate Cupcake is a small cake baked in a small, thin paper cup. It uses cocoa or unsweetened chocolate along with flour as main ingredients and is usually decorated with gorgeous frosting and sprinkles on top.</p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon">Peppermint Chocolate Cupcake</option>
          <option value="vanilla">Carrot Cake Cupcake</option>
          <option value="citric">Rose Garden Cupcake</option>
          <option value="kitkat">Mexican Hot Chocolate Cupcake</option>
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

export default Product4