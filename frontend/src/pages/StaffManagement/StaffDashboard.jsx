const StaffDashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen text-white rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        🏥 Staff Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Staff */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Total Staff</h2>
          <p className="text-4xl font-bold">120</p>
          <p className="mt-2 text-sm text-gray-200">
            Doctors, Nurses & Support Staff
          </p>
        </div>

        {/* On Duty */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">On Duty</h2>
          <p className="text-4xl font-bold">85</p>
          <p className="mt-2 text-sm text-gray-200">
            Currently working in shifts
          </p>
        </div>

        {/* Absent Today */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Absent Today</h2>
          <p className="text-4xl font-bold">12</p>
          <p className="mt-2 text-sm text-gray-200">
            Leaves & absentees recorded
          </p>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-gradient-to-r from-purple-700 to-violet-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-2">📢 Announcements</h2>
        <p className="text-gray-200">
          New staff training session scheduled for next Monday at 10 AM.
        </p>
      </div>
    </div>
  );
};

export default StaffDashboard;
