import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Login from './Components/Login'
import Register from './Components/Register'

import NewNav from './Components/NewNav'
import Footer from './Components/Footer'
import Marquee from './Components/Marquee' 

import Des from './Components/Des'
import Homepage from './Components/Homepage'
import Menpage from './Components/Menpage'
import Women from './Components/Women'
import Kids from './Components/Kids'
import MenShirt from './Components/MenShirt'
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
        <NewNav/> 
        {/* <Login/>   */}
        {/* <Register/> */}
        <Routes>
        <Route path='/' element={<Homepage/>}/>  
        <Route path='/Men' element={<Menpage/>}/>
        <Route path='/Women' element={<Women/>}/>
        <Route path='/Kids' element={<Kids/>}/> 
        <Route path='/Desc' element={<Des/>}/> 
        <Route path='/Register' element={<Register/>}/> 
        <Route path='/Login' element={<Login/>}/> 

        <Route path='/Men-Shirts' element={<MenShirt/>}/>
        <Route path='/Men-Tshirts' element={<MenTshirt/>}/>
        <Route path='/Men-Trouser' element={<MenTrouser/>}/> 

        <Route path='/Kids-Shirts' element={<KidsShirt/>}/>
        <Route path='/Kids-Tshirts' element={<KidsTshirt/>}/>
        <Route path='/Kids-Trouser' element={<KidsTrouser/>}/> 

        <Route path='/Women-Shirts' element={<WomenShirt/>}/>
        <Route path='/Women-Tshirts' element={<WomenTshirt/>}/>
        <Route path='/Women-Trouser' element={<WomenTrouser/>}/> 
       </Routes>
       
       
        {/* <WomenTshirt/> */}
        {/* <Women/> */}
        {/* <Kids/> */}
       {/* <Desc/> */}
      {/* <Homepage/> */}
      {/* <Men/> */}
      {/* <MenShirt/> */}
      {/* <Menpage/> */}
     
      {/* <Slider/> */}
      {/* <Homepage/> */}
      <Footer/>
       {/* <Styled/> */}
    </>
  )
}

export default App
