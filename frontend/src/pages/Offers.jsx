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
  "from-purple-300 to-purple-100",
  "from-indigo-300 to-indigo-100",
  "from-pink-300 to-pink-100",
  "from-green-300 to-green-100",
  "from-yellow-300 to-yellow-100",
  "from-teal-300 to-teal-100",
];

function Offers() {
  return (
    <div className="p-6 bg-lavender min-h-screen">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-8 
                     bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
        🎁 Offers & Deals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`bg-gradient-to-r ${cardColors[index % cardColors.length]} rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transform hover:-translate-y-2 transition-all`}
          >
            <div className="text-4xl">{offer.icon}</div>
            <p className="text-gray-800 font-semibold text-lg">{offer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
