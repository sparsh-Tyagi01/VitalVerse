import React from "react";

function EHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center text-center px-6">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
        Welcome to VitalVerse Store 🏥
      </h1>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
        A trusted platform where{" "}
        <span className="text-blue-400 font-semibold">donors</span>,{" "}
        <span className="text-green-400 font-semibold">recipients</span>, and{" "}
        <span className="text-pink-400 font-semibold">hospitals</span> can shop
        for essential <span className="text-yellow-400">medical items</span> with ease.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-yellow-500 transition-all">
          🛒 Shop Now
        </button>
        <button className="bg-gray-800 text-yellow-400 border border-yellow-400 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all">
          📦 View Orders
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} VitalVerse. All rights reserved.
      </footer>
    </div>
  );
}

export default EHomepage;
