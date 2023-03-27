import React, { useEffect, useState } from "react";

const Alert = ({ alert, setAlert }) => {
  const [timerId, setTimerId] = useState(null);

  const errorMessages = {
    "auth/wrong-password": "Contraseña incorrecta",
    "auth/user-not-found": "Correo electronico no encontrado",
    "auth/too-many-requests": "Demasiadas solicitudes",
    "auth/email-already-in-use": "El email ya esta siendo utilizado",
    "auth/requires-recent-login": "Vuelva a iniciar sesion para cambiar su contraseña",
    "auth/invalid-action-code": "Este enlace ya no es valido",
    "auth/user-mismatch": "El usuario que intenta autenticarse no coincide con el usuario que ha iniciado la sesión",
  };

  const getMessage = (msg) => errorMessages[msg] || msg;

  useEffect(() => {
    let id;
    if (alert.msg) {
      id = setTimeout(() => {
        setAlert({});
      }, 5000);
      setTimerId(id);
    }

    return () => clearTimeout(timerId);
  }, [alert]);

  return (
    <div className={`${alert.error ? "bg-red-600" : "bg-green-600"} flex rounded-lg p-4 mb-4 text-sm text-white mt-6`} role="alert">
      <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"></path>
      </svg>
      <div>
        <span className="font-medium">{alert.error && "Un momento!"}</span> {getMessage(alert.msg)}.
      </div>
    </div>
  );
};

export default Alert;
