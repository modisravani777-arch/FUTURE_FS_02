import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar({
  setSelectedCategory,
  showCart,
  setShowCart,
  searchQuery,
  setSearchQuery,
  setShowLogin,
  darkMode,
  setDarkMode
}) {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const categories = ["Fashion", "Footwear", "Accessories", "Electronics", "Books"];

  return (
    <nav className={`w-full shadow transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-purple-600 text-white"}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 gap-4">
        
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-gray-200"
          onClick={() => setSelectedCategory("")}
        >
          Mini E-Commerce Platform
        </h1>

        {/* Categories */}
        <ul className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <li
              key={cat}
              className="cursor-pointer hover:text-gray-200 font-semibold"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`px-2 py-1 border rounded ${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"}`}
        />

        {/* Buttons */}
        <div className="flex gap-2 items-center">
          <button
            className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white"
            onClick={() => setShowCart(!showCart)}
          >
            Cart ({totalItems})
          </button>

          {/* Login Button */}
<button
  className={`px-3 py-1 rounded text-white transition-colors ${
    darkMode
      ? "bg-indigo-700 hover:bg-indigo-800" // Dark mode color
      : "bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500" // Light mode gradient
  }`}
  onClick={() => setShowLogin(true)}
>
  Login
</button>


          {/* Dark Mode Toggle */}
          <button
            className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
