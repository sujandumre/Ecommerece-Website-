import React from 'react'

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

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <>
    <div className="bg-red-900">
      <h1>sujan</h1>
    </div>
      </>
  )
}

export default Navbar;