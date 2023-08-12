import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

import Index from "@publicPages/Index";
import ProductDetail from "@publicPages/ProductDetail";
import Categories from "@publicPages/Categories";
import Login from "@publicPages/Login";
import SignUp from "@publicPages/SignUp";
import PasswordRecoverySearch from "@publicPages/PasswordRecoverySearch";
import CartItems from "@publicPages/CartItems";
import Error404 from "@publicPages/Error404";
// Private Routes
import PrivateRoute from "./components/PrivateRoute";
import MyProfile from "@privatePages/MyProfile";
import Checkout from "@privatePages/Checkout";
import MyOrders from "@privatePages/MyOrders";
import ReauthenticateUser from "@privatePages/ReauthenticateUser";
// Email redirects
import AuthRedirect from "./components/AuthRedirect";
import ConfirmEmail from "@privatePages/ConfirmEmail";
import ResetPassword from "@privatePages/ResetPassword";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
          <ToastContainer transition={Slide} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/category/:nameCategory" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/passwordRecoverySearch" element={<PasswordRecoverySearch />} />
            <Route path="/cart" element={<CartItems />} />
            <Route path="*" element={<Error404 />} />
            {/* Email redirects */}
            <Route path="/auth" element={<AuthRedirect />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* Privates routes */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="profile" element={<MyProfile />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="orders" element={<MyOrders />} />
              <Route path="reauth" element={<ReauthenticateUser />} />
            </Route>
          </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
