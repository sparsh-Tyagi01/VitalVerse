import { Link, useLocation } from "react-router-dom";

const StaffNav = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", to: "/staff/dashboard" },
    { name: "Staff Directory", to: "/staff/directory" },
    { name: "Shifts & Scheduling", to: "/staff/shifts" },
    { name: "Attendance", to: "/staff/attendance" },
    { name: "Tasks", to: "/staff/tasks" },
    { name: "Messages", to: "/staff/messages" },
    { name: "Payroll", to: "/staff/payroll" },
  ];

  return (
    <nav className="w-[16vw] h-screen bg-gray-900 shadow-xl rounded-2xl p-5 text-white flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-400">
        Staff Panel
      </h2>
      <ul className="space-y-3">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                  active
                    ? "bg-blue-700 text-white font-semibold shadow-md"
                    : "text-gray-300 hover:bg-gray-800 hover:text-yellow-300"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default StaffNav;
