import React from 'react'
import { Link } from 'react-router-dom'
import Productcard from './Productcard.jsx'

const Bestseller = () => {
  return (
    <div>
    <div className="flex items-center justify-between mb-6">
  <h2 className="text-2xl font-bold text-gray-900">
    Shop By Categories
  </h2>

   <Link
    to="/categories"
    className="text-blue-600 hover:text-blue-700 font-medium"
  >
    View All
  </Link>
  
</div>
<Productcard/>
</div>
  )
}

export default Bestseller