import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Components
import Layout from "@components/Layout";
import Alert from "@components/Alert";
import EmptyCart from "@components/EmptyCart";
// Hooks
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
// Helpers
import { formatDate } from "../../helpers/helpers";
// Firebase
import { sendOrder } from "../../firebase/Firestore";

const Checkout = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart, setCart, totalAmount, subtotalAmount } = useCart();

  const [alert, setAlert] = useState({});
  const [payment, setPayment] = useState({
    address: "",
    nameOnCard: "",
    numberOnCard: "",
    expirationDay: "",
    expirationYear: "",
    CVV: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(payment).some((value) => value === "")) {
      setAlert({ msg: "Completar todos los campos", error: true });
      return;
    }

    const order = {
      id_user: auth.id_user,
      userEmail: auth.uid,
      userName: auth.displayName,
      products: cart,
      total: totalAmount(),
      date: formatDate(),
    };

    try {
      await sendOrder(order);
    } catch (error) {
      console.log(error);
    }

    setCart([]);
    localStorage.removeItem("Cart");
    setPayment({
      address: "",
      nameOnCard: "",
      numberOnCard: "",
      expirationDay: "",
      expirationYear: "",
      CVV: "",
    });
    navigate("/");
  };

  return (
    <Layout>
      {cart.length > 0 ? (
        <div className="min-h-screen w-full sm:w-4/5 py-5 mx-auto">
          <div className="px-5">
            <div className="mb-2">
              <Link to="/cart" className="flex items-center text-gray-500 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                  <path fill="#fff" d="M0 0H24V24H0z"></path>
                  <path
                    fill="rgb(17, 24, 39)"
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm9.707-2.293a1 1 0 00-1.414-1.414L7.38 11.206l-.044.046a.998.998 0 000 1.496l.044.046 2.913 2.913a1 1 0 001.414-1.414L10.414 13H16a1 1 0 100-2h-5.586l1.293-1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="hover:border-b-2 border-gray-700 ml-2 text-sm font-medium text-gray-500">Regresar</span>
              </Link>
            </div>
            <div className="mb-5 mt-5 ml-10">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full border-t border-b border-gray-200 px-5 py-10 text-gray-800">
              <div className="w-full">
                <div className="md:flex items-start">
                  <div className="px-3 md:w-7/12 lg:pr-10">
                    {cart.map((item) => (
                      <div key={item.id} className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        <div className="w-full flex items-center">
                          <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                            <img src={item.url} alt="name" />
                          </div>
                          <div className="flex-grow pl-3">
                            <h6 className="font-semibold uppercase text-gray-600">{item.name}</h6>
                            <p className="text-gray-500">
                              x {item.quantity}
                              <span className="ml-5">Precio c/u: {item.price}</span>
                            </p>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-600 text-xl">S/ {item.subtotal}</span>
                            <span className="font-semibold text-gray-600 text-sm">.00</span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                      <div className="w-full flex mb-3 items-center">
                        <div className="flex-grow">
                          <span className="text-gray-600">Subtotal</span>
                        </div>
                        <div className="pl-3">
                          <span className="font-semibold">S/ {subtotalAmount()}.00</span>
                        </div>
                      </div>
                      <div className="w-full flex items-center">
                        <div className="flex-grow">
                          <span className="text-gray-600">Envio</span>
                        </div>
                        <div className="pl-3">
                          <span className="font-semibold">S/ 14.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                      <div className="w-full flex items-center">
                        <div className="flex-grow">
                          <span className="text-gray-600">Total</span>
                        </div>
                        <div className="pl-3">
                          <span className="font-semibold">S/ {totalAmount()}.00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-3 md:w-5/12">
                    {alert.msg && <Alert alert={alert} setAlert={setAlert} />}
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                      <div className="w-full flex mb-3 items-center">
                        <div className="w-auto">
                          <span className="text-gray-600 font-semibold">Nombres :</span>
                        </div>
                        <div className="flex-grow ml-3">
                          <span>{auth.displayName}</span>
                        </div>
                      </div>
                      <div className="w-full flex flex-col">
                        <span className="text-gray-600 font-semibold mb-3">Direccion de envio :</span>
                        <input
                          className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-gray-600 transition-colors"
                          type="text"
                          placeholder="Ejemplo : Av 28 de Julio N°154"
                          name="address"
                          onChange={(e) => setPayment({ ...payment, [e.target.name]: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                      <div className="w-full p-3 border-b border-gray-200">
                        <div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-3 ml-1">Nombre del propietario</label>
                            <div>
                              <input
                                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-gray-600 transition-colors"
                                placeholder="John Smith"
                                type="text"
                                value={payment.nameOnCard}
                                name="nameOnCard"
                                onChange={(e) => setPayment({ ...payment, [e.target.name]: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-3 ml-1">Numero de tarjeta</label>
                            <div>
                              <input
                                className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-gray-600 transition-colors"
                                placeholder="0000 0000 0000 0000"
                                type="text"
                                value={payment.numberOnCard}
                                name="numberOnCard"
                                onChange={(e) => setPayment({ ...payment, [e.target.name]: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="mb-3 -mx-2 flex items-end">
                            <div className="px-1 w-1/2">
                              <label className="text-gray-600 font-semibold text-sm mb-3 ml-1">Fecha de expiracion</label>
                              <div>
                                <select
                                  className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-gray-600 transition-colors cursor-pointer"
                                  name="expirationDay"
                                  value={payment.expirationDay}
                                  onChange={(e) => setPayment({ ...payment, [e.target.name]: e.target.value })}
                                >
                                  <option value="01">01 - Enero</option>
                                  <option value="02">02 - Febrero</option>
                                  <option value="03">03 - Marzo</option>
                                  <option value="04">04 - Abril</option>
                                  <option value="05">05 - Mayo</option>
                                  <option value="06">06 - Junio</option>
                                  <option value="07">07 - Julio</option>
                                  <option value="08">08 - Agosto</option>
                                  <option value="09">09 - Septiembre</option>
                                  <option value="10">10 - Octubre</option>
                                  <option value="11">11 - Noviembre</option>
                                  <option value="12">12 - Diciembre</option>
                                </select>
                              </div>
                            </div>
                            <div className="px-1 w-1/4">
                              <select
                                className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-gray-500 transition-colors cursor-pointer"
                                name="expirationYear"
                                value={payment.expirationYear}
                                onChange={(e) => setPayment({ ...payment, [e.target.name]: e.target.value })}
                              >
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                              </select>
                            </div>
                            <div className="px-1 w-1/4">
                              <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">CVV</label>
                              <div>
                                <input
                                  className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-gray-600 transition-colors"
                                  placeholder="000"
                                  type="text"
                                  name="CVV"
                                  value={payment.CVV}
                                  onChange={(e) => setPayment({ ...payment, [e.target.name]: e.target.value })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="PAGAR AHORA"
                        className="block w-full max-w-xs mx-auto bg-gray-800 hover:bg-gray-700 focus:bg-gray-800 text-white rounded-lg px-3 py-3 font-semibold cursor-pointer transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Layout>
  );
};

export default Checkout;
