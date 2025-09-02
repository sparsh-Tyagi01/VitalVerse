import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import EcommerceLayout from "./components/EcommerceLayout";
import StaffLayout from "./components/StaffLayout";

import DonorDashboard from "./components/DonorDashboard";
import Donor from "./components/Donor";
import FindMatch from "./components/FindMatch";
import Guideline from "./components/Guideline";

import Edashboard from "./pages/Edashboard";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Offers from "./pages/Offers";
import Support from "./pages/Support";
import Feedback from "./pages/Feedback";

import Dashboard from "./pages/StaffManagement/StaffDashboard";
import StaffDirectory from "./pages/StaffManagement/StaffDirectory";
import Attendance from "./pages/StaffManagement/Attendance";
import Tasks from "./pages/StaffManagement/Tasks";
import Messages from "./pages/StaffManagement/Messages";
import StaffShifts from "./pages/StaffManagement/StaffShifts";
import StaffPayroll from "./pages/StaffManagement/StaffPayroll";
import Register from "./components/Register";

const NotFound = () => <div className="text-center mt-10 text-2xl">404 - Page Not Found</div>;

function App() {
  return (
    <Routes>
      {/* ===== MAIN LAYOUT ===== */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<DonorDashboard />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/donor/dashboard" element={<DonorDashboard />} />
        <Route path="/donor/register" element={<Register/>} />
        <Route path="/donor/find" element={<FindMatch />} />
        <Route path="/donor/guidelines" element={<Guideline />} />
      </Route>

      {/* ===== E-COMMERCE LAYOUT ===== */}
      <Route path="/ecommerce" element={<EcommerceLayout />}>
        <Route index element={<Edashboard />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<Orders />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payments" element={<Payments />} />
        <Route path="offers" element={<Offers />} />
        <Route path="support" element={<Support />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>

      {/* ===== STAFF LAYOUT ===== */}
      <Route path="/staff" element={<StaffLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="directory" element={<StaffDirectory />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="shifts" element={<StaffShifts />} />
        <Route path="payroll" element={<StaffPayroll />} />
        <Route path="messages" element={<Messages />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
