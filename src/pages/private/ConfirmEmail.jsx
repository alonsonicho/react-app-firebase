import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// Components
import Layout from "@components/Layout";
import Alert from "@components/Alert";
// Firebase
import { confirmEmail } from "@servicesAuth";

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const [alert, setAlert] = useState({});
  const [actionCode, setActionCode] = useState("");

  useEffect(() => {
    const confirm = async () => {
      const oobCode = searchParams.get("oobCode");
      setActionCode(oobCode);
    };

    confirm();
  }, []);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        if (actionCode) {
          await confirmEmail(actionCode);
        }
      } catch (error) {
        console.log(error);
        setAlert({ msg: error.code, error: true });
      }
    };
    verifyEmail();
  }, [actionCode]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-96">
        <div className="w-1/4">
          <div>
            {alert.msg ? (
              <Alert alert={alert} setAlert={setAlert} />
            ) : (
              <div className="text-center">
                <p className="text-2xl font-semibold">El correo electronico ha sido verificado, ya puede utilizar su cuenta.</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-12">
          <Link to="/login" className="w-full px-12 py-4 tracking-wide text-white transition-colors duration-200 bg-gray-800 rounded-md hover:bg-gray-700 font-bold cursor-pointer">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ConfirmEmail;
