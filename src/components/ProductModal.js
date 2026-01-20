import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="bg-white rounded shadow-lg z-50 p-6 w-11/12 max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-700 font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">₹{product.price}</p>
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => alert(`You bought: ${product.name} for ₹${product.price}`)}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
