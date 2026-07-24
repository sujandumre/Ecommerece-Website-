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
// import Brands from "./pages/Brands.jsx";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact.jsx";
import Deals from "./pages/Deals.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
// import Shop from "./pages/Shop.jsx";
import Shop from "./pages/Shop.jsx";
// import TrackOrder from "./pages/TrackOrder.jsx";

import TrackOrder from "./pages/TrackOrder";


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
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        {/* <Route path="/trackorder" element={<TrackOrder />} /> */}
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
      {/* <Hero />
      <CategoryCard /> */}

      <Footer />
    </>
  );
}

export default App;