import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search.png";
import {ShoppingCart} from 'lucide-react';

function Header() {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-3 shadow-md">
      
      {/* Logo */}
      <div>
        <img src={logo} alt="Blinkit Logo" className="h-30" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-1/2">
        <img src={searchIcon} className="h-6 "/>
        <input
          type="text"
          placeholder='Search "milk"'
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Right Side - Login and Cart */}
      <div className="flex items-center gap-15">
        <button className="text-sm font-semibold text-gray-700">
          Login
        </button>
        <button className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg">
          <ShoppingCart />
          My Cart
        </button>
      </div>

    </div>
  );
}

export default Header;