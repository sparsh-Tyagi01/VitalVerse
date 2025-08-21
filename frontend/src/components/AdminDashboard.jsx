import { Activity, Droplet, ShoppingBasket, Users } from "lucide-react";
import { motion } from "motion/react";

const AdminDashboard = () => {

    const dontors = [
        {name: "John", email: "john@gmail.com", category: "Organ", type: "Kidney"},
        {name: "Tanish Goel", email: "tanish@gmail.com", category: "Blood", type: "A+"}
    ]

  return (
    <>
      <h1 className="text-white font-medium text-xl mt-6 ml-4">
        Admin Dashboard
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-4 mt-10">
          <motion.div
           whileHover={{scale:1.02}}
           className="w-[38vw] h-[30vh] bg-gray-950 rounded-[10px] shadow-[0px_0px_5px_blue] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-white font-medium text-xl">
              <Users size={40} className="text-blue-500 brightness-200" /> Total Users
            </div>
            <p className="text-white text-2xl font-bold mt-2">12,300</p>
          </motion.div>
          <motion.div
           whileHover={{scale:1.02}}
           className="w-[38vw] h-[30vh] bg-gray-950 rounded-[10px] shadow-[0px_0px_5px_red] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-white font-medium text-xl">
              <Droplet size={40} className="text-red-600 brightness-200" />
              Donations
            </div>
            <p className="text-white text-2xl font-bold mt-2">5230</p>
          </motion.div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <motion.div
           whileHover={{scale:1.02}}
           className="w-[38vw] h-[50vh] bg-gray-950 rounded-[10px] shadow-[0px_0px_5px_green] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-white font-medium text-xl">
              <ShoppingBasket size={40} className="text-green-500 brightness-200" /> Orders
            </div>
            <p className="text-white text-2xl font-bold mt-2">98</p>
          </motion.div>
          <motion.div
           whileHover={{scale:1.02}}
           className="w-[38vw] h-[50vh] bg-gray-950 rounded-[10px] shadow-[0px_0px_5px_yellow] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-white font-medium text-xl">
              <Activity size={40} className="text-yellow-500 brightness-200" /> Active Staff
            </div>
            <p className="text-white text-2xl font-bold mt-2">27</p>
          </motion.div>
        </div>
        <div className="flex flex-col items-center w-[76vw] h-[70vh] rounded-[10px] bg-gray-950 mt-4 shadow-[0px_0px_5px_pink] overflow-y-scroll scrollbar-hide">
            <div className="text-white font-medium text-xl mt-2">
              Request to Donate
            </div>
            <table className="w-full text-left text-white border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-3">Name</th>
                  <th className="py-2 px-3">Email</th>
                  <th className="py-2 px-3">Category</th>
                  <th className="py-2 px-3">type</th>
                </tr>
              </thead>
              <tbody>
                {dontors.map(items => (
                    <tr key={items.email} className="border-b border-gray-800">
                  <td className="py-2 px-3">{items.name}</td>
                  <td className="py-2 px-3">{items.email}</td>
                  <td className="py-2 px-3 text-red-600">{items.category}</td>
                  <td className="py-2 px-3 text-green-400">{items.type}</td>
                </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
