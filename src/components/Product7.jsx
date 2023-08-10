import React from 'react'
import'./Product1.css';
import RatingStar2 from './RatingStar2';

function Product7() {
  return (
    <>
    <div className="row">
        <div className="col-md-6">
        <img className='lake'src="images/P7.jpg"/>
        </div>

        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Fruit Cake(500 gm)</h2>
          <RatingStar2/>
        <p>Made by: Mahima Chauhan | Lambhvel</p>      
        <hr></hr>
        <span className="p1-price">Rs.400</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src="images/P7.jpg" alt="Product Image"/><br></br>
            <span className="price">500 gm</span><br></br>
            <span className="p">Rs.400</span>
          </div>

          <div className='p-card'>
           <img className='river'src="images/P7.jpg" alt="Product Image"/><br></br>
            <span className="price">1 kg</span><br></br>
            <span className="p">Rs.800</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>Fresh fruit cake showcases colorful, fresh fruit slices beautifully placed atop fluffy whipped cream enveloping soft layers of sponge cake.It's the perfect cake to highlight sweet, seasonal fruit and is great for birthdays, parties and any other occasion</p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon">Blueberry Bliss Cake</option>
          <option value="vanilla">Litchi Cake</option>
          <option value="citric">Mixed Fresh Fruit Cake</option>
          <option value="kitkat">Choco Orange Delight Cake</option>
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

export default Product7