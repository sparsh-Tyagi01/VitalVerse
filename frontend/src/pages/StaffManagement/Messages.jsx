import React from "react";

const messagesData = [
  { id: 1, sender: "Admin", message: "Meeting at 10 AM in Conference Hall" },
  { id: 2, sender: "HR", message: "Submit leave requests by Friday" },
  { id: 3, sender: "Director", message: "Annual Health Check-up Camp next week" },
];

function Messages() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">
        📢 Messages & Announcements
      </h1>

      {/* Messages Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messagesData.map((msg) => (
          <div
            key={msg.id}
            className="bg-gray-800 shadow-lg rounded-2xl p-6 border-l-4 border-blue-500 hover:bg-gray-700 transition"
          >
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              {msg.sender}
            </h2>
            <p className="text-gray-300">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
