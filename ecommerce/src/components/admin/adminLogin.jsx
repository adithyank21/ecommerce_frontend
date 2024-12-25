



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate(); // For navigation

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Hardcoded admin credentials
//     const adminUsername = "admin";
//     const adminPassword = "admin@123";

//     if (username === adminUsername && password === adminPassword) {
//       setIsLoggedIn(true);
//       setError("");
//       localStorage.setItem("isAdminLoggedIn", "true"); // Store login state
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isAdminLoggedIn");
//     navigate("/admin"); // Redirect back to login page
//   };

//   // Check login state from localStorage on page load
//   useEffect(() => {
//     if (localStorage.getItem("isAdminLoggedIn") === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);
//   const handleUpdateProducts = () => {
//         navigate("/admin/addproduct"); // Navigate to the add product page when clicking "Update Products"
//       };

//   const handleViewOrders = () => {
//     navigate("/admin/order"); // Navigate to the order page when clicking "View Orders"
//   };

//   const handleEditProducts = () => {
//     navigate("/admin/products"); // Navigate to the product list page
//   };

//   return (
//     <div className="container mt-5">
//       {!isLoggedIn ? (
//         <div>
//           <h2 className="text-center">Admin Login</h2>
//           <form onSubmit={handleLogin} className="mt-4">
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">
//               Login
//             </button>
//           </form>
//           {error && <p className="mt-3 text-danger text-center">{error}</p>}
//         </div>
//       ) : (
//         <div className="text-center">
//           <h2>Welcome, Admin!</h2>
//           <div className="mt-4">
//             <button
//               onClick={handleViewOrders}
//               className="btn btn-success mb-3 w-100"
//             >
//               View Orders
//             </button>
//             <button
//               onClick={handleUpdateProducts}
//               className="btn btn-primary w-100"
//             >
//               Update Products
//             </button>
//             <br/>
//             <br/>
//             <button
//               onClick={handleEditProducts}
//               className="btn btn-primary w-100"
//             >
//               Manage Products
//             </button>
//           </div>
//           <button onClick={handleLogout} className="btn btn-danger mt-3">
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminLogin;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/adminLogin.css"; // Assuming custom styles are added here

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // For navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminUsername = "admin";
    const adminPassword = "admin@123";

    if (username === adminUsername && password === adminPassword) {
      setIsLoggedIn(true);
      setError("");
      localStorage.setItem("isAdminLoggedIn", "true"); // Store login state
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin"); // Redirect back to login page
  };

  // Check login state from localStorage on page load
  useEffect(() => {
    if (localStorage.getItem("isAdminLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleUpdateProducts = () => {
    navigate("/admin/addproduct"); // Navigate to the add product page when clicking "Update Products"
  };

  const handleViewOrders = () => {
    navigate("/admin/order"); // Navigate to the order page when clicking "View Orders"
  };

  const handleEditProducts = () => {
    navigate("/admin/products"); // Navigate to the product list page
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        {!isLoggedIn ? (
          <div>
            <h2 className="text-center mb-4 text-primary">Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-pill"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Login
              </button>
            </form>
            {error && <p className="mt-3 text-danger text-center">{error}</p>}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-success">Welcome, Admin!</h2>
            <div className="mt-4">
              <button
                onClick={handleViewOrders}
                className="btn btn-outline-success mb-3 w-100 rounded-pill"
              >
                View Orders
              </button>
              <button
                onClick={handleUpdateProducts}
                className="btn btn-outline-primary mb-3 w-100 rounded-pill"
              >
                Update Products
              </button>
              <button
                onClick={handleEditProducts}
                className="btn btn-outline-secondary w-100 rounded-pill"
              >
                Manage Products
              </button>
            </div>
            <button onClick={handleLogout} className="btn btn-danger mt-4 rounded-pill">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;

