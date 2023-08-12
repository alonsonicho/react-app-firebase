import React, { useState, createContext, useEffect } from "react";
// Firebase
import { getUserActive } from "@servicesAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
  const [reauth, setReauth] = useState(true); // Save status if reauthentication is needed

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        const user = await getUserActive();
        if (user) {
          setAuth(user);
        }
      }
    };
    fetchUser();
  }, [auth, token]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        setToken,
        reauth,
        setReauth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
