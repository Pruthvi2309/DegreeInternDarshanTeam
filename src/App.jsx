import { useState } from 'react'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './Components/Footer'
import Header from './Components/Header'

// import Homepage from './Components/Homepage'
// import Men from './Components/Men' 

import Menpage from './Components/Menpage'
import Marquee from './Components/Marquee' 
import Women from './Components/Women'
import Kids from './Components/Kids'
import { Route, Routes } from 'react-router-dom'
import MenShirt from './MenShirt'
import MenTrouser from './Components/MenTrouser'
import MenTshirt from './Components/MenTshirt'
import WomenShirt from './Components/WomenShirt'
import WomenTshirt from './Components/WomenTshirt'
import WomenTrouser from './Components/WomenTrouser'
import KidsShirt from './Components/KidsShirt'
import KidsTshirt from './Components/KidsTshirt'
import KidsTrouser from './Components/KidsTrouser'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Marquee/>
        <Header/> 
        <Routes>
        {/* <Route path='/' element={<Homepage/>}/> */}
        <Route path='/Men' element={<Menpage/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Kids' element={<Kids/>}/>

        <Route path='/Men-Shirts' element={<MenShirt/>}/>
        <Route path='/Men-Tshirts' element={<MenTshirt/>}/>
        <Route path='/Men-Trouser' element={<MenTrouser/>}/> 

        <Route path='/Women-Shirts' element={<WomenShirt/>}/>
        <Route path='/Women-Tshirts' element={<WomenTshirt/>}/>
        <Route path='/Women-Trouser' element={<WomenTrouser/>}/> 

        <Route path='/Kids-Shirts' element={<KidsShirt/>}/>
        <Route path='/Kids-Tshirts' element={<KidsTshirt/>}/>
        <Route path='/Kids-Trouser' element={<KidsTrouser/>}/> 
       </Routes>

        {/* <Women/> */}
        {/* <Kids/> */}
       
      {/* <Homepage/> */}
      {/* <Men/> */}

      {/* <Menpage/> */}
     
      
      <Footer/>
    
    </>
  )
}

export default App
