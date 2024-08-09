import React from "react";
import { useAuth } from "../hooks/authentication";
import { Outlet } from "react-router-dom";
import Login from "../pages/auth/login";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Login />;
};

export default ProtectedRoute;
