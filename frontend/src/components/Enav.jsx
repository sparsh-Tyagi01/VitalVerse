// Enav.jsx
import { NavLink } from "react-router-dom";

function Enav() {
  const navLinks = [
    { name: "Dashboard", to: "/ecommerce" },
    { name: "Products", to: "/ecommerce/products" },
    { name: "Orders", to: "/ecommerce/orders" },
    { name: "Cart", to: "/ecommerce/cart" },
    { name: "Payments", to: "/ecommerce/payments" },
    { name: "Offers", to: "/ecommerce/offers" },
    { name: "Support", to: "/ecommerce/support" },
    { name: "Feedback", to: "/ecommerce/feedback" },
  ];

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition-colors duration-200 
     hover:bg-gray-700 hover:text-white 
     ${isActive ? "bg-blue-600 text-white font-semibold shadow-md" : "text-gray-300"}`;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-lg sticky top-0 z-50">
      {/* Logo / Brand */}
      <div className="text-2xl font-extrabold tracking-wide text-blue-400">
        VitalVerse
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={linkClass}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Enav;
