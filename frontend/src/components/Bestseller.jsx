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


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
// import { addToCart } from "../services/cartService";

// const Bestseller = ({
//   id,
//   image,
//   name,
//   category,
//   price,
//   oldPrice,
//   discount,
//   reviews,
// }) => {

//   const handleAddToCart = async (e) => {
//     // Prevent Link from navigating to product page
//     e.preventDefault();
//     e.stopPropagation();

//     try {
//       const data = await addToCart(id, 1);

//       console.log(data.message);

//       alert("Product added to cart!");

//     } catch (error) {
//       console.error("Failed to add product to cart:", error);

//       alert(
//         error.response?.data?.message ||
//         "Failed to add product to cart"
//       );
//     }
//   };

//   return (
//     <Link
//       to={`/product/${id}`}
//       className="block"
//     >
//       <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-4">

//         {/* ================= Product Image ================= */}

//         <div className="relative">

//           <img
//             src={image}
//             alt={name}
//             className="w-full h-40 object-contain"
//           />

//           {/* Discount */}

//           {discount && (
//             <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
//               -{discount}%
//             </span>
//           )}

//           {/* Wishlist */}

//           <button
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();

//               console.log("Added to wishlist:", id);
//             }}
//             className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
//           >
//             <FaHeart className="text-gray-400 hover:text-red-500" />
//           </button>

//         </div>


//         {/* ================= Product Information ================= */}

//         <div className="mt-3">

//           <p className="text-sm text-gray-500">
//             {category}
//           </p>

//           <h3 className="font-semibold text-lg text-gray-900 mt-1 line-clamp-1">
//             {name}
//           </h3>


//           {/* ================= Rating ================= */}

//           {reviews !== undefined && (
//             <div className="flex items-center gap-1 mt-2">

//               <FaStar className="text-yellow-400 text-sm" />

//               <span className="text-sm text-gray-600">
//                 {reviews}
//               </span>

//             </div>
//           )}


//           {/* ================= Price ================= */}

//           <div className="flex items-center gap-2 mt-2">

//             <span className="text-blue-600 font-bold text-lg">
//               ${price}
//             </span>

//             {oldPrice && (
//               <span className="text-gray-400 line-through text-sm">
//                 ${oldPrice}
//               </span>
//             )}

//           </div>


//           {/* ================= Add To Cart ================= */}

//           <button
//             onClick={handleAddToCart}
//             className="w-full mt-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
//           >
//             <FaShoppingCart />

//             Add to Cart
//           </button>

//         </div>

//       </div>
//     </Link>
//   );
// };

// export default Bestseller;