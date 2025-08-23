import React from "react";

// Dummy data
const stats = [
  { title: "Total Orders", value: 120, color: "bg-red-200", icon: "📦" },
  { title: "Total Sales", value: "₹1,50,000", color: "bg-green-200", icon: "💰" },
  { title: "Active Offers", value: 5, color: "bg-yellow-200", icon: "🎁" },
  { title: "Support Tickets", value: 3, color: "bg-blue-200", icon: "🛠️" },
];

const recentOrders = [
  { id: 101, items: ["Stethoscope", "Gloves"], total: 1700, status: "Delivered" },
  { id: 102, items: ["Wheelchair"], total: 7500, status: "Pending" },
  { id: 103, items: ["Vitamin C", "Protein Powder"], total: 1400, status: "Delivered" },
  { id: 104, items: ["Face Masks Pack"], total: 250, status: "Shipped" },
];

const activeOffers = [
  "10% off on orders above ₹2000",
  "Free shipping for medical staff",
  "Buy 2 get 1 free on gloves",
];

const statusColors = {
  Delivered: "bg-green-200 text-green-800",
  Pending: "bg-yellow-200 text-yellow-800",
  Shipped: "bg-blue-200 text-blue-800",
  Cancelled: "bg-red-200 text-red-800",
};

function Edashboard() {
  return (
    <div className="p-6 bg-lavender min-h-screen">
      {/* Dashboard Header */}
<div className="mb-12"> {/* Increased bottom margin for spacing */}
  <h1 className="text-4xl font-bold text-indigo-900 mb-4">Dashboard</h1>
  <p className="text-gray-800 text-lg md:text-xl">
    Welcome to <span className="font-semibold text-indigo-600">VitalVerse E-Commerce</span>. 
    Here’s a <span className="text-indigo-500 font-medium">quick overview</span> of your store’s performance, orders, offers, and support.
  </p>
</div>

{/* Stats Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
  {stats.map((stat) => (
    <div
      key={stat.title}
      className={`${stat.color} rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:-translate-y-1 transition-all`}
    >
      <div className="text-4xl mb-4">{stat.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{stat.title}</h3>
      <p className="text-indigo-900 text-2xl font-bold">{stat.value}</p>
    </div>
  ))}
</div>


      {/* Recent Orders */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Recent Orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-gray-800 mb-2">Order #{order.id}</h3>
              <p className="text-gray-600 mb-2">Items: {order.items.join(", ")}</p>
              <p className="text-gray-700 mb-2 font-bold">Total: ₹{order.total}</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Active Offers */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Active Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeOffers.map((offer, i) => (
            <div
              key={i}
              className="bg-indigo-100 rounded-xl p-4 shadow hover:shadow-2xl transition-all text-indigo-900 font-semibold"
            >
              🎁 {offer}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          {["Add New Product", "View All Orders", "Manage Offers", "Support Tickets"].map((action) => (
            <button
              key={action}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Edashboard;
