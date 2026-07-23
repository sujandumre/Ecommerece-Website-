
// import React from "react";
// import { FaHeart, FaStar } from "react-icons/fa";

// function FeaturedProductCard({
//   image,
//   name,
//   category,
//   price,
//   oldPrice,
//   discount,
//   reviews,
// }) {
//   return (
//     <div className="w-54 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

//       <div className="flex justify-end p-3">
//         onClick="{addToWishlist}"
//         <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
        
//       </div>

//       <div className="flex justify-center px-4">
//         <img
//           src={image}
//           alt={name}
//           className="h-40 object-contain"
//         />
//       </div>

//       <div className="p-4">

//         <h3 className="font-semibold text-gray-900 text-lg">
//           {name}
//         </h3>

//         <p className="text-gray-500 text-sm">
//           {category}
//         </p>

//         <div className="flex items-center gap-1 mt-2">
//           <FaStar className="text-yellow-400 text-sm"/>
//           <FaStar className="text-yellow-400 text-sm"/>
//           <FaStar className="text-yellow-400 text-sm"/>
//           <FaStar className="text-yellow-400 text-sm"/>
//           <FaStar className="text-yellow-400 text-sm"/>

//           <span className="text-gray-500 text-xs ml-1">
//             ({reviews})
//           </span>
//         </div>

//         <div className="flex items-center gap-2 mt-3">

//           <span className="text-xl font-bold">
//             ${price}
//           </span>

//           <span className="text-gray-400 line-through">
//             ${oldPrice}
//           </span>

//           <span className="text-red-500 font-semibold">
//             {discount}
//           </span>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default FeaturedProductCard;

import React, { useState } from "react";
import axios from "axios";
import { FaHeart, FaStar } from "react-icons/fa";

function FeaturedProductCard({ product }) {

  const [liked, setLiked] = useState(false);

  const addToWishlist = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/wishlist",
        {
          productId: product._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLiked(true);

      alert("Added to Wishlist");
    } catch (error) {
      console.log(error);
      alert("Failed to add wishlist");
    }
  };

  return (
    <div className="w-54 bg-white rounded-lg shadow">

      {/* Wishlist */}
      <div className="flex justify-end p-3">
        <FaHeart
          onClick={addToWishlist}
          className={`cursor-pointer text-xl ${
            liked ? "text-red-500" : "text-gray-400"
          }`}
        />
      </div>

      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>

        <p className="text-gray-500">{product.category}</p>

        <div className="flex items-center gap-1 mt-2">
          <FaStar className="text-yellow-400" />
          <span>{product.rating}</span>
        </div>

        <div className="mt-3">
          <span className="font-bold">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;