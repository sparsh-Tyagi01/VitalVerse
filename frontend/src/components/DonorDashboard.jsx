import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const DonorDashboard = () => {
  const COLORS = [
    "#4F46E5", // indigo
    "#10B981", // green
    "#F59E0B", // amber
    "#EF4444", // red
    "#6366F1", // indigo-500
    "#22C55E", // emerald
  ];

  const pieData = useMemo(
    () => [
      { name: "Donors", value: 120 },
      { name: "Recipients", value: 95 },
      { name: "Active Requests", value: 34 },
      { name: "Completed", value: 105 },
    ],
    []
  );

  return (
    <div className="bg-gray-950 min-h-screen rounded-[10px] p-8">
      {/* Header */}
      <h1 className="font-bold text-3xl text-white mb-2">
        Donors & Recipients
      </h1>
      <h2 className="font-semibold text-xl text-gray-400 mb-8">Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-gray-900/70 shadow-lg hover:shadow-xl transition">
          <h1 className="font-medium text-gray-300">Total Donors</h1>
          <p className="font-bold text-2xl text-indigo-400">120</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-900/70 shadow-lg hover:shadow-xl transition">
          <h1 className="font-medium text-gray-300">Total Recipients</h1>
          <p className="font-bold text-2xl text-green-400">95</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-900/70 shadow-lg hover:shadow-xl transition">
          <h1 className="font-medium text-gray-300">Active Requests</h1>
          <p className="font-bold text-2xl text-amber-400">34</p>
        </div>
        <div className="p-6 rounded-2xl bg-gray-900/70 shadow-lg hover:shadow-xl transition">
          <h1 className="font-medium text-gray-300">Completed Donations</h1>
          <p className="font-bold text-2xl text-emerald-400">105</p>
        </div>
      </div>

      {/* Charts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Pie Chart */}
        <div className="p-6 rounded-2xl bg-gray-900/70 shadow-lg">
          <h1 className="font-semibold text-white mb-4">Donation Overview</h1>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={100} label>
                {pieData.map((entry, i) => (
                  <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                itemStyle={{ color: "#e5e7eb" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="p-6 rounded-2xl bg-gray-900/70 shadow-lg">
          <h1 className="font-semibold text-white mb-4">Recent Activity</h1>
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="font-medium text-sm text-gray-200">
                Dr. Arjun matched with a kidney recipient
              </p>
              <p className="text-xs font-medium text-gray-500">2h ago</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="font-medium text-sm text-gray-200">
                New donor registered Shreya Sharma
              </p>
              <p className="text-xs font-medium text-gray-500">5h ago</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="font-medium text-sm text-gray-200">
                Donation request approved for Ravi Kumar
              </p>
              <p className="text-xs font-medium text-gray-500">1d ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
