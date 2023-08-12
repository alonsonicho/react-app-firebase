import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Components
import Alert from "@components/Alert";
import Layout from "@components/Layout";
// Hooks
import useAuth from "../../hooks/useAuth";
// Firebase
import { signIn } from "../../firebase/Firestore";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }
    await signInUser();
  };

  const signInUser = async () => {
    try {
      const result = await signIn(email, password);
      const { emailVerified } = result.user;

      if (!emailVerified) {
        setAlert({
          msg: "Email no verificado",
          error: true,
        });
        return;
      }

      // Saved AccessToken
      const { accessToken } = result.user;
      localStorage.setItem("token", accessToken);
      setToken(accessToken);

      navigate("/");
    } catch (error) {
      setAlert({ msg: error.code, error: true });
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-28 md:py-36">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-800">Inicia Sesión</h2>
                <p className="mt-3 text-gray-800 font-semibold">Inicia sesión para acceder a tu cuenta</p>
              </div>

              {alert.msg && <Alert alert={alert} setAlert={setAlert} />}

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-800 font-bold">
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm text-gray-800 font-bold">
                        Contraseña
                      </label>
                      <Link to="/passwordRecoverySearch" className="text-sm font-semibold text-gray-400 focus:text-gray-500 hover:text-gray-500 hover:underline underline-offset-4">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="contraseña"
                      className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                    />
                  </div>

                  <div className="mt-6">
                    <input
                      type="submit"
                      value="Iniciar Sesión"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-700 font-bold cursor-pointer"
                    />
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-800 font-semibold">
                  ¿Aún no tienes una cuenta?{" "}
                  <Link to="/signUp" className="text-gray-600 border-b border-gray-600 focus:outline-none">
                    Registrate
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
