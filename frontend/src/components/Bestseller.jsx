import React from 'react'
import { Link } from 'react-router-dom'
import iphonebest from "../assets/iphonebest.png";
import { FaHeart, FaStar } from "react-icons/fa";
import categories from "../data/categories.js";
import Productcard from './Productcard.jsx'
import Featuredproduct from './Featuredproduct.jsx'


const Bestseller = ({image, name}) => {
  return (
    <div className="bg-[linear-gradient(135deg,#EEF2FF_0%,#DDD6FE_45%,#C4B5FD_100%)]">
       <div className="ml-8  w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">
      
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain"
        />
      
        
      
      </div>
    </div>
  )
}

export default Bestseller