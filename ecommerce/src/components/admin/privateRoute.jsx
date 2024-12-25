


import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute component to protect routes
function PrivateRoute({ element, ...rest }) {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

  // If the user is not logged in, redirect to login page
  if (!isAdminLoggedIn) {
    return <Navigate to="/admin" />;
  }

  return element;
}

export default PrivateRoute;
