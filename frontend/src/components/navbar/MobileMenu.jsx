import React from 'react'

const MobileMenu = () => {
  return (
    
    <div className="flex-row items-center gap-6 mt-4 md:mt-0">
      <Link to="/Home" className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
      Home
    </Link>

    <Link to="/Shop" className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
      Shop
    </Link>

    <Link to="/NewArrivals" className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
      New Arrivals
    </Link>
    </div>
  )
}

export default MobileMenu