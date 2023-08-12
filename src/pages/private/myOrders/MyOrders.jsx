import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Components
import Layout from "@components/Layout";
import Spinner from "@components/Spinner";
// Hooks
import useAuth from "../../../hooks/useAuth";
// Firebase
import { getOrders } from "@servicesFirestore";
import { PublicRoutes } from "@routes/routes";

const MyOrders = () => {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrdersPage = async () => {
      setIsLoading(true);
      try {
        if (auth.id_user) {
          const orders = await getOrders(auth.id_user);
          setOrders(orders);
        }
      } catch (error) {
        console.log("Error al obtener las ordenes:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getOrdersPage();
  }, [auth]);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : orders.length <= 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <p className="font-semibold text-2xl mb-3">¡Haz tu primera compra!</p>
          <p className="font-semibold text-xl mb-5">Aquí podrás ver tus compras y hacer el seguimiento de tus envíos.</p>
          <Link to={PublicRoutes.HOME} className="text-gray-600 font-semibold border-b border-gray-600 hover:text-gray-400 hover:border-gray-400 transition-colors">
            Ver ofertas del día
          </Link>
        </div>
      ) : (
        <div className="pt-5 pb-10">
          <h2 className="text-center mb-4 font-bold lg:text-3xl text-gray-800">LISTA DE ORDENES</h2>
          {orders.map((item) => (
            <div key={item.id} className="w-full px-3 py-2 md:w-8/12 lg:w-1/2 mx-auto">
              <div className="flex border px-3 py-3">
                <div className="flex flex-col  w-3/5 sm:w-1/2 sm:ml-5">
                  <p className="font-semibold">Numero de orden</p>
                  <span className="text-sm">{item.id}</span>
                </div>
                <div className="flex flex-col w-2/5 sm:w-1/2">
                  <p className="font-semibold">Total Amount</p>
                  <span className="font-semibold">S/{item.total}.00</span>
                </div>
              </div>
              <div className="flex flex-col w-full border px-3 py-5">
                {item.products.map((prod) => (
                  <div key={prod.id} className="flex ml-3 sm:ml-5">
                    <img src={prod.url} className="rounded-md w-28" />
                    <div className="flex flex-col sm:flex-row w-full">
                      <div className="flex flex-col justify-center ml-8 text-gray-800 font-semibold sm:w-3/5">
                        <p>{prod.name}</p>
                        <p>x{prod.quantity}</p>
                        <p>
                          Talla: <span>{prod.size}</span>
                        </p>
                        <p>S/{prod.price}</p>
                      </div>
                      <div className="w-full sm:w-2/5 flex items-center md:mr-10 mt-2 sm:mt-0">
                        <div className="mx-auto">
                          <Link to={`${PublicRoutes.PRODUCT}/${prod.id}`} className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-white text-sm block text-center">
                            Comprar de nuevo
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center pt-3 ml-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#27ae60" d="M22 1041.4c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z" transform="translate(0 -1028.4)"></path>
                    <path fill="#2ecc71" d="M22 1040.4c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z" transform="translate(0 -1028.4)"></path>
                    <path fill="#27ae60" d="M16 1037.4l-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 .125.1 8.125-8.1-2.125-2.1z" transform="translate(0 -1028.4)"></path>
                    <path fill="#ecf0f1" d="M16 1036.4l-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 .125.1 8.125-8.1-2.125-2.1z" transform="translate(0 -1028.4)"></path>
                  </svg>
                  <p className="ml-2">
                    Fecha de compra: <span className="font-semibold">{item.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default MyOrders;
