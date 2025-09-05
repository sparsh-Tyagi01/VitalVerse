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
    <div className="p-6 bg-gray-900 text-white min-h-screen rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-8">
        📋 Staff Attendance
      </h1>

      {/* Attendance Table Card */}
      <div className="bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">
          Today’s Attendance
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white">
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
                  className={`border-b border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                  } hover:bg-gray-600 transition`}
                >
                  <td className="py-3 px-4 font-semibold">{staff.name}</td>
                  <td className="py-3 px-4 text-gray-300">{staff.role}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        staff.status === "Present"
                          ? "bg-green-900 text-green-300"
                          : staff.status === "Absent"
                          ? "bg-red-900 text-red-300"
                          : "bg-yellow-900 text-yellow-300"
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
                      className="p-2 bg-gray-900 border border-gray-600 rounded-lg text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
