const StaffDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Staff Dashboard</h1>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Staff</h2>
          <p className="text-4xl font-bold">120</p>
          <p className="mt-2 text-sm">Doctors, Nurses & Support Staff</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">On Duty</h2>
          <p className="text-4xl font-bold">85</p>
          <p className="mt-2 text-sm">Currently working in shifts</p>
        </div>

        
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Absent Today</h2>
          <p className="text-4xl font-bold">12</p>
          <p className="mt-2 text-sm">Leaves & absentees recorded</p>
        </div>

      </div>

     
      <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Announcements</h2>
        <p>New staff training session scheduled for next Monday at 10 AM.</p>
      </div>

    </div>
  )
}

export default StaffDashboard
