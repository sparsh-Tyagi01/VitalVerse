import React from "react";
import { useCart } from "../context/CartContext";

// Dummy products data
const products = [
  { id: 1, name: "Vitamin C", price: 200, color: "bg-red-200" },
  { id: 2, name: "Protein Powder", price: 1200, color: "bg-green-200" },
  { id: 3, name: "Omega 3 Capsules", price: 600, color: "bg-yellow-200" },
  { id: 4, name: "Stethoscope", price: 1500, color: "bg-indigo-200" },
  { id: 5, name: "Gloves", price: 300, color: "bg-pink-200" },
  { id: 6, name: "Wheelchair", price: 7500, color: "bg-purple-200" },
  { id: 7, name: "Thermometer", price: 500, color: "bg-orange-200" },
  { id: 8, name: "Blood Pressure Monitor", price: 1800, color: "bg-teal-200" },
  { id: 9, name: "Face Masks Pack", price: 250, color: "bg-cyan-200" },
  { id: 10, name: "Hand Sanitizer", price: 150, color: "bg-lime-200" },
];

function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 bg-lavender min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Our Products</h1>
      <p className="text-gray-700 mb-6">
        Browse our wide range of medical equipment & supplies. Click "Add to Cart" to purchase.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className={`${p.color} rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-1 transition-all`}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.name}</h3>
              <p className="text-gray-700 mb-4">₹{p.price}</p>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                ligula ac lorem facilisis.
              </p>
            </div>
            <button
              onClick={() => addToCart(p)}
              className="mt-4 bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-500 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
