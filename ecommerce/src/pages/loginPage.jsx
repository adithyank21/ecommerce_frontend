



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService"; // Assuming you have this service function
import "../CSS/login.css";

function Login() {
  const [formData, setFormData] = useState({ phoneOrEmail: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await loginUser(formData); // Call the login service
      if (response.token && response.user) {
        // Store token and user details in local storage
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        // Redirect to home page after successful login
        navigate("/");
      } else {
        setError(response.message || "Login failed"); // Display error if login fails
      }
    } catch {
      setError("Error connecting to the server"); // Handle server connection errors
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Phone or Email"
            value={formData.phoneOrEmail}
            onChange={(e) =>
              setFormData({ ...formData, phoneOrEmail: e.target.value })
            }
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="login-input"
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;

