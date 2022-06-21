import React from "react";
import { isAuthenticated } from "./auth";
import { useNavigate, Outlet } from "react-router-dom";

export const ProtectedRouter = ({ isLogged }) => {
  const admin = isAuthenticated().data.role === 2;
  const navigate = useNavigate();
  if (isLogged && admin) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return navigate("/home");
  }
};

export const ProtectedRouterUser = ({ isLogged }) => {
  const client = isAuthenticated().data.role === 0;
  const navigate = useNavigate();
  if (isLogged && client) {
    return <Outlet />;
  } else {
    return navigate("/home");
  }
};
export const ProtectedRouterEmployer = ({ isLogged }) => {
  const Employer = isAuthenticated().data.role === 1;
  const navigate = useNavigate();
  if (isLogged && Employer) {
    return <Outlet />;
  } else {
    return navigate("/home");
  }
};


