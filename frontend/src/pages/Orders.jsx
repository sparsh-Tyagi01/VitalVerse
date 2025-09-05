import React from "react";

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

const cardColors = [
  "from-pink-600 to-pink-800",
  "from-indigo-600 to-indigo-800",
  "from-green-600 to-green-800",
  "from-yellow-500 to-yellow-700",
  "from-purple-600 to-purple-800",
  "from-orange-600 to-orange-800",
  "from-teal-600 to-teal-800",
  "from-blue-600 to-blue-800",
];

const statusColors = {
  Delivered: "bg-green-500 text-white",
  Pending: "bg-yellow-500 text-white",
  Shipped: "bg-blue-500 text-white",
  Cancelled: "bg-red-500 text-white",
};

function Orders() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
        📦 Orders
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={`bg-gradient-to-r ${cardColors[index % cardColors.length]} rounded-2xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Order #{order.id}</h3>
              <p className="text-gray-200 mb-2">Items: {order.items.join(", ")}</p>
              <p className="text-gray-300 mb-2 font-semibold">Total: ₹{order.total}</p>
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
