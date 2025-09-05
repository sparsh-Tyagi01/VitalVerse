const StaffDirectory = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen text-white rounded-xl">
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">
        📖 Staff Directory
      </h1>

      {/* Staff Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">Dr. Neha Sharma</h2>
          <p className="text-gray-200">Cardiologist</p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">Mr. Raj Kumar</h2>
          <p className="text-gray-200">Nurse</p>
        </div>

        <div className="bg-gradient-to-r from-lime-500 to-green-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold">Mrs. Priya Singh</h2>
          <p className="text-gray-200">Lab Technician</p>
        </div>
      </div>
    </div>
  );
};

export default StaffDirectory;
