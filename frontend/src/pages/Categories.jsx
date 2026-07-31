import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import products from "../data/products";

function Categories() {
  const [likedProducts, setLikedProducts] = useState([]);

  const categories = [...new Set(products.map((p) => p.category))];

  const toggleWishlist = (id) => {
    if (likedProducts.includes(id)) {
      setLikedProducts(likedProducts.filter((item) => item !== id));
    } else {
      setLikedProducts([...likedProducts, id]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Shop By Categories
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Explore thousands of premium products across multiple categories.
          </p>

        </div>

      </div>

      {/* Categories */}

      <div className="max-w-7xl mx-auto px-6 py-12">

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (item) => item.category === category
          );

          return (
            <div key={category} className="mb-16">

              <div className="flex justify-between items-center mb-6">

                <h2 className="text-3xl font-bold">
                  {category}
                </h2>

                <Link
                  to={`/categories/${category}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View All
                </Link>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {categoryProducts.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
                  >

                    {/* Wishlist */}

                    <div className="flex justify-end p-3">

                      <FaHeart
                        onClick={() => toggleWishlist(product.id)}
                        className={`cursor-pointer text-xl ${
                          likedProducts.includes(product.id)
                            ? "text-red-500"
                            : "text-gray-400"
                        }`}
                      />

                    </div>

                    {/* Image */}

                    <Link to={`/product/${product.id}`}>

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain"
                      />

                    </Link>

                    <div className="p-5">

                      <h3 className="text-xl font-semibold">
                        {product.name}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {product.category}
                      </p>

                      {/* Rating */}

                      <div className="flex items-center gap-1 mt-3">

                        <FaStar className="text-yellow-400" />

                        <span>{product.rating}</span>

                      </div>

                      {/* Price */}

                      <div className="flex items-center gap-2 mt-3">

                        <span className="text-2xl font-bold">
                          ${product.price}
                        </span>

                        {product.oldPrice && (
                          <span className="line-through text-gray-400">
                            ${product.oldPrice}
                          </span>
                        )}

                      </div>

                      {/* Cart */}

                      <button
                        className="mt-5 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                      >
                        <FaShoppingCart />

                        Add To Cart

                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;