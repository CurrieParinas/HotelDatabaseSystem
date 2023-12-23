import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Populars from './Components/Populars/Popular'
import Offers from './Components/Offers/Offer'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Populars/>
    <Offers/>
    <About/>
    <Footer/>
    </>
  )
}

export default App