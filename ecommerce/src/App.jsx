

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/headerNav"; // Importing Header component
import Home from "./components/home"; // Importing Home page
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contactPage";
import PrivacyPolicyPage from "./pages/privacyPolicypage";
import OrderPage from "./pages/orderPage";
import Login from './pages/loginPage';
import Register from './pages/registrationPage';
import './App.css';
import Footer from "./components/footer";
import AddProduct from "./components/admin/addProduct";
import OrderDetails from "./components/admin/OrderDetails";
import AdminLogin from "./components/admin/adminLogin";
import EditProduct from "./components/admin/editProduct";
import ProductList from "./components/admin/productList";
import PrivateRoute from "./components/admin/privateRoute";

function App() {
  // Determine whether or not to render the Header based on the route
  const showHeader = !window.location.pathname.startsWith('/admin');

  return (
    <div>
      {/* Conditionally render Header */}
      {showHeader && <Header />} {/* Render Header only if not an admin page */}

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order" element={<OrderPage />} />

        {/* Protect these routes with PrivateRoute */}
        <Route
          path="/admin/order"
          element={<PrivateRoute element={<OrderDetails />} />}
        />
        <Route
          path="/admin/addproduct"
          element={<PrivateRoute element={<AddProduct />} />}
        />
         <Route
          path="/admin/editproduct/:id"
          element={<PrivateRoute element={<EditProduct />} />}
        />
         <Route
          path="/admin/products"
          element={<PrivateRoute element={<ProductList />} />}
        />

        {/* Admin login route */}
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
