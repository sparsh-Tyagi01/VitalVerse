import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  // Fix: redirect to /login (same as App.jsx)
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
