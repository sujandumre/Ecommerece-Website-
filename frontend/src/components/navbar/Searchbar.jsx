import React from 'react'
import { Search } from 'lucide-react';


function Searchbar() {
  return (
     <div className="flex items-center w-80 border border-gray-300 rounded-lg overflow-hidden bg-white">
      <input
        type="text"
        placeholder="Search for products, categories..."
        className="flex-1 px-4 py-2 outline-none"
      />

      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white">
        <Search size={20} />
      </button>

      <div className="container">

      </div>
     </div>
    
  )
}

export default Searchbar