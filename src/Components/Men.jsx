import React from 'react'
import './Men.css'

function Men() {
  return (
    <div className='Men'>
        <div className='heading'>
        {/* <a href=""><img src="images/poster.avif" alt="" width={1600}/></a> */}
        <h1 className='header-text'>New Arrivals</h1>
        </div>
        <section className='sec'>
            <div className="products">
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider-image1.webp" alt="" /></a></div>
                    <div className="title1">Dennis Lingo Martin Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">H&M Overshirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider-image1.webp" alt="" /></a></div>
                    <div className="title1">Plateau White Shirt</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                <div className="card">
                    <div className="img"><a href="#"><img src="images/slider2.webp" alt="" /></a></div>
                    <div className="title1">Tuxedo Shirt </div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        {/* <div className="price">100$</div> */}
                        {/* <button className="btn">Buy Now</button> */}
                    </div>
                </div>
                
                
                

                
            </div>

        </section>
        <div className='heading'>
        <h1 className='header-text1'>Categories</h1>
        </div>
       <section className='sec'>
            <div className="products1">
                <div className="card">
                    <div className="img1"><a href="#"><img src="images/hover-shirt-1.avif" alt="" /></a></div>
                    <div className="title1">Men</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        
                    </div>
                </div>
                <div className="card">
                    <div className="img2"><a href="#"><img src="images/women.jpg" alt="" /></a></div>
                    <div className="title1">Women</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                        
                    </div>
                </div>
                <div className="card">
                    <div className="img3"><a href="#"><img src="images/kid-hover.jpg" alt="" /></a></div>
                    <div className="title1">Kids</div>
                    <p className='p-text'>Go Crazy with All our Outifits!</p>
                    <div className="box">
                       
                    </div>
                </div>
                
                
                
                

                
            </div>

        </section>
        
    </div>
  )
}

export default Men