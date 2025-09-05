import React, { useState } from "react";

const StaffPayroll = () => {
  const [payroll] = useState([
    {
      id: 1,
      name: "Dr. Anil Sharma",
      role: "Doctor",
      baseSalary: 80000,
      allowance: 10000,
      deductions: 5000,
    },
    {
      id: 2,
      name: "Nurse Priya Singh",
      role: "Nurse",
      baseSalary: 40000,
      allowance: 5000,
      deductions: 2000,
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "Support Staff",
      baseSalary: 25000,
      allowance: 2000,
      deductions: 1000,
    },
  ]);

  const calculateNetSalary = (staff) =>
    staff.baseSalary + staff.allowance - staff.deductions;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">
        💰 Payroll Management
      </h1>

      {/* Payroll Table */}
      <div className="bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">
          Salary Details
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700 text-blue-300">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Base Salary</th>
              <th className="py-3 px-4 text-left">Allowance</th>
              <th className="py-3 px-4 text-left">Deductions</th>
              <th className="py-3 px-4 text-left">Net Salary</th>
            </tr>
          </thead>
          <tbody>
            {payroll.map((staff, index) => (
              <tr
                key={staff.id}
                className={`border-b border-gray-700 ${
                  index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                } hover:bg-gray-700 transition`}
              >
                <td className="py-3 px-4 font-semibold">{staff.name}</td>
                <td className="py-3 px-4 text-gray-300">{staff.role}</td>
                <td className="py-3 px-4 text-gray-200">
                  ₹{staff.baseSalary.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-green-400">
                  ₹{staff.allowance.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-red-400 font-medium">
                  ₹{staff.deductions.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-yellow-300 font-bold">
                  ₹{calculateNetSalary(staff).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffPayroll;
