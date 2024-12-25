import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
}

export default Logout;
