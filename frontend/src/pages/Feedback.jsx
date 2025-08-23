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
    <div className="p-6 bg-lavender min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-8 
                     bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">
         Feedback
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md hover:shadow-2xl transition-all">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <label className="text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <label className="text-gray-700 font-semibold">Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="5"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-md mt-2"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
