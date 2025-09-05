import React from "react";

const offers = [
  { id: 1, desc: "10% off on orders above ₹2000", icon: "🎉" },
  { id: 2, desc: "Free shipping for medical staff", icon: "🚚" },
  { id: 3, desc: "Buy 1 Get 1 Free on Vitamin C", icon: "💊" },
  { id: 4, desc: "5% Cashback on UPI Payments", icon: "💰" },
  { id: 5, desc: "Flat ₹100 off on orders above ₹1000", icon: "🏷️" },
  { id: 6, desc: "Special Weekend Sale: 15% off", icon: "🛒" },
];

const cardColors = [
  "from-purple-600 to-purple-800",
  "from-indigo-600 to-indigo-800",
  "from-pink-600 to-pink-800",
  "from-green-600 to-green-800",
  "from-yellow-500 to-yellow-700",
  "from-teal-600 to-teal-800",
];

function Offers() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-4xl font-extrabold mb-8 
                     bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 drop-shadow-lg">
        🎁 Offers & Deals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`bg-gradient-to-r ${cardColors[index % cardColors.length]} rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transform hover:-translate-y-2 transition-all`}
          >
            <div className="text-4xl">{offer.icon}</div>
            <p className="font-semibold text-lg text-white">{offer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
