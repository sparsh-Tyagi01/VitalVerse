import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Vitamin C", price: 200, color: "from-red-600 to-red-400" },
  { id: 2, name: "Protein Powder", price: 1200, color: "from-green-600 to-green-400" },
  { id: 3, name: "Omega 3 Capsules", price: 600, color: "from-yellow-600 to-yellow-400" },
  { id: 4, name: "Stethoscope", price: 1500, color: "from-indigo-600 to-indigo-400" },
  { id: 5, name: "Gloves", price: 300, color: "from-pink-600 to-pink-400" },
  { id: 6, name: "Wheelchair", price: 7500, color: "from-purple-600 to-purple-400" },
  { id: 7, name: "Thermometer", price: 500, color: "from-orange-600 to-orange-400" },
  { id: 8, name: "Blood Pressure Monitor", price: 1800, color: "from-teal-600 to-teal-400" },
  { id: 9, name: "Face Masks Pack", price: 250, color: "from-cyan-600 to-cyan-400" },
  { id: 10, name: "Hand Sanitizer", price: 150, color: "from-lime-600 to-lime-400" },
];

function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Our Products
      </h1>
      <p className="text-gray-400 mb-6">
        Browse our wide range of medical equipment & supplies. Click{" "}
        <span className="font-semibold text-indigo-300">"Add to Cart"</span> to purchase.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className={`bg-gradient-to-r ${p.color} rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-1 transition-all`}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{p.name}</h3>
              <p className="text-gray-200 mb-4">₹{p.price}</p>
              <p className="text-gray-300 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                ligula ac lorem facilisis.
              </p>
            </div>
            <button
              onClick={() => addToCart(p)}
              className="mt-4 bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-md"
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
