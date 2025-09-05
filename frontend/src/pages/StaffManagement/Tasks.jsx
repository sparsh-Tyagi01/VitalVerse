const Tasks = () => {
  return (
    <div className="p-6 min-h-screen rounded-[10px] bg-gray-900 text-white space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-yellow-300 mb-4">Tasks</h1>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Emergency Ward</h2>
          <p className="text-gray-200">Dr. Sharma, Nurse Raj</p>
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Lab Reports</h2>
          <p className="text-gray-200">Priya, Sanjay</p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
