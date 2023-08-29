import React, { useEffect, useState } from 'react';
import './Des.css';
import { Link } from 'react-router-dom'

function Des() {
  const [imgId, setImgId] = useState(1);

  const imgClickHandler = (event) => {
    event.preventDefault();
    const newImgId = parseInt(event.currentTarget.getAttribute('data-id'));
    setImgId(newImgId);
  };

  useEffect(() => {
    const slideImage = () => {
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
      document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    };

    slideImage();

    const imgBtns = document.querySelectorAll('.img-select a');
    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', imgClickHandler);
    });

    window.addEventListener('resize', slideImage);

    return () => {
      imgBtns.forEach((imgItem) => {
        imgItem.removeEventListener('click', imgClickHandler);
      });

      window.removeEventListener('resize', slideImage);
    };
  }, [imgId]);



  const [data, setData] = useState([]);
    
  const fetchInfo = async () =>{
      try{
          const response  = await fetch('http://localhost:5000/desc',{
              method: 'get',
              headers: {'Content-Type': 'application/json'},
          });

          const responseData = await response.json();
          setData(responseData);
          
      }catch(err) {
          console.error('error fetching data',err);
      }
  }
  useEffect(()=>{
      fetchInfo();
  },[]);

  return (
    <>
         <div className = "card-wrapper">
         <div className = "card0">
        {/* <!-- card left --> */}
        <div className = "product-imgs">
          <div className = "img-display">
            <div className = "img-showcase">
              <img src = "images/desc-shirt.jpg" alt = "shoe image"/>
              <img src = "images/desc-shirt1.jpg" alt = "shoe image"/>
              <img src = "images/desc-shirt2.jpg" alt = "shoe image"/>
              <img src = "images/desc-shirt3.jpg" alt = "shoe image"/>
              
            </div>
          </div>
          <div className = "img-select">
            <div className = "img-item">
              <a href = "#" data-id = "1">
                <img src = "images/desc-shirt.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "2">
                <img src = "images/desc-shirt1.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "3">
                <img src = "images/desc-shirt2.jpg" alt = "shoe image"/>
              </a>
            </div>
            <div className = "img-item">
              <a href = "#" data-id = "4">
                <img src = "images/desc-shirt3.jpg" alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- card right --> */}
          {data.map((elem)=>{
            return(
        <div className = "product-content">
              
            
          <h2 className = "product-title">{elem.shirt_name}</h2>
          <Link to="/" href = "#" className = "product-link">visit Aesthetics</Link>
          <div className = "product-rating">
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star"></i>
            <i className = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div className = "product-price">
            <p className = "last-price">Old Price: <span><i class="fa-solid fa-indian-rupee-sign"></i>{elem.old_price}</span></p>
            <p className = "new-price">New Price: <span><i class="fa-solid fa-indian-rupee-sign"></i>{elem.new_price}</span></p>
          </div>

          <div className = "product-detail">
            <h2>about this item: </h2>
            <p>{elem.description}</p>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p> */}
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p> */}
            <ul>
              <li>Color: <span>{elem.color}</span></li>
              <li>Available: <span>{elem.available}</span></li>
              <li>Category: <span>{elem.category}</span></li>
              <li>Shipping Area: <span>{elem.shipping_area}</span></li>
              <li>Shipping Fee: <span>{elem.shipping_fee}</span></li>
            </ul>
          </div>
          <div className="box12">
                        
                        <div className="size-btn12">
                          <a className='dars1' href="#">XS</a>
                          <a className='dars1' href="#">S</a>
                          <a className='dars1' href="#">L</a>
                          <a className='dars1' href="#">XL</a>                         
                        </div>

         </div>

          <div className = "purchase-info">
            <button type = "button" className = "btn">
              Add to Cart <i className = "fas fa-shopping-cart"></i>
            </button>
            <button type = "button" className = "btn">Compare</button>
          </div>
        </div>
                        )
                      })}
      </div>
    </div>

    </>
  )
}

export default Des