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
    `px-3 py-2 rounded transition-colors hover:bg-blue-800 ${
      isActive ? "bg-blue-700 font-bold" : ""
    }`;

  return (
    <nav className="bg-blue-950 text-white px-6 py-4 flex flex-wrap justify-between items-center shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold">VitalVerse</div>
      <div className="flex flex-wrap gap-3">
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
