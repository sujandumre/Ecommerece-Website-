import React from "react";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FeaturedProduct from "../components/FeaturedProduct";
import Bestseller from "../components/Bestseller";

function Home() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <Hero />

      {/* Shop By Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <CategoryCard />
      </section>

      {/* Featured Products */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Featured Products
          </h2>

          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View All →
          </button>
        </div>

        <FeaturedProduct />
      </section> */}

      {/* Best Sellers */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Best Sellers
          </h2>

          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View All →
          </button>
        </div>

        <Bestseller />
      </section> */}

    </div>
  );
}

export default Home;