import React, { useState } from "react";
// import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import FeaturedProductCard from "../components/Featuredproduct";
import products from "../data/products";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Smartphones",
    "Laptop",
    "Shoes",
    "Beauty",
    "Smart Watch",
  ];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-white py-10 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Shop Products
            </h1>

            <p className="text-gray-500 mt-3">
              Discover our latest products at the best prices.
            </p>
          </div>

          {/* Search + Category */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3"
            >
              {categories.map((cat) => (
                <option key={cat}>
                  {cat}
                </option>
              ))}
            </select>

          </div>

          {/* Product Count */}
          <p className="mb-6 text-gray-600">
            Showing {filteredProducts.length} Products
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {filteredProducts.map((product) => (
              <FeaturedProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

          {/* No Products */}
          {filteredProducts.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-semibold text-gray-500">
                No products found
              </h2>
            </div>
          )}

        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Shop;