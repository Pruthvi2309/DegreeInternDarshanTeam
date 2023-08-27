import React, {useState, useEffect } from 'react'
import'./Product1.css';
// import RatingStar2 from '../ratingstar/RatingStar2';

function Product1() {
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    try{
        const response = await fetch("http://localhost:3000/prodi",{
            method: 'get',
            headers: {'Content-Type':'application/json'},
        });

        const responseData = await response.json();
        setData(responseData);
    }
    catch(error){
        console.error('Error fetching data',error);
    }
    }

useEffect(() => {
    fetchInfo();
}, []);
  return (
    <>
      {data.map((elem) => {
        const img = "product/"+elem.pid+".jpg";
        return (
          
    <div className="row">
        <div className="col-md-6" key={elem.pid}>
        <img className='lake'src={img}/>
        </div>

        <div className="col-md-6 desc">
          <h2 className="p1-title"><span><img className='veg' src="images/vebg.png" height={30} width={30}/></span>Red Velvet Cake(500 gm)</h2>
          {/* <RatingStar2/> */}
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star-half-alt'></i>
        <p>Made by: Krishna Patel | Nadiad</p>      
        <hr></hr>
        <span className="p1-price">Rs.600</span>
        <h5 className="variant">Select variant</h5>

        <div className='hide'>
          <div className='p-card'>
           <img className='river' src={img} alt="Product Image"/><br></br>
            <span className="price">500 gm</span><br></br>
            <span className="p">Rs.600</span>
          </div>

          <div className='p-card'>
           <img className='river'src={img} alt="Product Image"/><br></br>
            <span className="price">1 kg</span><br></br>
            <span className="p">Rs.1200</span>
          </div>
        </div><br></br>
        <hr></hr>
        <h5>Description</h5>
        <p>Red velvet cake tastes like very mild cocoa with a slightly tart edge. The cream cheese frosting is the most forward flavor. Perhaps even more important than the taste is the texture: smooth, soft, tender and light with creamy icing.</  p>
        <hr></hr>
        <h5>Flavours</h5>
        <select name="" className='drop-down' placeholder='Select Flavour'>
          <option value="coco melon">Coco Melon</option>
          <option value="vanilla">Vanilla</option>
          <option value="citric">Citric</option>
          <option value="kitkat">Kitkat</option>
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
      )
    })}
    </>
  )
}

export default Product1