import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 bg-lavender min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-700 text-lg">Your cart is empty. Add some products to get started!</p>
      ) : (
        <div className="flex flex-col gap-6">
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                
                <div className="w-24 h-24 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center text-indigo-600 text-3xl">
                  🛍️
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 font-medium mb-2">₹{item.price}</p>
                <button className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-500 transition-colors">
                  Remove
                </button>
              </div>
            ))}
          </div>

        
          <div className="mt-6 p-6 bg-indigo-100 rounded-xl shadow-lg flex justify-between items-center">
            <h2 className="text-2xl font-bold text-indigo-900">Total:</h2>
            <p className="text-2xl font-extrabold text-indigo-700">₹{totalPrice}</p>
          </div>

         
          <div className="flex justify-end mt-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
