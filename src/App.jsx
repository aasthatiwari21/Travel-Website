import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './Components/Navbar/Navabar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Navabar/>
    <Home/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App
