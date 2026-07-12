import React from "react";
import { Link } from "react-router-dom";

import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-0 bg-[linear-gradient(135deg,#eef1ff_0%,#d8d4ff_35%,#c9c2ff_65%,#f7f8ff_100%)]">

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ShopEase */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600">
              ShopEase
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Your one-stop destination for electronics,
              fashion, beauty, and lifestyle products.
            </p>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-2">
                <MapPin size={24} className="text-red-500" />
                <span>Kathmandu, Nepal</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>support@shopease.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+977-9841234567</span>
              </div>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col space-y-3">

              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/brands">Brands</Link>
              <Link to="/deals">Deals</Link>
              <Link to="/contact">Contact</Link>

            </div>
          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Categories
            </h3>

            <div className="flex flex-col space-y-3">

              <Link to="#">Electronics</Link>
              <Link to="#">Fashion</Link>
              <Link to="#">Beauty</Link>
              <Link to="#">Shoes</Link>
              <Link to="#">Home & Kitchen</Link>

            </div>

          </div>

          {/* Customer */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Customer
            </h3>

            <div className="flex flex-col space-y-3">

              <Link to="#">My Account</Link>
              <Link to="#">Track Order</Link>
              <Link to="#">Wishlist</Link>
              <Link to="#">Returns</Link>
              <Link to="#">FAQ</Link>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Newsletter
            </h3>

            <p className="text-gray-600">
              Subscribe to receive offers and updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-5 w-full rounded-lg border p-3 outline-none"
            />

            <button className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700">
              Subscribe
            </button>

          </div>

        </div>

        {/* Divider */}

        <hr className="my-10 border-gray-300" />

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-600">
            © 2026 ShopEase. All Rights Reserved.
          </p>

          <div className="flex gap-5">

           <FaFacebook className="cursor-pointer hover:text-blue-600" size={22} />
<FaInstagram className="cursor-pointer hover:text-pink-500" size={22} />
<FaTwitter className="cursor-pointer hover:text-sky-500" size={22} />
<FaLinkedin className="cursor-pointer hover:text-blue-700" size={22} />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;