import React, { useState } from "react";
// Components
import Layout from "../components/Layout";
import Alert from "../components/Alert";
// Firebase
import { resetPassword } from "../firebase/Firestore";

const PasswordRecoverySearch = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(email);
      setEmail("");
      setAlert({ msg: "Se envio un correo electronico a tu bandeja de entrada para restablecer la contraseña", error: false });
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
                <h2 className="text-4xl font-bold text-center text-gray-800">¿Olvidaste tu contraseña?</h2>
                <p className="mt-3 text-gray-800 font-semibold">Ingresa tu correo electrónico y te enviaremos un email con instrucciones para recuperar tu cuenta.</p>
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
                    <input
                      type="submit"
                      value="Enviar"
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

export default PasswordRecoverySearch;
