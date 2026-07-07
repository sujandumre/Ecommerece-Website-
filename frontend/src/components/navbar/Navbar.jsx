import React from 'react'
import logo from "../../assets/logo.png";
import { useState } from 'react';
import {
  Menu,
  X,
  Heart,
  ShoppingCart,
  User,
  Search,
  Package,
} from "lucide-react";
import '../../App.css'; 
import Searchbar from './Searchbar.jsx'
import NavActions from './NavActions.jsx'

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <>

    <nav className="flex items-center gap-4 px-6 py-3 bg-white border-b border-gray-200">
  
  {/* Logo */}
  <a href="/" className="flex items-center gap-2 shrink-0">
    
     <img
            src={logo}
            alt="ShopEase Logo"
            className="h-10 w-auto"
          />
    <span className="text-blue-600 font-semibold text-xl">ShopEase</span>
  </a>

  
  <div className="flex-1">
    <Searchbar />
    
  
  </div>

  {/* Nav links + icons go here */}

   <NavActions />

</nav>
      </>
  )
}

export default Navbar;