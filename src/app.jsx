import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Login from './components/Login'
import Signup from './components/Signup'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login/> */}
      <Signup/>
    </>
  )
}
