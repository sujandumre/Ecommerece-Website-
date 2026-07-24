import React, { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "../components/navbar/Navbar";
// import Footer from "../components/Footer";
// import FeaturedProductCard from "../components/FeaturedProductCard";
import FeaturedProductCard from "../components/Featuredproduct";
import products from "../data/products";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWishlist = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/wishlist",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWishlist(response.data.wishlist);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const removeWishlist = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/wishlist/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWishlist(
        wishlist.filter((item) => item.product._id !== productId)
      );

      alert("Removed from Wishlist");
    } catch (error) {
      console.log(error);
      alert("Unable to remove product");
    }
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-8 py-10">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-gray-800">
            My Wishlist
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Save your favourite products and buy them later.
          </p>

          {loading ? (
            <h2 className="text-center text-2xl">
              Loading...
            </h2>
          ) : wishlist.length === 0 ? (
            <div className="text-center py-20">

              <h2 className="text-3xl font-bold text-gray-700">
                Your Wishlist is Empty ❤️
              </h2>

              <p className="mt-3 text-gray-500">
                Add your favourite products to see them here.
              </p>

            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {wishlist.map((item) => (

                <div key={item._id} className="relative">

                  <FeaturedProductCard
                    product={item.product}
                  />

                  <button
                    onClick={() =>
                      removeWishlist(item.product._id)
                    }
                    className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>
          )}
        </div>

      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Wishlist;