// MainLayout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex bg-black min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen">
        <Navbar />
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-[220px] p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
