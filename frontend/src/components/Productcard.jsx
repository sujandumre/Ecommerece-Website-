import React from 'react'
import iphonebest from "../assets/iphonebest.png";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import categories from "../data/categories.js";

const Productcard = ({image, name}) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">

   <div className="ml-8  w-54 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">

  <img
    src={image}
    alt={name}
    className="w-full h-40 object-contain"
  />

  <h3 className="mt-3 text-xl font-semibold text-center">
    {name}
  </h3>

</div>

</div>
  )
}

export default Productcard

