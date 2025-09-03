import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  // Fix: redirect to /donor/login (same as App.jsx)
  if (!user) return <Navigate to="/donor/login" replace />;

  return children;
}
