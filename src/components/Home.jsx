import React from 'react'
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <main className='main-1'>
        {/* <img src="images/baloon.jpg" alt="" /> */}
        <section class="left-sec">
          {/* <h2 className='h1-txt'>We Are Here For You</h2> */}
          <h1 className='h2-txt'>Daily Delights</h1>
          <p>Cakes and bakes from the house of Queens!</p>
          <button>More product</button>
        </section>

        <section class="right-sec">
          <img className='womiani' src='images/womi1bg.png'></img>
        </section>
      </main>

      <div className='boxes'>
          <h1 className='he'>Cakes</h1>
          <div className='lake'> 
              <div className='hey'><img className='lin' src='images/cake01.png' height={250} width={250}/></div> 
              <div className='hey'><img className='lin' src='images/cake02.png' height={250} width={250}/></div>
              <div className='hey'><img className='lin' src='images/cake03.png' height={250} width={250}/></div>
              <div className='hey'><img className='lin' src='images/cake04.png' height={250} width={250}/></div>
          </div>  

          <div className='gf'>
            <p><center>Cakes for every season and reason, <br/> baked with perfection, iced with brilliance</center></p>  
          </div>   
    
          <h1 className='he'>Pastries</h1>
          <div className='lake'> 
              <div className='hey'><img className='lin' src='images/patisserie01.png' height={250} width={250}/></div> 
              <div className='hey'><img className='lin' src='images/patisserie02.png' height={250} width={250}/></div>
              <div className='hey'><img className='lin' src='images/patisserie03.png' height={250} width={250}/></div>
              <div className='hey'><img className='lin' src='images/patisserie04.png' height={250} width={250}/></div>
          </div> 

          <div className='gf-2'>
            <p><center>Freshly baked all day. Every day!<br/>Come Experience The Taste Of Joy.</center></p>  
          </div>         
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home