// function CategoryCard({ image, name }) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-4">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-40 object-contain"
//       />

//       <h3 className="mt-4 text-center font-semibold">
//         {name}
//       </h3>
//     </div>
//   );
// }

// export default CategoryCard;

import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './Productcard.jsx'
import Bestseller from './Bestseller.jsx'
import men from "../assets/images/men.png";
// import Categories from './Categories.jsx';
import categories from "../data/categories.js";
// import FeaturedProduct from './FeaturedProduct.jsx';
import FeaturedProductCard from './FeaturedProduct.jsx';

const CategoryCard = () => {
  return (
    <div className="bg-[linear-gradient(135deg,#EEF2FF_0%,#DDD6FE_45%,#C4B5FD_100%)]">
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


<div className="flex flex-wrap gap-6 justify-center">
    {categories.map((product)=>(
      <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          // category={product.category}
          // price={product.price}
          // oldPrice={product.oldPrice}
          // discount={product.discount}
          // reviews={product.reviews}
      />
  ))}
</div>


 <div className="flex items-center justify-between mb-6">
  <h2 className="text-2xl font-bold text-gray-900">
    Featured Products
  </h2>

   <Link
    to="/categories"
    className="text-blue-600 hover:text-blue-700 font-medium"
  >
    View All
  </Link>
  
</div>



<div className="flex flex-wrap gap-6 justify-center">

  {categories.map((product)=>(
      <FeaturedProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          oldPrice={product.oldPrice}
          discount={product.discount}
          reviews={product.reviews}
      />
  ))}

</div>

<div className="flex items-center justify-between mb-6">
  <h2 className="text-2xl font-bold text-gray-900">
    Best Sellers
  </h2>

   <Link
    to="/categories"
    className="text-blue-600 hover:text-blue-700 font-medium"
  >
    View All
  </Link>
  
</div>
<div className="flex flex-wrap gap-6 justify-center">
  {categories.map((product)=>(
      <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          // category={product.category}
          // price={product.price}
          // oldPrice={product.oldPrice}
          // discount={product.discount}
          // reviews={product.reviews}
      />
  ))}
</div>
</div>
  )
}

export default CategoryCard