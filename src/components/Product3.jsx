import React from 'react'
import'./Product1.css';
import RatingStar2 from './RatingStar2';

function Product3() {
  return (
    <>
    <div className="row">
        <div className="col-md-6">
        <img className='lake'src="images/P3.jpg"/>
        </div>
        
        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Vanilla  Cake(125 gm)</h2>
          <RatingStar2/>
        <p>Made by: pooja thaker | Anand</p>      
        <hr></hr>
        <span className="p1-price">Rs.200</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src="images/P3.jpg" alt="Product Image"/><br></br>
            <span className="price">125 gm</span><br></br>
            <span className="p">Rs.200</span>
          </div>

          <div className='p-card'>
           <img className='river'src="images/P3.jpg" alt="Product Image"/><br></br>
            <span className="price">250 kg</span><br></br>
            <span className="p">Rs.400</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>Vanilla cupcakes are small cakes that are flavored with vanilla. These cupcakes typically are white or yellow cake, but cooks can add unflavored food coloring to change the cupcakes' color. Vanilla cupcakes might have frostings or glazes, or they can remain plain and uncovered.</p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon">Cream Cheese Frosting</option>
          <option value="vanilla">Strawberry Buttercream</option>
          <option value="citric">White Chocolate Buttercream</option>
          <option value="kitkat">Coffee Buttercream Frosting</option>
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

export default Product3