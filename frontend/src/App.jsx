import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Enav from "./components/Enav";
import Edashboard from "./pages/Edashboard";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Offers from "./pages/Offers";
import Support from "./pages/Support";
import Feedback from './pages/Feedback';
import MainLayout from './components/MainLayout'
import AdminDashboard from './components/AdminDashboard'

// Staff Management imports
import Dashboard from "./pages/StaffManagement/StaffDashboard";
import StaffDirectory from "./pages/StaffManagement/StaffDirectory";
import StaffLayout from "./components/StaffLayout";

import Attendance from "./pages/StaffManagement/Attendance";
import Tasks from "./pages/StaffManagement/Tasks";
import Messages from "./pages/StaffManagement/Messages";
import StaffShifts from './pages/StaffManagement/StaffShifts';
import StaffPayroll from "./pages/StaffManagement/StaffPayroll";

function App() {
  return (
    <>
      <Routes>
        {/* ================= E-COMMERCE MODULE ================= */}
        <Route element={<MainLayout />}>
          {/* Enav only inside MainLayout */}
          <Route path="/" element={<Edashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/feedback" element={<Feedback />} />
        </Route>

        {/* ================= STAFF MANAGEMENT MODULE ================= */}
        {/* ================= STAFF MANAGEMENT MODULE ================= */}
<Route path="/staff" element={<StaffLayout />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="directory" element={<StaffDirectory />} /> 
  <Route path="attendance" element={<Attendance />} />
  <Route path="tasks" element={<Tasks />} />
  <Route path="shifts" element={<StaffShifts />} />   {/* fixed */}
  <Route path="payroll" element={<StaffPayroll />} /> {/* fixed */}
  <Route path="messages" element={<Messages />} />
</Route>

        {/* ================= ADMIN MODULE ================= */}
        <Route element={<MainLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
