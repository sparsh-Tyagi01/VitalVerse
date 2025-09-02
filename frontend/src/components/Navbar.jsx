import { Droplet, Home, LogOut, ShoppingBasket, User } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItemStyle =
    "flex items-center mb-6 font-medium text-[18px] text-white gap-2 cursor-pointer";
  const activeStyle = "text-amber-400 font-bold";

  const navItems = [
    {
      name: "Homepage",
      to: "/",
      icon: <Home size={28} className="text-amber-700" />,
    },
    {
      name: "Donors & Recipients",
      to: "/donor",
      icon: <Droplet size={28} className="text-red-600" />,
    },
    {
      name: "E-Commerce",
      to: "/ecommerce",
      icon: <ShoppingBasket size={28} className="text-emerald-600" />,
    },
    {
      name: "Staff Management",
      to: "/staff/dashboard",
      icon: <User size={28} className="text-pink-700" />,
    },
  ];

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="flex flex-col items-center w-[220px] min-h-screen bg-gray-950 rounded-[10px] justify-between p-4">
      <div>
        <div className="flex  items-center mb-8">
          <img src="/logo.png" alt="logo" className="w-16 mb-2" />
          <img src="/vitalverse.png" alt="vitalverse" className="w-24" />
        </div>

        <div className="flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `${navItemStyle} ${isActive ? activeStyle : ""}`
              }
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </motion.div>
            </NavLink>
          ))}
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 mt-6 font-medium text-[18px] text-white cursor-pointer"
        onClick={handleLogout}
      >
        <LogOut size={28} className="text-yellow-600" />
        Logout
      </motion.div>
    </div>
  );
};

export default Navbar;
