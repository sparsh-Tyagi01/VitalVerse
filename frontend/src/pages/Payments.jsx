import React from "react";

const payments = [
  { id: 201, method: "Credit Card", amount: 1500, status: "Completed", date: "2025-08-20" },
  { id: 202, method: "UPI", amount: 7500, status: "Pending", date: "2025-08-18" },
  { id: 203, method: "Net Banking", amount: 1200, status: "Completed", date: "2025-08-15" },
  { id: 204, method: "Credit Card", amount: 250, status: "Failed", date: "2025-08-12" },
  { id: 205, method: "UPI", amount: 1800, status: "Completed", date: "2025-08-10" },
];

const statusColors = {
  Completed: "bg-green-700 text-green-100",
  Pending: "bg-yellow-600 text-yellow-100",
  Failed: "bg-red-700 text-red-100",
};

function Payments() {
  const totalPaid = payments
    .filter((p) => p.status === "Completed")
    .reduce((acc, p) => acc + p.amount, 0);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        💳 Payments
      </h1>

      {/* Total Paid Card */}
      <div className="mb-8 p-6 bg-gradient-to-r from-indigo-800 to-purple-800 rounded-2xl shadow-lg flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Total Paid:</h2>
        <p className="text-2xl font-extrabold text-yellow-300">₹{totalPaid}</p>
      </div>

      {/* Payments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {payments.map((p) => (
          <div
            key={p.id}
            className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-2 transition-all"
          >
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-white mb-1">
                Payment #{p.id}
              </h3>
              <p className="text-gray-300 mb-1">Method: {p.method}</p>
              <p className="text-gray-400 mb-2 font-medium">Amount: ₹{p.amount}</p>
              <p className="text-gray-500 text-sm">Date: {p.date}</p>
            </div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[p.status]}`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payments;
