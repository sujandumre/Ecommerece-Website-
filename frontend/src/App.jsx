// import { useState } from 'react'

// import './App.css'
// import Navbar from './components/navbar/Navbar.jsx'
// import Hero from './components/Hero.jsx'
// import CategoryCard from './components/CategoryCard.jsx'

// import Bestseller from './components/Bestseller.jsx'
// import Footer from './components/Footer.jsx'

// // import MobileMenu from './components/navbar/MobileMenu.jsx'


// function App() {
  

//   return (
//     <>
//        <Navbar/>
//        {/* <MobileMenu/> */}
//       <Hero/> 

//       <CategoryCard/>
//      <Footer/>

//     </>
//   )
// }

// export default App


import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Hero from './components/Hero.jsx'
import CategoryCard from './components/CategoryCard.jsx'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Hero />
      <CategoryCard /> */}

      <Footer />
    </>
  );
}

export default App;