import React, { use } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

function PrivateRouter({ children }) {
  const { user } = use(AuthContext);
  const location = useLocation();
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRouter;
