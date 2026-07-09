import React from 'react'
import iphonebest from "../assets/iphonebest.png";

// const Productcard = () => {
//   return (
//     <div>

//    <div className="ml-8 w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">

//   <img
//     src={iphonebest}
//     alt="Electronics"
//     className="w-full h-40 object-contain"
//   />

//   <h3 className="mt-3 text-xl font-semibold text-center">
//     Electronics
//   </h3>

// </div>

// <div className="ml-8 w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">

//   <img
//     src={iphonebest}
//     alt="Electronics"
//     className="w-full h-40 object-contain"
//   />

//   <h3 className="mt-3 text-xl font-semibold text-center">
//     Electronics
//   </h3>

// </div>

// <div className="ml-8 w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">

//   <img
//     src={iphonebest}
//     alt="Electronics"
//     className="w-full h-40 object-contain"
//   />

//   <h3 className="mt-3 text-xl font-semibold text-center">
//     Electronics
//   </h3>

// </div>

// <div className="ml-8 w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">

//   <img
//     src={iphonebest}
//     alt="Electronics"
//     className="w-full h-40 object-contain"
//   />

//   <h3 className="mt-3 text-xl font-semibold text-center">
//     Electronics
//   </h3>

// </div>

// <div className="ml-8 w-64 bg-white border  border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 cursor-pointer p-3">

//   <img
//     src={iphonebest}
//     alt="Electronics"
//     className="w-full h-40 object-contain"
//   />

//   <h3 className="mt-3 text-xl font-semibold text-center">
//     Electronics
//   </h3>

// </div>

     
//      </div>
//   )
// }

// export default Productcard


function ProductCard({ image, name }) {
  return (
    <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain"
      />

      <h3 className="mt-4 text-center text-lg font-semibold">
        {name}
      </h3>
    </div>
  );
}

export default ProductCard;