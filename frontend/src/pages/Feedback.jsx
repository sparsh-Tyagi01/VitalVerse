import React, { useState } from "react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! 🙏");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 
                     bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 drop-shadow-lg">
        Feedback
      </h1>

      <div className="bg-gray-900/80 rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-700 hover:shadow-2xl transition-all">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-300 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <label className="text-gray-300 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <label className="text-gray-300 font-semibold">Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="5"
            className="bg-gray-800 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-500 transition-colors shadow-md mt-2"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
