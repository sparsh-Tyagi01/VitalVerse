import { Droplet, Home, LogOut, ShoppingBasket, User } from "lucide-react";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div className="flex flex-col w-[17vw] h-[98.5vh] rounded-[10px] justify-between items-center bg-gray-950">
      <div>
        <div className="flex justify-center items-center mt-4 mb-8">
          <img src="logo.png" alt="logo" className="w-15 brightness-200" />
          <img
            src="vitalverse.png"
            alt="vitalverse"
            className="w-20 brightness-200"
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex items-center mb-6 font-medium text-[18px] text-white gap-1 cursor-pointer"
        >
          <Home size={33} className="text-amber-700 brightness-200" />
          Dashboard
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex items-center mb-6 font-medium text-[18px] text-white gap-1 cursor-pointer"
        >
          <Droplet size={33} className="text-red-600 brightness-200" />
          Blood Services
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex items-center mb-6 font-medium text-[18px] text-white gap-1 cursor-pointer"
        >
          <ShoppingBasket
            size={33}
            className="text-emerald-600 brightness-200"
          />
          E-Commerce
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="flex items-center mb-6 font-medium text-[18px] text-white gap-1 cursor-pointer"
        >
          <User size={33} className="text-pink-700 brightness-200" />
          Staff Management
        </motion.div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="flex items-center mb-3 font-medium text-[18px] text-white gap-1 cursor-pointer"
      >
        <LogOut size={33} className="text-yellow-600 brightness-200" />
        Logout
      </motion.div>
    </div>
  );
};

export default Navbar;
