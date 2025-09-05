import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400 text-lg">
          Your cart is empty. Add some products to get started!
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Cart Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col items-center hover:shadow-yellow-500/30 transform hover:-translate-y-2 transition-all"
              >
                {/* Icon */}
                <div className="w-24 h-24 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-yellow-400 text-3xl">
                  🛍️
                </div>
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="text-gray-300 font-medium mb-2">₹{item.price}</p>
                <button className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-500 transition-colors">
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-6 p-6 bg-gray-800 rounded-xl shadow-lg flex justify-between items-center">
            <h2 className="text-2xl font-bold text-yellow-400">Total:</h2>
            <p className="text-2xl font-extrabold text-green-400">₹{totalPrice}</p>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-end mt-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
