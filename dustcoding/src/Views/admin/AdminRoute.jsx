import React from "react";
import { Route, Navigate, Outlet } from "react-router";
import { isAuthenticated } from "../../helpers/auth";

const AdminRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        isAuthenticated() && isAuthenticated().role === 2 ? (
          <Outlet />
        ) : (
          <Navigate to="/LogIn" />
        );
      }}
    />
  );
};

export default AdminRoute;
