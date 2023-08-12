import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contexts
import { AuthProvider } from "./context/AuthProvider";
import { CartProvider } from "./context/CartProvider";

const Spinner = lazy(() => import("@components/Spinner"));
const Index = lazy(() => import("@publicPages/index/Index"));
const ProductDetail = lazy(() => import("@publicPages/productDetail/ProductDetail"));
const Categories = lazy(() => import("@publicPages/categories/Categories"));
const Login = lazy(() => import("@publicPages/login/Login"));
const SignUp = lazy(() => import("@publicPages/signUp/SignUp"));
const PasswordRecoverySearch = lazy(() => import("@publicPages/passwordRecovery/PasswordRecoverySearch"));
const CartItems = lazy(() => import("@publicPages/cartItems/CartItems"));
const Error404 = lazy(() => import("@publicPages/notFound/Error404"));

const PrivateRoute = lazy(() => import("./guards/PrivateRoute"));
const MyProfile = lazy(() => import("@privatePages/myProfile/MyProfile"));
const Checkout = lazy(() => import("@privatePages/checkout/Checkout"));
const MyOrders = lazy(() => import("@privatePages/myOrders/MyOrders"));
const ReauthenticateUser = lazy(() => import("@privatePages/reauthenticateUser/ReauthenticateUser"));

const AuthRedirect = lazy(() => import("./guards/AuthRedirect"));
const ConfirmEmail = lazy(() => import("@privatePages/confirmEmail/ConfirmEmail"));
const ResetPassword = lazy(() => import("@privatePages/resetPassword/ResetPassword"));


import { PublicRoutes, EmailRedirectsRoutes, PrivateRoutes } from "@routes/routes";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Suspense fallback={<Spinner/>}>
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
        </Suspense>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
