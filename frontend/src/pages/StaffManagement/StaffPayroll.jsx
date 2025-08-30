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
    <div className="p-6 bg-fuchsia-100 min-h-screen">
     
      <h1 className="text-3xl font-bold text-blue-950 mb-6">
        Payroll Management
      </h1>

      
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Salary Details
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-950 text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Base Salary</th>
              <th className="py-3 px-4 text-left">Allowance</th>
              <th className="py-3 px-4 text-left">Deductions</th>
              <th className="py-3 px-4 text-left">Net Salary</th>
            </tr>
          </thead>
          <tbody>
            {payroll.map((staff) => (
              <tr
                key={staff.id}
                className="border-b hover:bg-fuchsia-50 transition-all"
              >
                <td className="py-3 px-4 font-semibold text-gray-800">
                  {staff.name}
                </td>
                <td className="py-3 px-4 text-gray-600">{staff.role}</td>
                <td className="py-3 px-4 text-gray-700">
                  ₹{staff.baseSalary.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  ₹{staff.allowance.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-red-600 font-medium">
                  ₹{staff.deductions.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-green-600 font-bold">
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
