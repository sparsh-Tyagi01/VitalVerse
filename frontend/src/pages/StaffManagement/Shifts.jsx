import React from "react";

const shiftsData = [
  { id: 1, staff: "Dr. Ramesh Kumar", shift: "Morning", time: "8 AM - 2 PM" },
  { id: 2, staff: "Nurse Anita Sharma", shift: "Afternoon", time: "2 PM - 8 PM" },
  { id: 3, staff: "Rajesh Singh", shift: "Night", time: "8 PM - 8 AM" },
];

function Shifts() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">Shifts & Scheduling</h1>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-gray-700">
              <th className="border p-3">Staff Name</th>
              <th className="border p-3">Shift</th>
              <th className="border p-3">Time</th>
            </tr>
          </thead>
          <tbody>
            {shiftsData.map((shift) => (
              <tr key={shift.id} className="text-center hover:bg-gray-50">
                <td className="border p-3">{shift.staff}</td>
                <td className="border p-3">{shift.shift}</td>
                <td className="border p-3">{shift.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shifts;
