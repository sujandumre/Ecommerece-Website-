import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategoryCard from './components/CategoryCard.jsx'

import Bestseller from './components/Bestseller.jsx'
import Footer from './components/Footer.jsx'

// import MobileMenu from './components/navbar/MobileMenu.jsx'


function App() {
  

  return (
    <>
       <Navbar/>
       {/* <MobileMenu/> */}
      <Hero/> 

      <CategoryCard/>
     <Footer/>

    </>
  )
}

export default App
