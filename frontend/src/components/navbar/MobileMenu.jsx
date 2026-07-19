import React from 'react'
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    
    <div className="flex-row items-center gap-6 mt-4 md:mt-0">
      <Link to="/Home" className="ml-5 bg-white-500 hover:text-blue-600 text-black  rounded-lg transition">
      Home
    </Link>

    <Link to="/Shop" className="ml-5 bg-white-500 hover:text-blue-600 text-black  rounded-lg transition">
      Shop
    </Link>

    <Link to="/Brands" className="ml-6 bg-white-500 hover:text-blue-600 text-black  rounded-lg transition">
      Brands
    </Link>
    <Link to="/Deals" className="ml-6 bg-white-500 hover:text-blue-600 text-black  rounded-lg transition">
      Deals
    </Link>
    <Link to="/Contact" className="ml-6 bg-white-500 hover:text-blue-600 text-black  rounded-lg transition">
      Contact
    </Link>
    </div>
  )
}

export default MobileMenu