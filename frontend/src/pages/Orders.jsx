import React from "react";

// Dummy orders
const orders = [
  { id: 101, items: ["Stethoscope", "Gloves"], total: 1700, status: "Delivered" },
  { id: 102, items: ["Wheelchair"], total: 7500, status: "Pending" },
  { id: 103, items: ["Vitamin C", "Protein Powder"], total: 1400, status: "Delivered" },
  { id: 104, items: ["Face Masks Pack"], total: 250, status: "Shipped" },
  { id: 105, items: ["Hand Sanitizer", "Gloves"], total: 450, status: "Cancelled" },
  { id: 106, items: ["Thermometer"], total: 500, status: "Delivered" },
  { id: 107, items: ["Blood Pressure Monitor"], total: 1800, status: "Pending" },
  { id: 108, items: ["Omega 3 Capsules", "Vitamin C"], total: 800, status: "Delivered" },
  { id: 109, items: ["Protein Powder"], total: 1200, status: "Shipped" },
  { id: 110, items: ["Wheelchair", "Gloves"], total: 7800, status: "Delivered" },
];

// Different card colors for variety
const cardColors = [
  "bg-pink-100", "bg-indigo-100", "bg-green-100", "bg-yellow-100", 
  "bg-purple-100", "bg-orange-100", "bg-teal-100", "bg-blue-100"
];

const statusColors = {
  Delivered: "bg-green-300 text-green-900",
  Pending: "bg-yellow-300 text-yellow-900",
  Shipped: "bg-blue-300 text-blue-900",
  Cancelled: "bg-red-300 text-red-900",
};

function Orders() {
  return (
    <div className="p-6 bg-lavender min-h-screen">
      <h1 className="text-4xl font-extrabold  text-indigo-800 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
        Orders
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={`${cardColors[index % cardColors.length]} rounded-2xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Order #{order.id}</h3>
              <p className="text-gray-700 mb-2 font-medium">Items: {order.items.join(", ")}</p>
              <p className="text-gray-600 mb-2 font-semibold">Total: ₹{order.total}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
