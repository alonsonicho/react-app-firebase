import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../firebase/Firestore";
// Components
import Layout from "../components/Layout";
import Alert from "../components/Alert";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, email, password].includes("")) {
      setAlert({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    try {
      await createUser(name, email, password);
      setName("");
      setEmail("");
      setPassword("");
      setAlert({ msg: "Cuenta creada correctamente, revisa tu correo y confirma tu cuenta", error: false });
    } catch (error) {
      setAlert({ msg: error.code, error: true });
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-800">Registrate y disfruta!</h2>
                <p className="mt-3 text-gray-800 font-semibold">Experiencias y productos personalizados y muchas sorpresas más!</p>
              </div>

              {alert.msg && <Alert alert={alert} setAlert={setAlert} />}

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-800 font-bold">
                      Nombres
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Escribe tu nombre"
                      className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                    />
                  </div>
                  <div className="mt-8">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-800 font-bold">
                      Correo electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Correo electronico"
                      className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                    />
                  </div>
                  <div className="mt-8">
                    <label htmlFor="password" className="text-sm text-gray-800 font-bold">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña"
                      className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      type="submit"
                      value="Registrarme"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-700 font-bold cursor-pointer"
                    />
                  </div>
                </form>
                <p className="mt-6 text-sm text-center text-gray-800 font-semibold">
                  ¿Ya tienes una cuenta?{" "}
                  <Link to="/login" className="text-gray-600 border-b border-gray-600 focus:outline-none">
                    Inicia Sesión
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

export default SignUp;
