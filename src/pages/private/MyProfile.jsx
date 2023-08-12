import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Components
import Layout from "@components/Layout";
import UpdateProfileModal from "@components/UpdateProfileModal";
// Hooks
import useAuth from "../../hooks/useAuth";
import { PrivateRoutes } from "@routes/routes";

const MyProfile = () => {
  const navigate = useNavigate();
  const { auth, reauth } = useAuth();
  const { displayName, email } = auth;

  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const typeModal = (type, title) => {
    setDataModal({ type: type, title: title });
  };

  const handleUpdateNameClick = () => {
    typeModal("name", "Nombre");
    setShowModal(true);
  };

  const handleUpdateEmailClick = () => {
    if (reauth) {
      navigate(PrivateRoutes.REAUTHENTICATION);
    } else {
      typeModal("email", "Correo electronico");
      setShowModal(true);
    }
  };

  const handleUpdatePasswordClick = () => {
    if (reauth) {
      navigate(PrivateRoutes.REAUTHENTICATION);
    } else {
      typeModal("password", "Contraseña");
      setShowModal(true);
    }
  };

  const renderProfileField = (handleUpdate, label, value) => {
    return (
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 cursor-pointer" onClick={handleUpdate}>
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 flex justify-between text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {value}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="rgb(17, 24, 39)">
            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="rgb(17, 24, 39)"></path>
          </svg>
        </dd>
      </div>
    );
  };

  return (
    <Layout>
      {showModal && <UpdateProfileModal showModal={showModal} setShowModal={setShowModal} dataModal={dataModal} />}
      <div className="py-12 md:py-24">
        <div className="bg-gray-300 w-4/5 lg:w-3/6 shadow rounded-lg mx-auto">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Informacion</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Desde este panel, tienes la habilidad de actualizar la información de tu cuenta.</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {renderProfileField(handleUpdateNameClick, "Nombres", displayName)}
              {renderProfileField(handleUpdateEmailClick, "Correo electronico", email)}
              {renderProfileField(handleUpdatePasswordClick, "Contraseña", "**********")}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProfile;
