import React from "react";
import { Navigate } from "react-router-dom";
import { useStudentAuth } from "./context/StudentAuthContext";

const ProtectedRoute = ({children}) => {
  const { user } = useStudentAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
