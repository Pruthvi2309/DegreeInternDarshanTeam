import React, {useState, useEffect} from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

function Product() {
    // const url = "http://localhost:3000/prodi";
    const [data, setData] = useState([]);

    // const fetchInfo = () => {
    //     return fetch(url)
    //     .then((res) => res.json())
    //     .then((d) => setData(d.data))
    //     .catch((error) => {
    //         console.log("Error fetching data:", error);
    //         setData([]);
    //     });
    // };
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
    <div>
        <div className="heading">
            <h3><center>Our Exclusive Products</center></h3>
        </div>

        <section className='prodi'>
            {data.map((curelem)=> {
                const img = "product/"+curelem.pid+".jpg";
                return (
        <div className="product-card" key={curelem.pid}>
            <Link to='/product1'><img src={img} alt="Product Image"/></Link>
            <h2 className="product-title"><center>{curelem.pname}</center></h2>
            <span className="product-price"><center>Rs{curelem.pprice}</center></span>
            <button className="buy-button">Buy Now</button>
        </div>
        // <div className="product-card">
        //     <Link to='/product2'><img src="images/P2.jpg" alt="Product Image"/></Link>
        //     <h2 className="product-title"><center>Chocolate Cake</center></h2>
        //     <span className="product-price"><center>Rs.550</center></span>
        //     <button className="buy-button">Buy Now</button>
        // </div>

        // <div className="product-card">
        //     <Link to='/product3'><img src="images/P3.jpg" alt="Product Image"/></Link>
        //     <h2 className="product-title"><center>Vanilla Cupcake</center></h2>
        //     <span className="product-price"><center>Rs.200</center></span>
        //     <button className="buy-button">Buy Now</button>
        // </div>

        // <div className="product-card">
        //     <Link to='/product4'><img src="images/P4.jpg" alt="Product Image"/></Link>
        //     <h2 className="product-title"><center>Chocolate Cupcake</center></h2>
        //     <span className="product-price"><center>Rs.250</center></span>
        //     <button className="buy-button">Buy Now</button>
        // </div>
                )
                })};
        </section>

        {/* <section className="prodi">
        <div className="product-card">
            <Link to='/product5'><img src="images/P5.jpg" alt="Product Image"/></Link>
            <h2 className="product-title"><center>Black Forest Cake</center></h2>
            <span className="product-price"><center>Rs.500</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <Link to='/product6'> <img src="images/P6.jpg" alt="Product Image"/></Link>
            <h2 className="product-title"><center>Rainbow Cake</center></h2>
            <span className="product-price"><center>Rs.650</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <Link to='/product7'><img src="images/P7.jpg" alt="Product Image"/></Link>
            <h2 className="product-title"><center>Fruit Cake</center></h2>
            <span className="product-price"><center>Rs.400</center></span>
            <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
            <Link to='/product8'><img src="images/P8.jpg" alt="Product Image"/></Link>
            <h2 className="product-title"><center>Cheese Cake</center></h2>
            <span className="product-price"><center>Rs.645</center></span>
            <button className="buy-button">Buy Now</button>
        </div>
        </section> */}
    </div>
  )
}

export default Product