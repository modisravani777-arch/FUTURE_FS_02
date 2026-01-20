import { useState } from "react";

export default function Checkout({ darkMode, products, clearCart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  const totalPrice = products.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address) {
      setSuccess(true);
      if (clearCart) clearCart();
    }
  };

  if (success) {
    return (
      <div
        className={`max-w-md mx-auto p-6 mt-10 rounded shadow-lg text-center ${
          darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">
          Order Placed Successfully 🎉
        </h2>
        <p>
          You bought <strong>{products.length}</strong> item(s) for ₹{totalPrice}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`max-w-md mx-auto p-6 mt-10 rounded shadow-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      {/* List of products */}
      <div className="mb-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{product.name}</span>
            <span>₹{product.price}</span>
          </div>
        ))}
      </div>

      <p className="font-semibold mb-4">Total: ₹{totalPrice}</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          className={`p-2 rounded border focus:outline-none ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300"
              : "bg-gray-100 text-black border-gray-300 placeholder-gray-500"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          className={`p-2 rounded border focus:outline-none ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300"
              : "bg-gray-100 text-black border-gray-300 placeholder-gray-500"
          }`}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-2"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
