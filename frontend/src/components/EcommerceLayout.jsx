import React from "react";
import Enav from "./Enav";
import { Outlet } from "react-router-dom";

function EcommerceLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <Enav />

      {/* Page content */}
      <div className="p-6">
        <Outlet /> {/* This is necessary for nested routes */}
      </div>
    </div>
  );
}

export default EcommerceLayout;
