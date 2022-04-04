import React from "react";
import { isAuthenticated } from "./auth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouter = ({ isLogged }) => {
  const admin = isAuthenticated().data.role === 2;

  return isLogged && admin ? <Outlet /> : <Navigate to="/" />;
};

export const ProtectedRouterUser = ({ isLogged }) => {
  const client = isAuthenticated().data.role === 0;

  return isLogged && client ? <Outlet /> : <Navigate to="/" />;
};
export const ProtectedRouterEmployer = ({ isLogged }) => {
  const Employer = isAuthenticated().data.role === 1;

  return isLogged && Employer ? <Outlet /> : <Navigate to="/" />;
};

