import { useState } from 'preact/hooks'
import { Route, Routes } from 'react-router-dom'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Product2 from './components/Product2'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Home/>
      <Product/>
      <Product2/>
      <Aboutus/>
      <Contactus/>
      <Login/>
      <Signup/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product2/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
