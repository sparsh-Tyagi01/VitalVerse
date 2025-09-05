import { Book, HelpCircle, HomeIcon, Search, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Donor = () => {
  const data = [
    {
      name: "Dashboard",
      para: "Overview of donation requests, matches, and recent activity.",
      icon: <HomeIcon size={35} className="text-blue-400" />,
      to: "/dashboard",
    },
    {
      name: "Register",
      para: "Sign up as donor or recipient (blood/organ).",
      icon: <UserPlus size={35} className="text-green-400" />,
      to: "/register",
    },
    {
      name: "Find Match",
      para: "Search & view compatible donors/recipients.",
      icon: <Search size={35} className="text-violet-400" />,
      to: "/find",
    },
    {
      name: "Guidelines",
      para: "Eligibility rules, safety info, and FAQs.",
      icon: <Book size={35} className="text-fuchsia-400" />,
      to: "/guidelines",
    },
    {
      name: "Support",
      para: "Helpdesk & emergency contact.",
      icon: <HelpCircle size={35} className="text-emerald-400" />,
      to: "/support",
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen rounded-[10px] p-8">
      <h1 className="font-bold text-3xl text-white mb-8">
        Donors & Recipients
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((items) => (
          <Link key={items.name} to={items.to}>
            <div className="w-full h-[220px] flex flex-col items-start p-6 rounded-2xl bg-gray-900/70 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center font-semibold text-xl gap-3 mb-4 text-white">
                {items.icon} {items.name}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {items.para}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Donor;
