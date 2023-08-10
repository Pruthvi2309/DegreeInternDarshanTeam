import React from 'react'
import './Product.css'

function Product() {
  return (
    <div>
        <div classNameName="heading">
            <h2><center>Our Exclusive Products</center></h2>
        </div>

        <section className='prodi'>
        <div className="product-card">
            <img src="images/P1.jpg" alt="Product Image"/>
            <h2 className="product-title"><center>Red Velvet Cake</center></h2>
            <span className="product-price"><center>Rs.600</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <img src="images/P2.jpg" alt="Product Image"/>
            <h2 className="product-title"><center>Chocolate Cake</center></h2>
            <span className="product-price"><center>Rs.550</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <img src="images/P3.jpg" alt="Product Image"/>
            <h2 className="product-title"><center>Vanilla Cupcake</center></h2>
            <span className="product-price"><center>Rs.200</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <img src="images/P4.jpg" alt="Product Image"/>
            <h2 className="product-title"><center>Chocolate Cupcake</center></h2>
            <span className="product-price"><center>Rs.250</center></span>
            <button className="buy-button">Buy Now</button>
        </div>
        </section>

        <section className="prodi">
        <div className="product-card">
            <img src="images/P5.jpg" alt="Product Image"/>
            <h2 className="product-title"><center>Black Forest Cake</center></h2>
            <span className="product-price"><center>Rs.500</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <img src="images/P6.jpeg" alt="Product Image"/>
            <h2 className="product-title"><center>Rainbow Cake</center></h2>
            <span className="product-price"><center>Rs.650</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <img src="images/P7.jpg" alt="Product Image"/>
            <h2 className="product-title"><center>Fruit Cake</center></h2>
            <span className="product-price"><center>Rs.400</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <img src="images/P8.jpeg" alt="Product Image"/>
            <h2 className="product-title"><center>Cheese Cake</center></h2>
            <span className="product-price"><center>Rs.645</center></span>
            <button className="buy-button">Buy Now</button>
        </div>
        </section>
    </div>
  )
}

export default Product