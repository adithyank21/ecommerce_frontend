



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/header.css"; // Import custom CSS for header styling

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.name || user.email); // Use name or fallback to phone/email
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear all user-related data from localStorage
    localStorage.clear();

    // Set login state to false
    setIsLoggedIn(false);

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <nav className="custom-navbar">
       <div className="nav-links">
          {isLoggedIn && (
            <>
              <Link to="/cart" className="icon-link" style={{ color: "white" }}>
                🛒 
              </Link>
              {/* <Link to="/order" className="icon-link" style={{ color: "white" }}>
                 Orders 
              </Link> */}
              <div>
              <Link 
  to="/order" 
  className="icon-link" 
  style={{ color: "white" }}
  onClick={() => console.log("Orders link clicked!")}
>
  Orders
</Link>
</div>


          
            </>
          )}
        </div>
      <div className="navbar-container">
        {/* Navbar Brand */}
        <Link to="/" className="navbar-brand" style={{ color: "white" }}>
          Shop Here
        </Link>

      

        {/* Icons and User Actions */}
        <div className="icon-container">
          {isLoggedIn ? (
            <>
              {/* Show greeting and logout for logged-in users */}
              <span className="user-greeting" style={{ color: "white" }}>
                Hello, {username}
              </span>
              <span
                className="icon-link logout-icon"
                onClick={handleLogout}
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
                title="Logout"
              >
                🔒 Logout
              </span>
            </>
          ) : (
            // Show login icon for guests
            <Link
              to="/login"
              className="icon-link"
              style={{ color: "white" }}
            >
              👤 Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
