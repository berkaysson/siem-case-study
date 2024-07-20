import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  isAuthenticated: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/books" replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
