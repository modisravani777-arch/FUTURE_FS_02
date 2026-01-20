import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import LoginModal from "./components/LoginModal";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // Add dark class here
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setSelectedCategory={setSelectedCategory}
          showCart={showCart}
          setShowCart={setShowCart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setShowLogin={setShowLogin}
        />

        {/* Products */}
        <Products
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          darkMode={darkMode}
        />

        {/* Cart */}
        {showCart && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setShowCart(false)}
            ></div>
            <div
              className="fixed top-0 right-0 w-96 h-full z-50 p-4 rounded-l-lg overflow-y-auto shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white transition-colors"
            >
              <Cart darkMode={darkMode} />
            </div>
          </>
        )}

        {/* Login Modal */}
        {showLogin && (
          <LoginModal darkMode={darkMode} setShowLogin={setShowLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
