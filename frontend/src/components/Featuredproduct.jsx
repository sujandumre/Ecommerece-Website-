// import React from 'react'
// import iphonebest from "../assets/iphonebest.png";

// const Featuredproduct = () => {
//   return (
    

//       <div className="flex flex-wrap gap-6 justify-center">
      
//          <div className="ml-8  w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">
      
//         <img
//           src={iphonebest}
//           alt="Electronics"
//           className="w-full h-40 object-contain"
//         />
      
//         <h3 className="mt-3 text-xl font-semibold text-center">
//           Electronics
//         </h3>
      
//       </div>
//       </div>
    
//   )
// }

// export default Featuredproduct



import { FaHeart, FaStar } from "react-icons/fa";
// import iphonebest from "../assets/images/iphonebest.png";
import iphonebest from "../assets/iphonebest.png";

function FeaturedProductCard() {
  return (
    <div className="w-54 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

      {/* Wishlist */}
      <div className="flex justify-end p-3">
        <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
      </div>

      {/* Product Image */}
      <div className="flex justify-center px-4">
        <img
          src={iphonebest}
          alt="iPhone"
          className="h-40 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">

        <h3 className="font-semibold text-gray-900 text-lg">
          iPhone 15 Pro Max
        </h3>

        <p className="text-gray-500 text-sm">
          Smartphones
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />
          <FaStar className="text-yellow-400 text-sm" />

          <span className="text-gray-500 text-xs ml-1">
            (120)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-black">
            $999
          </span>

          <span className="text-gray-400 line-through text-sm">
            $1199
          </span>

          <span className="text-red-500 text-sm font-semibold">
            -17%
          </span>
        </div>

      </div>
    </div>
  );
}

export default FeaturedProductCard;