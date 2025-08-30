import React, { useState } from "react";

const StaffShifts = () => {
  
  const [shifts, setShifts] = useState([
    { id: 1, name: "Dr. Anil Sharma", role: "Doctor", shift: "Morning (8 AM - 2 PM)" },
    { id: 2, name: "Nurse Priya Singh", role: "Nurse", shift: "Evening (2 PM - 8 PM)" },
    { id: 3, name: "Rahul Verma", role: "Support Staff", shift: "Night (8 PM - 8 AM)" },
  ]);

  const [newShift, setNewShift] = useState({
    name: "",
    role: "",
    shift: "",
  });

  // Add new shift
  const handleAddShift = (e) => {
    e.preventDefault();
    if (!newShift.name || !newShift.role || !newShift.shift) return;

    const newEntry = { ...newShift, id: Date.now() };
    setShifts([...shifts, newEntry]);

    
    setNewShift({ name: "", role: "", shift: "" });
  };

  return (
    <div className="p-6 min-h-screen bg-fuchsia-100">
     
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-950">
        Shifts & Scheduling
      </h1>

      
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Assign New Shift</h2>
        <form
          onSubmit={handleAddShift}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Staff Name"
            className="p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
            value={newShift.name}
            onChange={(e) => setNewShift({ ...newShift, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role (Doctor/Nurse/Support)"
            className="p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
            value={newShift.role}
            onChange={(e) => setNewShift({ ...newShift, role: e.target.value })}
          />
          <select
            className="p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
            value={newShift.shift}
            onChange={(e) => setNewShift({ ...newShift, shift: e.target.value })}
          >
            <option value="">Select Shift</option>
            <option value="Morning (8 AM - 2 PM)">Morning (8 AM - 2 PM)</option>
            <option value="Evening (2 PM - 8 PM)">Evening (2 PM - 8 PM)</option>
            <option value="Night (8 PM - 8 AM)">Night (8 PM - 8 AM)</option>
          </select>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 shadow-md col-span-1 md:col-span-3"
          >
            Add Shift
          </button>
        </form>
      </div>

      
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-950">
          Current Shifts
        </h2>
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="py-3 px-4 text-blue-950 font-semibold">Name</th>
              <th className="py-3 px-4 text-blue-950 font-semibold">Role</th>
              <th className="py-3 px-4 text-blue-950 font-semibold">Shift</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((s, index) => (
              <tr
                key={s.id}
                className={`border-b hover:bg-fuchsia-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-4 font-semibold">{s.name}</td>
                <td className="py-3 px-4">{s.role}</td>
                <td className="py-3 px-4">{s.shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffShifts;
