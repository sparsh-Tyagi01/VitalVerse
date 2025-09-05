import React, { useState } from "react";

const faqs = [
  { q: "How to place an order?", a: "Go to Products → Add to Cart → Proceed to Checkout." },
  { q: "Do you offer COD?", a: "Currently no, only online payments are accepted." },
  { q: "How to track my order?", a: "Go to Orders page and check the status of your order." },
  { q: "Can I cancel my order?", a: "Yes, orders can be cancelled before they are shipped." },
  { q: "How do I apply offers?", a: "Offers can be applied at checkout automatically or via coupon code." },
  { q: "Is my payment secure?", a: "All payments are encrypted and processed securely via trusted gateways." },
];

function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        🛠️ Support / FAQs
      </h1>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg p-5 cursor-pointer 
                       hover:shadow-2xl transform hover:-translate-y-1 transition-all border border-gray-700"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-100">{faq.q}</h3>
              <span className="text-indigo-400 font-bold text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-300">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
