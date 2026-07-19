import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import iphonebest from "../assets/iphonebest.png";

function Wishlist() {
  const wishlist = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 999,
      image: iphone,
    },
    {
      id: 2,
      name: "Apple Watch Series 9",
      price: 399,
      image: iphone,
    },
    {
      id: 3,
      name: "Nike Air Max",
      price: 189,
      image: iphone,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <h1 className="text-3xl font-bold mb-8">
        My Wishlist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {wishlist.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-5"
          >

            <div className="flex justify-end">

              <FaHeart className="text-red-500 text-xl cursor-pointer" />

            </div>

            <img
              src={item.image}
              alt={item.name}
              className="h-48 mx-auto object-contain"
            />

            <h2 className="font-semibold text-lg mt-4">
              {item.name}
            </h2>

            <p className="text-blue-600 font-bold mt-2">
              ${item.price}
            </p>

            <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2">

              <FaShoppingCart />

              Add To Cart

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Wishlist;