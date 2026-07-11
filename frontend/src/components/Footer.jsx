import React from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="  bg-[linear-gradient(135deg,#eef1ff_0%,#d8d4ff_35%,#c9c2ff_65%,#f7f8ff_100%)]">

<div className="w-1/5 ">
      <span className="text-blue-600 font-semibold text-xl mt-9 ml-9">ShopEase</span>
      <p className="text-xl text-#7C3AED mt-2 ml-9  ">
        Your one-stop destination for electronics,<br/>
         fashion, beauty, and lifestyle products.
      </p>
      <span className="text-1xl ml-9 text-#4F46E5">Kathmandu, Nepal</span><br/>
      <span className="text-1xl ml-9 text-#2563EB">support@shopease.com</span><br/>
      <span className="text-1xl ml-9 text-#7C3AED"> +977-9841234567</span>

      </div>


      <div className="w-1/5 ">
        <Link to="/Home" className="text-#7C3AED hover:text-#4F46E5">
          Home
        </Link>
        <Link to="/About" className="text-#7C3AED hover:text-#4F46E5">About Us
        </Link>
        <Link to="/Contact" className="text-#7C3AED hover:text-#4F46E5">
          Contact
        </Link>
        <Link to="/brands" className="text-#7C3AED hover:text-#4F46E5">
          Brands
        </Link>
        <Link to="/Shop" className="text-#7C3AED hover:text-#4F46E5">
      Shop
        </Link>
      </div>
    </div>
  )
}

export default Footer