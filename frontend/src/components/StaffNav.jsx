import { Link } from 'react-router-dom'

const StaffNav = () => {
  return (
    <nav className="w-[16vw] h-screen bg-blue-950 shadow-xl rounded-2xl p-4 text-white">
      <h2 className="text-xl font-bold mb-6">Staff Panel</h2>
      <ul className="space-y-4">
        <li><Link to="/staff/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
        <li><Link to="/staff/directory" className="hover:text-yellow-300">Staff Directory</Link></li>
        <li><Link to="/staff/shifts" className="hover:text-yellow-300">Shifts & Scheduling</Link></li>
        <li><Link to="/staff/attendance" className="hover:text-yellow-300">Attendance</Link></li>
        <li><Link to="/staff/tasks" className="hover:text-yellow-300">Tasks</Link></li>
        <li><Link to="/staff/messages" className="hover:text-yellow-300">Messages</Link></li>
        <li><Link to="/staff/payroll" className="hover:text-yellow-300">Payroll</Link></li>
      </ul>
    </nav>
  )
}

export default StaffNav
