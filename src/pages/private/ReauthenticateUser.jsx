import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import Alert from "@components/Alert";
import Layout from "@components/Layout";
// Hooks
import useAuth from "../../hooks/useAuth";
// Firebase functions
import { reauthenticateUser } from "../../firebase/Firestore"; // Reauthenticate - Change password / Change email

const ReauthenticateUser = () => {
  const navigate = useNavigate();
  const { setReauth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }
    try {
      const isAuthenticated = await reauthenticateUserActive(email, password);
      if (isAuthenticated) {
        setReauth(false);
        navigate("/profile");
      }
    } catch (error) {
      setAlert({ msg: error.code, error: true });
    }
  };

  const reauthenticateUserActive = async (authEmail, authPassword) => {
    return await reauthenticateUser(authEmail, authPassword);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-24 md:py-36">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-800">Inicia Sesión</h2>
                <p className="mt-3 text-gray-800 font-semibold">Verifica que esta cuenta te pertenece antes de efectuar los cambios</p>
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
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingrese su contraseña"
                      className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      type="submit"
                      value="Verificar"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-700 font-bold cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReauthenticateUser;
