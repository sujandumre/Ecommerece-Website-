
import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './Productcard.jsx'
import Bestseller from './Bestseller.jsx'
// import men from "../assets/images/men.png";
import categories from "../data/categories.js";
import products from '../data/products.js';
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
    className="text-blue-600 font-semibold hover:underline"
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
      <Bestseller
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
         
      />
  ))}
</div>
</div>
  )
}

export default CategoryCard

// import React from "react";
// import { Link } from "react-router-dom";

// import ProductCard from "./Productcard";
// import Bestseller from "./Bestseller";
// import FeaturedProductCard from "./FeaturedProduct";

// import categories from "../data/categories";
// import products from "../data/products";

// const CategoryCard = () => {
//   return (
//     <div className="bg-[linear-gradient(135deg,#EEF2FF_0%,#DDD6FE_45%,#C4B5FD_100%)] py-10 px-6">

//       {/* ================= Categories ================= */}

//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">
//           Shop By Categories
//         </h2>

//         <Link
//           to="/categories"
//           className="text-blue-600 hover:text-blue-700 font-semibold"
//         >
//           View All
//         </Link>
//       </div>

//       <div className="flex flex-wrap justify-center gap-6">

//         {categories.map((category) => (
//           <Link
//             key={category.id}
//             to={`/categories/${category.name}`}
//           >
//             <ProductCard
//               image={category.image}
//               name={category.name}
//             />
//           </Link>
//         ))}

//       </div>

//       {/* ================= Featured Products ================= */}

//       <div className="flex items-center justify-between mt-14 mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">
//           Featured Products
//         </h2>

//         <Link
//           to="/shop"
//           className="text-blue-600 hover:text-blue-700 font-semibold"
//         >
//           View All
//         </Link>
//       </div>

//       <div className="flex flex-wrap justify-center gap-6">

//         {products.slice(0, 8).map((product) => (
//           <FeaturedProductCard
//             key={product.id}
//             product={product}
//           />
//         ))}

//       </div>

//       {/* ================= Best Sellers ================= */}

//       <div className="flex items-center justify-between mt-14 mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">
//           Best Sellers
//         </h2>

//         <Link
//           to="/shop"
//           className="text-blue-600 hover:text-blue-700 font-semibold"
//         >
//           View All
//         </Link>
//       </div>

//       <div className="flex flex-wrap justify-center gap-6">

//         {products
//           .filter((product) => product.bestSeller)
//           .slice(0, 8)
//           .map((product) => (
//             <Bestseller
//               key={product.id}
//               image={product.image}
//               name={product.name}
//               category={product.category}
//               price={product.price}
//               oldPrice={product.oldPrice}
//               discount={product.discount}
//               reviews={product.reviews}
//             />
//           ))}

//       </div>

//     </div>
//   );
// };

// export default CategoryCard;