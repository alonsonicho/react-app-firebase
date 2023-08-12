import { PublicRoutes } from "@routes/routes";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userToken = window.localStorage.getItem("token");

  return <>{userToken ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />}</>;
};

export default PrivateRoute;
