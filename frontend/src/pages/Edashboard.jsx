import React from "react";

const stats = [
  { title: "Total Orders", value: 120, color: "bg-red-600/30", icon: "📦" },
  { title: "Total Sales", value: "₹1,50,000", color: "bg-green-600/30", icon: "💰" },
  { title: "Active Offers", value: 5, color: "bg-yellow-600/30", icon: "🎁" },
  { title: "Support Tickets", value: 3, color: "bg-blue-600/30", icon: "🛠️" },
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
  Delivered: "bg-green-600/30 text-green-300",
  Pending: "bg-yellow-600/30 text-yellow-300",
  Shipped: "bg-blue-600/30 text-blue-300",
  Cancelled: "bg-red-600/30 text-red-300",
};

function Edashboard() {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">📊 Dashboard</h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Welcome to{" "}
          <span className="font-semibold text-blue-400">VitalVerse E-Commerce</span>. 
          Here’s a <span className="text-yellow-400 font-medium">quick overview</span> 
          of your store’s performance, orders, offers, and support.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`${stat.color} rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all`}
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-200">{stat.title}</h3>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">🛒 Recent Orders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-yellow-500/20 transform hover:-translate-y-1 transition-all"
            >
              <h3 className="font-semibold text-white mb-2">Order #{order.id}</h3>
              <p className="text-gray-400 mb-2">Items: {order.items.join(", ")}</p>
              <p className="text-gray-200 mb-2 font-bold">Total: ₹{order.total}</p>
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
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎁 Active Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeOffers.map((offer, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-yellow-500/20 transition-all text-blue-300 font-semibold"
            >
              🎉 {offer}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">⚡ Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          {["Add New Product", "View All Orders", "Manage Offers", "Support Tickets"].map((action) => (
            <button
              key={action}
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-md"
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
