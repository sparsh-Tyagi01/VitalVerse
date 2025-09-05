import React from "react";
import Enav from "./Enav";
import { Outlet } from "react-router-dom";

function EcommerceLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Top Navigation */}
      <Enav />

      {/* Page content */}
      <div className="p-6">
        <Outlet /> {/* Nested routes will render here */}
      </div>
    </div>
  );
}

export default EcommerceLayout;
