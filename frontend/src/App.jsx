import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
import Login from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import SignUp from "./components/SignUp";

const NotFound = () => (
  <div className="text-center mt-10 text-2xl">404 - Page Not Found</div>
);

function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      {/* ===== MAIN LAYOUT ===== */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<DonorDashboard />} />
        <Route path="/donor" element={<Donor />} />

        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DonorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/find"
          element={
            <ProtectedRoute>
              <FindMatch />
            </ProtectedRoute>
          }
        />
        <Route
          path="/guidelines"
          element={
              <Guideline />
          }
        />
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

      {/* ===== 404 ===== */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
