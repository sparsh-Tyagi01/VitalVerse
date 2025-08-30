const Tasks = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">Emergency Ward</h2>
          <p>Dr. Sharma, Nurse Raj</p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">Lab Reports</h2>
          <p>Priya, Sanjay</p>
        </div>
      </div>
    </div>
  )
}

export default Tasks
