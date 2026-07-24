import React from "react";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/Footer";
// import FeaturedProductCard from "../components/FeaturedProductCard";
import FeaturedProductCard from "../components/Featuredproduct";
import products from "../data/products";

function Deals() {
  // Only products with discount > 0
  const dealProducts = products.filter(
    (product) => product.discount > 0
  );

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white py-10 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
               Hot Deals
            </h1>

            <p className="text-gray-500 mt-3">
              Save big with today's best discounts.
            </p>
          </div>

          {/* Banner */}
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl text-white p-10 mb-10 shadow-lg">
            <h2 className="text-3xl font-bold">
              Mega Sale
            </h2>

            <p className="mt-3 text-lg">
              Up to <span className="font-bold">50% OFF</span> on selected products.
            </p>

            <button className="mt-6 bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {dealProducts.length > 0 ? (
              dealProducts.map((product) => (
                <FeaturedProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-500">
                  No deals available right now.
                </h2>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Deals;