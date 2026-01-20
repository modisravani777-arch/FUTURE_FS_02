import React, { useState, useEffect } from "react";

export default function LoginModal({ darkMode, setShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Close modal on pressing Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowLogin(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setShowLogin]);

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with email: ${email}`);
    setShowLogin(false); // Close modal after login
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        darkMode ? "bg-gray-900 bg-opacity-70" : "bg-black bg-opacity-50"
      }`}
      onClick={() => setShowLogin(false)} // Clicking overlay closes modal
    >
      {/* Modal Box */}
      <div
        className={`relative w-11/12 max-w-sm p-6 rounded-xl shadow-xl transition transform hover:scale-105
          ${darkMode ? "bg-indigo-900 text-white" : "bg-gradient-to-r from-purple-400 to-pink-400 text-white"}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 font-bold text-xl"
          onClick={() => setShowLogin(false)}
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            className={`p-2 border rounded ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className={`p-2 border rounded ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-black border-gray-300"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
