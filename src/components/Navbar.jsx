import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOff } from "@servicesAuth";
import useAuth from "../hooks/useAuth";
import { PrivateRoutes, PublicRoutes } from "@routes/routes";

const Navbar = () => {
  const { auth, setAuth, setToken, setReauth } = useAuth();
  const navigate = useNavigate();

  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [show]);

  const closeSession = async () => {
    try {
      await signOff();
      setAuth({});
      setReauth(true);
      setToken("");
      window.localStorage.removeItem("token");
      navigate(PublicRoutes.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header>
      <div className="bg-gray-100 h-full w-full border-b z-30">
        {/* Code block starts */}
        <nav className="shadow xl:block hidden">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" version="1" viewBox="0 0 2757 1835">
                    <path
                      d="M10 9175V0l13778 2 13777 3v18340l-13777 3-13778 2V9175zm10365 4665c87-13 166-50 206-99 17-20 577-1060 1244-2311 1111-2086 1214-2275 1239-2278l26-3v4526l24 52c31 67 81 100 168 114 39 6 273 9 594 7l530-3 59-30c49-25 63-39 84-80l26-49 3-1508 2-1507-1452-2515c-799-1383-1453-2514-1455-2512-2 1 178 423 398 936 327 761 400 938 393 956-5 13-407 764-894 1668-770 1433-888 1646-907 1646h-23l-2-2257c-3-2151-4-2260-21-2298-25-55-62-92-116-112-42-16-94-18-606-18-431 0-570 3-603 13-56 17-117 78-134 134-20 65-19 7335 0 7391 27 76 85 122 171 137 69 11 964 11 1046 0zm7920-1673c55-25 92-62 112-116 17-44 18-231 18-3716V4665l-22-41c-12-23-36-53-52-67-62-52-63-52-681-52-628 0-620-1-687 58-73 64-67-62-73 1579l-5 1478-28 27-27 28-1068 3c-763 2-1075-1-1094-9-15-6-35-20-45-31-17-19-18-86-23-1492-5-1390-6-1473-23-1511-25-55-62-92-116-112-42-16-95-18-626-18-570 0-581 0-626 21-25 12-58 34-73 50-58 63-56-2-56 1556v1429l1221 2117c672 1164 1226 2122 1231 2127 14 15 22 35-471-1114l-461-1073v-550l34-34 34-34h2152l32 29 33 29 5 1484c5 1599 2 1512 58 1571 37 40 78 59 142 68 30 4 300 6 600 5 501-1 548-3 585-19z"
                      transform="matrix(.1 0 0 -.1 0 1835)"
                    ></path>
                  </svg>
                  <h2 className="hidden sm:block lg:text-2xl text-gray-800 font-bold leading-normal pl-3">Next Hins</h2>
                </div>
              </div>
              <div className="flex">
                <div className="md:mr-6 xl:mr-16">
                  <ul className="flex">
                    <li>
                      <Link to={PublicRoutes.HOME} className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none transition duration-150 ease-in-out">
                        <span className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                        </span>
                        Colecciones
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none transition duration-150 ease-in-out"
                        onClick={() => setShowCategories(!showCategories)}
                      >
                        <span className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-puzzle"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                        </span>
                        Categorias
                        <div className="ml-2 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </Link>
                      {showCategories && (
                        <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute w-40 z-30 mt-2">
                          <div className="bg-white rounded w-full relative z-10 py-1">
                            <ul onMouseLeave={() => setShowCategories(false)}>
                              <li
                                className="relative cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                                onClick={() => setShowCategories(false)}
                              >
                                <Link to={`${PublicRoutes.CATEGORIE}/poleras`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                  <span className="flex-1">Poleras</span>{" "}
                                </Link>
                              </li>
                              <li
                                className="relative cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                                onClick={() => setShowCategories(false)}
                              >
                                <Link to={`${PublicRoutes.CATEGORIE}/pantalones`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                  <span className="flex-1">Pantalones</span>{" "}
                                </Link>
                              </li>
                              <li
                                className="relative cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                                onClick={() => setShowCategories(false)}
                              >
                                <Link to={`${PublicRoutes.CATEGORIE}/gorras`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                  <span className="flex-1">Gorras</span>{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="hidden xl:flex items-center">
                  {/* BUTTON CART */}
                  <div className="relative md:mr-6 my-2">
                    <Link to={PublicRoutes.CART_ITEMS}>
                      <div className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">
                        <svg className="fill-stroke" width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M1 5.7998H25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div className="ml-6 relative">
                    <div className="flex items-center relative" onClick={() => setProfile(!profile)}>
                      {profile && (
                        <ul className="p-2 w-40 border border-gray-300 bg-white absolute rounded right-0 shadow top-0 mt-16">
                          {!auth.displayName && (
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <Link to={PublicRoutes.LOGIN} className="ml-2">
                                Iniciar Sesion
                              </Link>
                            </li>
                          )}
                          {auth.displayName && (
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <Link to={PrivateRoutes.PROFILE} className="ml-2">
                                Mi perfil
                              </Link>
                            </li>
                          )}
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-settings"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>
                            <Link to={PrivateRoutes.ORDERS} className="ml-2">
                              Mis pedidos
                            </Link>
                          </li>
                          {auth.displayName && (
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-settings"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <circle cx={12} cy={12} r={3} />
                              </svg>
                              <button onClick={closeSession}>
                                <span className="ml-2">Cerrar sesión</span>
                              </button>
                            </li>
                          )}
                        </ul>
                      )}
                      <div className="cursor-pointer flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 24 24">
                          <path fill="#fff" d="M0 0H24V24H0z"></path>
                          <path
                            fill="#323232"
                            fillRule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-6a4 4 0 100 8 4 4 0 000-8zm5.111 9.997c.758.488.721 1.552.031 2.132A7.968 7.968 0 0112 20a7.967 7.967 0 01-5.114-1.848c-.697-.58-.734-1.649.028-2.14.236-.153.494-.287.774-.402C8.815 15.145 10.254 15 12 15c1.755 0 3.202.136 4.331.595.283.115.542.25.78.402z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p className="text-gray-600 font-semibold ml-2">Mi cuenta</p>
                      </div>
                      <div className="ml-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav>
          {!show && (
            <div className={`${show ? "" : ""} bg-gray-100 px-6 py-2 w-full flex xl:hidden justify-between items-center top-0 z-40`}>
              <div className="flex items-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" version="1" viewBox="0 0 2757 1835">
                  <path
                    d="M10 9175V0l13778 2 13777 3v18340l-13777 3-13778 2V9175zm10365 4665c87-13 166-50 206-99 17-20 577-1060 1244-2311 1111-2086 1214-2275 1239-2278l26-3v4526l24 52c31 67 81 100 168 114 39 6 273 9 594 7l530-3 59-30c49-25 63-39 84-80l26-49 3-1508 2-1507-1452-2515c-799-1383-1453-2514-1455-2512-2 1 178 423 398 936 327 761 400 938 393 956-5 13-407 764-894 1668-770 1433-888 1646-907 1646h-23l-2-2257c-3-2151-4-2260-21-2298-25-55-62-92-116-112-42-16-94-18-606-18-431 0-570 3-603 13-56 17-117 78-134 134-20 65-19 7335 0 7391 27 76 85 122 171 137 69 11 964 11 1046 0zm7920-1673c55-25 92-62 112-116 17-44 18-231 18-3716V4665l-22-41c-12-23-36-53-52-67-62-52-63-52-681-52-628 0-620-1-687 58-73 64-67-62-73 1579l-5 1478-28 27-27 28-1068 3c-763 2-1075-1-1094-9-15-6-35-20-45-31-17-19-18-86-23-1492-5-1390-6-1473-23-1511-25-55-62-92-116-112-42-16-95-18-626-18-570 0-581 0-626 21-25 12-58 34-73 50-58 63-56-2-56 1556v1429l1221 2117c672 1164 1226 2122 1231 2127 14 15 22 35-471-1114l-461-1073v-550l34-34 34-34h2152l32 29 33 29 5 1484c5 1599 2 1512 58 1571 37 40 78 59 142 68 30 4 300 6 600 5 501-1 548-3 585-19z"
                    transform="matrix(.1 0 0 -.1 0 1835)"
                  ></path>
                </svg>
                <h2 className="text-base sm:text-2xl font-bold text-gray-800 ml-3">Next Hins</h2>
              </div>
              <div className="flex items-center">
                {/*  */}
                <div className="hidden md:flex md:mr-6 xl:mr-16">
                  <ul className="flex">
                    <li>
                      <Link to={PublicRoutes.HOME} className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none transition duration-150 ease-in-out">
                        <span className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                        </span>
                        Colecciones
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none transition duration-150 ease-in-out"
                        onClick={() => setShowCategories(!showCategories)}
                      >
                        <span className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-puzzle"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                        </span>
                        Categorias
                        <div className="ml-2 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </Link>
                      {showCategories && (
                        <div className="bg-white shadow-md rounded border border-gray-300 text-sm absolute w-40 z-30 mt-2">
                          <div className="bg-white rounded w-full relative z-10 py-1">
                            <ul onMouseLeave={() => setShowCategories(false)}>
                              <li
                                className="relative cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                                onClick={() => setShowCategories(false)}
                              >
                                <Link to={`${PublicRoutes.CATEGORIE}/poleras`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                  <span className="flex-1">Poleras</span>{" "}
                                </Link>
                              </li>
                              <li
                                className="relative cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                                onClick={() => setShowCategories(false)}
                              >
                                <Link to={`${PublicRoutes.CATEGORIE}/pantalones`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                  <span className="flex-1">Pantalones</span>{" "}
                                </Link>
                              </li>
                              <li
                                className="relative cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                                onClick={() => setShowCategories(false)}
                              >
                                <Link to={`${PublicRoutes.CATEGORIE}/gorras`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                  <span className="flex-1">Gorras</span>{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
                {/*  */}
                <div className="relative mr-6">
                  <Link to={PublicRoutes.CART_ITEMS}>
                    <div className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">
                      <svg className="fill-stroke" width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M1 5.7998H25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div id="menu" className="text-gray-800 hover:cursor-pointer" onClick={() => setShow(!show)}>
                  {show ? (
                    ""
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1={4} y1={6} x2={20} y2={6} />
                      <line x1={4} y1={12} x2={20} y2={12} />
                      <line x1={4} y1={18} x2={20} y2={18} />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SIDEBAR */}
          {/*Mobile responsive sidebar*/}
          <div className={show ? "w-full xl:hidden h-full fixed z-40  transform  translate-x-0 " : "w-full xl:hidden h-full absolute z-40  transform -translate-x-full"}>
            <div className="w-full z-40 overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" version="1" viewBox="0 0 2757 1835">
                            <path
                              d="M10 9175V0l13778 2 13777 3v18340l-13777 3-13778 2V9175zm10365 4665c87-13 166-50 206-99 17-20 577-1060 1244-2311 1111-2086 1214-2275 1239-2278l26-3v4526l24 52c31 67 81 100 168 114 39 6 273 9 594 7l530-3 59-30c49-25 63-39 84-80l26-49 3-1508 2-1507-1452-2515c-799-1383-1453-2514-1455-2512-2 1 178 423 398 936 327 761 400 938 393 956-5 13-407 764-894 1668-770 1433-888 1646-907 1646h-23l-2-2257c-3-2151-4-2260-21-2298-25-55-62-92-116-112-42-16-94-18-606-18-431 0-570 3-603 13-56 17-117 78-134 134-20 65-19 7335 0 7391 27 76 85 122 171 137 69 11 964 11 1046 0zm7920-1673c55-25 92-62 112-116 17-44 18-231 18-3716V4665l-22-41c-12-23-36-53-52-67-62-52-63-52-681-52-628 0-620-1-687 58-73 64-67-62-73 1579l-5 1478-28 27-27 28-1068 3c-763 2-1075-1-1094-9-15-6-35-20-45-31-17-19-18-86-23-1492-5-1390-6-1473-23-1511-25-55-62-92-116-112-42-16-95-18-626-18-570 0-581 0-626 21-25 12-58 34-73 50-58 63-56-2-56 1556v1429l1221 2117c672 1164 1226 2122 1231 2127 14 15 22 35-471-1114l-461-1073v-550l34-34 34-34h2152l32 29 33 29 5 1484c5 1599 2 1512 58 1571 37 40 78 59 142 68 30 4 300 6 600 5 501-1 548-3 585-19z"
                              transform="matrix(.1 0 0 -.1 0 1835)"
                            ></path>
                          </svg>
                          <p className="text-base md:text-2xl font-bold text-gray-800 ml-3">Next Hins</p>
                        </div>
                        <div id="closeButtonX" className="text-gray-800 hover:cursor-pointer" onClick={() => setShow(!show)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="text-gray-800 py-6">
                      <li className="hover:bg-gray-200 transition-colors">
                        <Link href="#" className="flex items-center py-3" onClick={() => setShowCategories(!showCategories)}>
                          <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-puzzle"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                          </div>
                          <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">Categorias</p>
                          <div className="ml-4 text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </Link>
                        {showCategories && (
                          <div className="bg-gray-50 text-sm w-full">
                            <div className="rounded w-full">
                              <ul onMouseLeave={() => setShowCategories(false)}>
                                <li
                                  className="py-3 hover:bg-gray-200 transition-colors"
                                  onClick={() => {
                                    setShowCategories(false), setShow(!show);
                                  }}
                                >
                                  <Link to={`${PublicRoutes.CATEGORIE}/poleras`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                    <span className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">{"» "}Poleras</span>{" "}
                                  </Link>
                                </li>
                                <li
                                  className="py-3 hover:bg-gray-200 transition-colors"
                                  onClick={() => {
                                    setShowCategories(false), setShow(!show);
                                  }}
                                >
                                  <Link to={`${PublicRoutes.CATEGORIE}/pantalones`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                    <span className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">{"» "}Pantalones</span>{" "}
                                  </Link>
                                </li>
                                <li
                                  className="py-3 hover:bg-gray-200 transition-colors"
                                  onClick={() => {
                                    setShowCategories(false), setShow(!show);
                                  }}
                                >
                                  <Link to={`${PublicRoutes.CATEGORIE}/gorras`} className="px-4 py-1 flex w-full items-center  no-underline  text-sm leading-3">
                                    <span className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">{"» "}Gorras</span>{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </li>

                      <li className="py-3 hover:bg-gray-200 transition-colors">
                        <Link to={auth.displayName ? PrivateRoutes.PROFILE : PublicRoutes.LOGIN} className="flex items-center" onClick={() => setShow(!show)}>
                          <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-user"
                              width={25}
                              height={25}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={7} r={4} />
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                          </div>
                          <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">{auth.displayName ? "Mi perfil" : "Iniciar Sesion"}</p>
                        </Link>
                      </li>
                      <li className="py-3 hover:bg-gray-200 transition-colors">
                        <Link to={auth.displayName ? PrivateRoutes.ORDERS : PublicRoutes.LOGIN} onClick={() => setShow(!show)} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-puzzle"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">Mis pedidos</p>
                          </div>
                        </Link>
                      </li>
                      {auth.displayName && (
                        <li className="py-3 hover:bg-gray-200 transition-colors">
                          <Link
                            to={PublicRoutes.HOME}
                            onClick={() => {
                              closeSession();
                              setShow(!show);
                            }}
                            className="flex items-center"
                          >
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-compass"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                              </svg>
                            </div>
                            <p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">Cerrar Sesion</p>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                  {auth.displayName && (
                    <div className="w-full pt-4">
                      <div className="border-t border-gray-300">
                        <div className="w-full flex items-center justify-between pt-1">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 24 24">
                              <path fill="#fff" d="M0 0H24V24H0z"></path>
                              <path
                                fill="#323232"
                                fillRule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-6a4 4 0 100 8 4 4 0 000-8zm5.111 9.997c.758.488.721 1.552.031 2.132A7.968 7.968 0 0112 20a7.967 7.967 0 01-5.114-1.848c-.697-.58-.734-1.649.028-2.14.236-.153.494-.287.774-.402C8.815 15.145 10.254 15 12 15c1.755 0 3.202.136 4.331.595.283.115.542.25.78.402z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <p className=" text-gray-800 text-base leading-4 ml-2">{auth.displayName}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
