const StaffDirectory = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Staff Directory</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">Dr. Neha Sharma</h2>
          <p>Cardiologist</p>
        </div>

        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">Mr. Raj Kumar</h2>
          <p>Nurse</p>
        </div>

        <div className="bg-gradient-to-r from-lime-400 to-green-500 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">Mrs. Priya Singh</h2>
          <p>Lab Technician</p>
        </div>
      </div>
    </div>
  )
}

export default StaffDirectory
