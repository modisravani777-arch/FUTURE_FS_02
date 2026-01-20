import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded p-3 cursor-pointer hover:scale-105 transition"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-purple-600 font-bold">₹{product.price}</p>
    </div>
  );
}
