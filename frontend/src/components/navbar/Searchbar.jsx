// import React from 'react'
// import { Search } from 'lucide-react';


// function Searchbar() {
//   return (
//     <div className="flex items-center w-[700px] border border-gray-300 rounded-lg overflow-hidden bg-white">
//       <input
//         type="text"
//         placeholder="Search for products, categories..."
//         className="flex-1 px-4 py-2 outline-none"
//       />
//       <select className="px-3 py-2 border-l border-gray-300 outline-none bg-white text-gray-700">
//   <option value="all">All Categories</option>
//   <option value="electronics">Electronics</option>
//   <option value="fashion">Fashion</option>
//   <option value="shoes">Shoes</option>
//   <option value="home-kitchen">Home & Kitchen</option>
//   <option value="beauty">Beauty</option>
  
 
 
// </select>
//       <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
//         <Search size={20} />
//       </button>

//       <div className="container">
         
//       </div>
//      </div>
    
//   )
// }

// export default Searchbar


import React from "react";
import { Search } from "lucide-react";

function Searchbar() {
  return (
    <div className="flex items-center w-[500px] h-11 border border-gray-300 rounded-lg overflow-hidden bg-white">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products, categories..."
        className="flex-1 h-full px-4 text-sm outline-none"
      />

      {/* Categories */}
      <select
        className="h-full w-44 px-3 border-l border-gray-300 outline-none bg-white text-gray-700 cursor-pointer"
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="shoes">Shoes</option>
        <option value="home">Home & Kitchen</option>
        <option value="beauty">Beauty</option>
      </select>

      {/* Search Button */}
      <button
        className="h-full w-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white transition"
      >
        <Search size={20} />
      </button>

    </div>
  );
}

export default Searchbar;