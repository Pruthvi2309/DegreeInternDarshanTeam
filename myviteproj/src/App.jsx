
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import Form from './Components/Form'
// import Registration from './Components/Registration'
import Home from './Components/Navigationbar/Home'
import Aboutus from './Components/Navigationbar/Aboutus'
import { Contactus } from './Components/Navigationbar/Contactus'
import Nav from './Components/Navigationbar/Nav'
//import Loginform from './Components/Loginform'
import { Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
      {/* <Form/> */}
      {/* <Registration/>  */}
     {/* <Loginform/> */}
     {/* <Home/> */}
     {/* <Aboutus/> */}
     {/* <Contactus/> */}
     <Nav/>
      {/* <Header> */}
     <Routes>
        {/* <Route path="/Aboutus" element={<Aboutus/>}/> */}
        {/* <Route path="/Contactus" element={<Contactus/>}/> */}
        <Route path="/" element={<Aboutus/>}/>
     </Routes>
     {/* </Header> */}



    </>
  )
}

export default App
