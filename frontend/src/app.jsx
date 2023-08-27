import { useState } from 'preact/hooks'
import { Route, Routes } from 'react-router-dom'
import Axios from 'axios'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Product from './components/Product'
import Product1 from './components/hem/Product1'
import Product2 from './components/hem/Product2'
import Product3 from './components/hem/Product3'
import Product4 from './components/hem/Product4'
import Product5 from './components/hem/Product5'
import Product6 from './components/hem/Product6'
import Product7 from './components/hem/Product7'
import Product8 from './components/hem/Product8'
import Addproduct from './components/afterlogin/Addproduct'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Home/> */}
      {/* <Product/> */}
      {/* <Product2/> */}
      {/* <Aboutus/> */}
      {/* <Contactus/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Routes> 
        <Route path='/' exact element={<Home/>}/>
        <Route path='/product' exact element={<Product/>}/>
        <Route path='/about' exact element={<Aboutus/>}/>
        <Route path='/contact' exact element={<Contactus/>}/>
        <Route path='/login'exact element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/product1'exact element={<Product1/>}/>
        {/* <Route path='/product2' element={<Product2/>}/> */}
        {/* <Route path='/product3' element={<Product3/>}/> */}
        {/* <Route path='/product4' element={<Product4/>}/> */}
        {/* <Route path='/product5' element={<Product5/>}/> */}
        {/* <Route path='/product6' element={<Product6/>}/> */}
        {/* <Route path='/product7' element={<Product7/>}/> */}
        {/* <Route path='/product8' element={<Product8/>}/> */}
        <Route path='/addproduct' exact element={<Addproduct/>}/>
      </Routes>
      {/* <Addproduct/> */}
      <Footer/>
    </>
  )
}
