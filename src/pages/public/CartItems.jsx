import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Components
import Layout from "@components/Layout";
import EmptyCart from "@components/EmptyCart";
// Hooks
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { PublicRoutes } from "@routes/routes";

const CartItems = () => {
  const { auth } = useAuth();
  const { cart, totalAmount, subtotalAmount, updateQuantity, deleteProduct } = useCart();

  useEffect(() => {
    subtotalAmount();
    totalAmount();
  }, [cart]);

  const getStockProduct = (product, nameSize) => {
    const item = product.stock?.find((item) => item.name === nameSize);
    return item.stock;
  };

  return (
    <Layout>
      {cart.length > 0 ? (
        <div className="min-h-screen w-full sm:w-5/6 py-5 mx-auto">
          <div className="px-5">
            <div className="mb-2">
              <Link to={PublicRoutes.HOME} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                  <path fill="#fff" d="M0 0H24V24H0z"></path>
                  <path
                    fill="rgb(17, 24, 39)"
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm9.707-2.293a1 1 0 00-1.414-1.414L7.38 11.206l-.044.046a.998.998 0 000 1.496l.044.046 2.913 2.913a1 1 0 001.414-1.414L10.414 13H16a1 1 0 100-2h-5.586l1.293-1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="hover:border-b-2 border-gray-700 ml-2 text-sm font-medium text-gray-500">Inicio</span>
              </Link>
            </div>
            <div className="mb-12 mt-5 ml-10">
              <h1 className="font-bold text-gray-800 lg:text-3xl">MIS PRODUCTOS</h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row px-6 sm:p-0">
            <div className="w-full md:h-3/4 md:mr-8">
              {cart.map((item) => (
                <div key={item.id} className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                      <img src={item.url} alt="name" />
                    </div>
                    <div className="flex flex-grow flex-col pl-3">
                      <h6 className="font-semibold uppercase text-gray-600">{item.name}</h6>
                      <div className="flex flex-col text-gray-500 text-sm">
                        <p> x {item.quantity}</p>
                        <p>Precio : S/{item.price}</p>
                        <p>Talla : {item.size}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex items-center mb-1">
                        <button
                          className={`${
                            item.quantity === 1 ? "cursor-not-allowed bg-gray-50 hover:bg-gray-50 text-gray-300" : "cursor-pointer bg-gray-100 border-solid border"
                          } border-solid border rounded-l  py-1 px-3 transition-colors`}
                          onClick={() => updateQuantity(item.id, false)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="text-black text-center w-10">{item.quantity}</span>
                        <button
                          className={`${
                            item.quantity === getStockProduct(item, item.size) ? "cursor-not-allowed bg-gray-50 hover:bg-gray-50 text-gray-300" : "cursor-pointer bg-gray-100 border-solid border"
                          } border-solid border rounded-l  py-1 px-3 transition-colors`}
                          onClick={() => updateQuantity(item.id, true)}
                          disabled={item.quantity === getStockProduct(item, item.size)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-gray-600 text-lg">S/ {item.subtotal}.00</span>
                        <button onClick={() => deleteProduct(item.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2">
              <div className="mt-6 h-full rounded-lg border bg-white p-5 shadow-md md:mt-0">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">S/ {subtotalAmount()}.00</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Envio</p>
                  <p className="text-gray-700">S/ 14.00</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="text-center">
                    <p className="mb-1 text-lg font-bold">S/ {totalAmount()}.00</p>
                    <p className="text-sm text-gray-700">Incluye envio</p>
                  </div>
                </div>
                <Link
                  to={auth.displayName ? "/checkout" : "/login"}
                  className="block text-center mt-6 w-full bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-3 font-semibold cursor-pointer transition-colors text-white"
                >
                  PAGAR AHORA
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Layout>
  );
};

export default CartItems;
