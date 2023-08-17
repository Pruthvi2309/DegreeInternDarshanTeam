import React from 'react'
import'./Product1.css';
// import RatingStar2 from './components/RatingStar2';

function Product8() {
  return (
    <>
    <div className="row">
        <div className="col-md-6">
        <img className='lake'src="images/P8.jpeg"/>
        </div>

        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Cheese Cake(500 gm)</h2>
          {/* <RatingStar2/> */}
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
          <i className='fas fa-star-half-alt'></i>
        <p>Made by: Heena singh | Karamsad</p>      
        <hr></hr>
        <span className="p1-price">Rs.645</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src="images/P8.jpeg" alt="Product Image"/><br></br>
            <span className="price">500 gm</span><br></br>
            <span className="p">Rs.645</span>
          </div>

          <div className='p-card'>
           <img className='river'src="images/P8.jpeg" alt="Product Image"/><br></br>
            <span className="price">1 kg</span><br></br>
            <span className="p">Rs.1290</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>Cheesecake is a sweet dessert made with a soft fresh cheese, eggs, and sugar. It may have a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.Cheesecake may be baked or unbaked, and is usually refrigerated.</p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon">Key Lime Cheesecake</option>
          <option value="vanilla">Chocolate Peanut Butter Cheesecake</option>
          <option value="citric">Banana Cream Cheesecake</option>
          <option value="kitkat">White Chocolate Raspberry Cheesecake</option>
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

export default Product8