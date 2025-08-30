import React, { useState } from "react";

const Attendance = () => {
 
  const [attendance, setAttendance] = useState([
    { id: 1, name: "Dr. Anil Sharma", role: "Doctor", status: "Present" },
    { id: 2, name: "Nurse Priya Singh", role: "Nurse", status: "Absent" },
    { id: 3, name: "Rahul Verma", role: "Support Staff", status: "Present" },
  ]);

  
  const handleStatusChange = (id, newStatus) => {
    setAttendance(
      attendance.map((staff) =>
        staff.id === id ? { ...staff, status: newStatus } : staff
      )
    );
  };

  return (
    <div className="p-6 bg-fuchsia-100 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-950 mb-8">📋 Staff Attendance</h1>

      {/* Attendance Table Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Today’s Attendance
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((staff, index) => (
                <tr
                  key={staff.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-fuchsia-50`}
                >
                  <td className="py-3 px-4 font-semibold text-gray-700">
                    {staff.name}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{staff.role}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        staff.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : staff.status === "Absent"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {staff.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <select
                      value={staff.status}
                      onChange={(e) =>
                        handleStatusChange(staff.id, e.target.value)
                      }
                      className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Leave">Leave</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
