import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Components
import Alert from "./Alert";
// Hooks
import useAuth from "../hooks/useAuth";
// Firebase
import { updateDisplayNameProfile, updateEmailProfile, updatePasswordProfile, signOff } from "@servicesAuth";

const UpdateProfileModal = ({ setShowModal, dataModal }) => {
  const navigate = useNavigate();
  const { auth, setAuth, setToken, reauth, setReauth } = useAuth();

  const [updateDataUser, setUpdateDataUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [alert, setAlert] = useState({});

  useEffect(() => {
    // Initialize input values
    const getValues = () => {
      if (dataModal.type === "name") {
        setUpdateDataUser(auth.displayName);
      }
      if (dataModal.type === "email") {
        setUpdateDataUser(auth.email);
      }
    };
    getValues();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updateDataUser === "") {
      setAlert({ msg: "Todos los campos deben completarse", error: true });
      return;
    }

    try {
      // Change name
      const handleNameChange = async () => {
        await updateDisplayNameProfile(updateDataUser);
        setShowModal(false);
        toast.success("Su nombre ha sido actualizado");
      };

      // Change email
      const handleEmailChange = async () => {
        await updateEmailProfile(updateDataUser);
        await signOff()
        setAuth({});
        setToken("");
        window.localStorage.removeItem("token");
        setShowModal(false);
        setReauth(true);
        navigate("/login");
      };

      // Change password
      const handlePasswordChange = async () => {
        if (!samePasswords()) {
          setAlert({ msg: "Las contraseñas deben ser iguales", error: true });
          return;
        }
        if (reauth === false) {
          await updatePasswordProfile(newPassword);
          setShowModal(false);
          setReauth(true);
          toast.success("Su contraseña ha sido actualizada");
        }
      };

      const handleAction = {
        name: handleNameChange,
        email: handleEmailChange,
        password: handlePasswordChange,
      };

      handleAction[dataModal.type]();
    } catch (error) {
      setAlert({ msg: error.code, error: true });
    }
  };

  // Verify passwords
  const samePasswords = () => {
    return updateDataUser === newPassword;
  };

  return (
    <div className="fixed flex items-center justify-center inset-0 z-10 overflow-y-auto">
      <div className="flex text-center sm:block sm:p-0 md:w-full">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowModal(false)}></div>
        </div>
        <form
          className="inline-block bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium uppercase text-gray-900">Modificar {dataModal.title}</h3>
              {alert.msg && (
                <div className="px-10">
                  <Alert alert={alert} setAlert={setAlert} />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-5 sm:mt-6 px-10">
            <div className="w-full">
              <label>{dataModal.type === "password" ? "Nueva Contraseña" : dataModal.title}</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                type={dataModal.type === "name" ? "text" : dataModal.type === "email" ? "email" : "password"}
                value={updateDataUser}
                onChange={(e) => setUpdateDataUser(e.target.value)}
              />
            </div>
          </div>
          {dataModal.type === "password" && (
            <div className="flex flex-col sm:flex-row mt-5 sm:mt-6 px-10">
              <div className="w-full">
                <label>Repetir {dataModal.title}</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-800 rounded-md border border-gray-300 focus:border-gray-800"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center sm:flex-row mt-5 sm:mt-6 px-10">
            <button type="submit" className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-gray-800 font-medium text-white hover:bg-gray-700  sm:text-sm sm:mr-2 mb-3 transition-colors">
              Guardar
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-red-600 font-medium text-white hover:bg-red-500  sm:text-sm sm:mr-2 mb-3 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
