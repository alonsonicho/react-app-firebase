import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PasswordRecoverySearch from "./pages/PasswordRecoverySearch";
import CartItems from "./pages/CartItems";
import Error404 from "./pages/Error404";
// Private Routes
import PrivateRoute from "./components/PrivateRoute";
import MyProfile from "./pages/MyProfile";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import ReauthenticateUser from "./pages/reauthenticateUser";
// Email redirects
import AuthRedirect from "./components/AuthRedirect";
import ConfirmEmail from "./pages/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
