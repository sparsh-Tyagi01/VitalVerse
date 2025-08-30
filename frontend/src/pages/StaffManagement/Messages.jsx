import React from "react";

const messagesData = [
  { id: 1, sender: "Admin", message: "Meeting at 10 AM in Conference Hall" },
  { id: 2, sender: "HR", message: "Submit leave requests by Friday" },
  { id: 3, sender: "Director", message: "Annual Health Check-up Camp next week" },
];

function Messages() {
  return (
    <div className="p-6">
   
      <h1 className="text-2xl font-bold mb-6 to-black">📢 Messages & Announcements</h1>

     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {messagesData.map((msg) => (
          <div
            key={msg.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition border-t-4 border-blue-600"
          >
            <h2 className="text-lg font-semibold text-blue-800 mb-2">
              {msg.sender}
            </h2>
            <p className="text-gray-700">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
