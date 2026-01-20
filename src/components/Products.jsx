import React, { useState, useContext } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext";
import Checkout from "./Checkout";

export default function Products({ selectedCategory, searchQuery, darkMode }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutProducts, setCheckoutProducts] = useState(null); // For Buy Now
  const { addToCart } = useContext(CartContext);

  // Handle Buy Now
  const handleBuyNow = (product) => {
    setCheckoutProducts([product]);
  };

  // Filter products by category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Checkout view
  if (checkoutProducts) {
    return (
      <div>
        <button
          className="mb-4 text-purple-600 font-semibold ml-6"
          onClick={() => setCheckoutProducts(null)}
        >
          ← Back
        </button>

        <Checkout
          darkMode={darkMode}
          products={checkoutProducts}
          clearCart={() => {}}
        />
      </div>
    );
  }

  // Single product view
  if (selectedProduct) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <button
          className="mb-4 text-purple-600 font-semibold"
          onClick={() => setSelectedProduct(null)}
        >
          ← Back to All Products
        </button>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded p-6 flex flex-col md:flex-row gap-6">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full md:w-1/2 h-80 object-cover rounded"
          />

          <div>
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="text-purple-600 font-bold text-xl mt-2">
              ₹{selectedProduct.price}
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => addToCart(selectedProduct)}
                className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => handleBuyNow(selectedProduct)}
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default → All products grid
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => setSelectedProduct(product)}
        />
      ))}
    </div>
  );
}
