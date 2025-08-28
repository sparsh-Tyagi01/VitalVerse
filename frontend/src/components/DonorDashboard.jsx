import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const DonorDashboard = () => {

    const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#6366F1", "#22C55E"]; // indigo, green, amber, red, indigo-500, emerald

    const pieData = useMemo(() => ([
        { name: "Donors", value: 120 },
        { name: "Recipients", value: 95 },
        { name: "Active Requests", value: 34 },
        { name: "Completed", value: 105 },
      ]),[]);

  return (
    <div className='bg-fuchsia-50 h-screen rounded-[10px]'>
      <h1 className='font-bold text-3xl ml-4 pt-4'>
        Donors & Recipients
      </h1>
      <h1 className="font-bold text-xl ml-4 pt-4">
        Dashboard
      </h1>
      <div className="flex justify-around items-center mt-4">
        <div className="w-[15vw] h-[20vh] p-6 bg-gray-100 shadow-[0px_0px_3px] rounded-2xl">
            <h1 className="font-medium text-gray-600">Total Donors</h1>
            <p className="font-bold text-[20px] text-gray-600">120</p>
        </div>
        <div className="w-[15vw] h-[20vh] p-6 bg-blue-50 shadow-[0px_0px_3px] rounded-2xl">
            <h1 className="font-medium text-blue-900">Total Recipents</h1>
            <p className="font-bold text-[20px] text-blue-900">95</p>
        </div>
        <div className="w-[15vw] h-[20vh] p-6 bg-yellow-100 shadow-[0px_0px_3px] rounded-2xl">
            <h1 className="font-medium text-yellow-900">Active Requests</h1>
            <p className="font-bold text-[20px] text-yellow-900">34</p>
        </div>
        <div className="w-[15vw] h-[20vh] p-6 bg-green-100 shadow-[0px_0px_3px] rounded-2xl">
            <h1 className="font-medium text-green-800">Completed Donations</h1>
            <p className="font-bold text-[20px] text-green-800">105</p>
        </div>
      </div>
      <div className="flex justify-around items-center mt-8">
        <div className="w-[30vw] h-[50vh] p-4 bg-white shadow-[0px_0px_3px] rounded-2xl">
            <h1 className="font-medium mb-1">
                Donation Overview
            </h1>
            <ResponsiveContainer width="100%" height={265}>
                            <PieChart>
                              <Pie data={pieData} dataKey="value" outerRadius={90} label>
                                {pieData.map((entry, i) => (
                                  <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip />
                              <Legend />
                            </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="w-[30vw] h-[50vh] p-6 bg-white shadow-[0px_0px_3px] rounded-2xl">
            <h1 className="font-medium">
                Recent Activity
            </h1>
            <div className="flex flex-col gap-4 mt-2">
            <div className="w-[26vw] h-[10vh] flex flex-col justify-center pl-2 bg-gray-100 shadow-[0px_0px_3px] rounded-[10px]">
                <p className="font-medium text-sm">Dr. Arjun matched with a kidney recipient</p>
                <p className="text-xs font-medium text-gray-500">2h ago</p>
            </div>
            <div className="w-[26vw] h-[10vh] flex flex-col justify-center pl-2 bg-gray-100 shadow-[0px_0px_3px] rounded-[10px]">
                <p className="font-medium text-sm">New donor registered Shreya Sharma</p>
                <p className="text-xs font-medium text-gray-500">5h ago</p>
            </div>
            <div className="w-[26vw] h-[10vh] flex flex-col justify-center pl-2 bg-gray-100 shadow-[0px_0px_3px] rounded-[10px]">
                <p className="font-medium text-sm">Donation request approved for Ravi Kumar</p>
                <p className="text-xs font-medium text-gray-500">1d ago</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DonorDashboard