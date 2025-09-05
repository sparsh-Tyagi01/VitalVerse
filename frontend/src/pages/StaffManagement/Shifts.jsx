import React from "react";

const shiftsData = [
  { id: 1, staff: "Dr. Ramesh Kumar", shift: "Morning", time: "8 AM - 2 PM" },
  { id: 2, staff: "Nurse Anita Sharma", shift: "Afternoon", time: "2 PM - 8 PM" },
  { id: 3, staff: "Rajesh Singh", shift: "Night", time: "8 PM - 8 AM" },
];

function Shifts() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">
        🕒 Shifts & Scheduling
      </h1>

      {/* Shifts Table */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700 text-blue-300">
              <th className="border border-gray-600 p-3">Staff Name</th>
              <th className="border border-gray-600 p-3">Shift</th>
              <th className="border border-gray-600 p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {shiftsData.map((shift, index) => (
              <tr
                key={shift.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                } hover:bg-gray-700 transition`}
              >
                <td className="border border-gray-700 p-3">{shift.staff}</td>
                <td className="border border-gray-700 p-3 text-green-400 font-semibold">
                  {shift.shift}
                </td>
                <td className="border border-gray-700 p-3 text-gray-300">
                  {shift.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shifts;
