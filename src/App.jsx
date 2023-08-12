import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

import Index from "@publicPages/index/Index";
import ProductDetail from "@publicPages/productDetail/ProductDetail";
import Categories from "@publicPages/categories/Categories";
import Login from "@publicPages/login/Login";
import SignUp from "@publicPages/signUp/SignUp";
import PasswordRecoverySearch from "@publicPages/passwordRecovery/PasswordRecoverySearch";
import CartItems from "@publicPages/cartItems/CartItems";
import Error404 from "@publicPages/notFound/Error404";
// Private Routes
import PrivateRoute from "./components/PrivateRoute";
import MyProfile from "@privatePages/myProfile/MyProfile";
import Checkout from "@privatePages/checkout/Checkout";
import MyOrders from "@privatePages/myOrders/MyOrders";
import ReauthenticateUser from "@privatePages/reauthenticateUser/ReauthenticateUser";
// Email redirects
import AuthRedirect from "./components/AuthRedirect";
import ConfirmEmail from "@privatePages/confirmEmail/ConfirmEmail";
import ResetPassword from "@privatePages/resetPassword/ResetPassword";

import { PublicRoutes, EmailRedirectsRoutes, PrivateRoutes } from "@routes/routes";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
          <ToastContainer transition={Slide} />
          <Routes>
            <Route path={PublicRoutes.HOME} element={<Index />} />
            <Route path={PublicRoutes.PRODUCT_DETAIL} element={<ProductDetail />} />
            <Route path={PublicRoutes.CATEGORIES} element={<Categories />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.SIGN_UP} element={<SignUp />} />
            <Route path={PublicRoutes.PASSWORD_RECOVERY_SEARCH} element={<PasswordRecoverySearch />} />
            <Route path={PublicRoutes.CART_ITEMS} element={<CartItems />} />
            <Route path={PublicRoutes.NOT_FOUND} element={<Error404 />} />
            {/* Email redirects */}
            <Route path={EmailRedirectsRoutes.AUTH_REDIRECT} element={<AuthRedirect />} />
            <Route path={EmailRedirectsRoutes.CONFIRM_EMAIL} element={<ConfirmEmail />} />
            <Route path={EmailRedirectsRoutes.RESET_PASSWORD} element={<ResetPassword />} />
            {/* Privates routes */}
            <Route element={<PrivateRoute />}>
              <Route path={PrivateRoutes.PROFILE} element={<MyProfile />} />
              <Route path={PrivateRoutes.CHECKOUT} element={<Checkout />} />
              <Route path={PrivateRoutes.ORDERS} element={<MyOrders />} />
              <Route path={PrivateRoutes.REAUTHENTICATION} element={<ReauthenticateUser />} />
            </Route>
          </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
