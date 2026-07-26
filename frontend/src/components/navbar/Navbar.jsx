// import React from 'react'
// import logo from "../../assets/logo.png";
// import { useState } from 'react';
// import {
//   Menu,
//   X,
//   Heart,
//   ShoppingCart,
//   User,
//   Search,
//   Package,
// } from "lucide-react";
// import '../../App.css'; 
// import Searchbar from './Searchbar.jsx'
// import NavActions from './NavActions.jsx'
// import MobileMenu from './MobileMenu.jsx';


// function Navbar () {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//    <>

//     <nav className="flex items-center gap-4 px-6 py-3 bg-white shadow-sm border-b border-gray-200 text-gray-900">
  
//   {/* Logo */}
//   <a href="/" className="flex items-center gap-2 shrink-0">
    
//      {/* <img
//             src={logo}
//             alt="ShopEase Logo"
//             className="h-10 w-auto"
//           /> */}
//     <span className="text-blue-600 font-semibold text-xl">ShopEase</span>
//   </a>

  
//   <div className="flex-1">
//     <Searchbar />
    
  
//   </div>

//   {/* Nav links + icons go here */}
//  <MobileMenu/>
//    <NavActions />
//    {/* <MobileMenu/> */}
   
//    {/* <div className="nav-menu flex items-center gap-6 px-6 py-3 bg-white  border-b border-gray-200 text-gray-900">
//   <MobileMenu/>
//   </div> */}
// </nav>


//       </>
//   )
// }

// export default Navbar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Searchbar from "./Searchbar";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="flex items-center gap-4 px-6 py-3 bg-white shadow-sm border-b border-gray-200">

      <a href="/" className="text-blue-600 text-xl font-semibold">
        ShopEase
      </a>

      <div className="flex-1">
        <Searchbar />
      </div>

      <MobileMenu />

      <NavActions
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

    </nav>
  );
}

export default Navbar;