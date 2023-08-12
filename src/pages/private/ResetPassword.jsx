import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// Components
import Layout from "@components/Layout";
import Alert from "@components/Alert";
// Firebase
import { confirmPassword } from "@servicesAuth";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const oobCode = searchParams.get("oobCode");
    await handleConfirmPassword(oobCode, password);
  };

  const handleConfirmPassword = async (code, new_password) => {
    try {
      await confirmPassword(code, new_password);
      setAlert({ msg: "Contraseña cambiada satisfactoriamente", error: false });
      setPassword("");
      setTimeout(() => navigate("/login"), 9000);
    } catch (error) {
      setAlert({ msg: error.code, error: true });
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-36">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-800">Cambiar la contraseña</h2>
                <p className="mt-3 text-gray-800 font-semibold">Ingresa tu nueva contraseña</p>
              </div>

              {alert.msg && <Alert alert={alert} setAlert={setAlert} />}

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-800 font-bold">
                      Nueva contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingresa tu nueva contraseña"
                      className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border-2 border-gray-300 focus:border-gray-800 focus:ring-gray-800 focus:outline-none focus:ring-1 focus:ring-opacity-80"
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      type="submit"
                      value="Guardar"
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

export default ResetPassword;
