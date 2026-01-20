import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from "./Checkout";

export default function Cart({ darkMode }) {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [checkoutAll, setCheckoutAll] = useState(false);

  // Total price calculation
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // When clicking "Buy All" → go to checkout
  const handleBuyAll = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    setCheckoutAll(true);
  };

  if (checkoutAll) {
    return <Checkout darkMode={darkMode} products={cart} clearCart={clearCart} />;
  }

  return (
    <div className={`p-4 h-full ${darkMode ? "text-white" : "text-black"}`}>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between items-center mb-3 p-2 rounded transition ${
            darkMode ? "bg-gray-700" : "bg-gray-100"
          }`}
        >
          <div className="flex gap-2 items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>
                ₹{item.price} x {item.quantity}
              </p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:text-red-800 font-bold text-xl"
          >
            ×
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          <p className="font-semibold text-lg">Total: ₹{totalPrice}</p>

          {/* Buy All Button */}
          <button
            onClick={handleBuyAll}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Buy All
          </button>

          {/* Clear Cart Button */}
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
