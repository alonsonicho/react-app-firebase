import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 text-white">
      <div className="border-t border-b border-gray-200:border-gray-700 py-16">
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Términos y condiciones
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Protección de datos
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Finalidades adicionales
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Cambios y devoluciones
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Tiempos y costos de envío
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Nuestras Tiendas
                    </Link>
                  </li>

                  <li className="mt-6">
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Trabaja con Nosotros
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Consulta de Puntos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Política de cookies
                    </Link>
                  </li>
                  <li className="mt-6">
                    <Link to="#" className="text-xs lg:text-sm leading-none">
                      Campañas publicitarias
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                <div className="flex items-center mb-6">
                  <div className="cursor-pointer ">
                    <svg
                      className="footer-icon feather feather-github hover:text-yellow-500 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <div className="pl-4">
                    <svg
                      className="footer-icon feather feather-twitter cursor-pointer hover:text-yellow-500 transition"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 flex flex-col justify-center items-center">
        <Link to="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" version="1" viewBox="0 0 2757 1835" fill="white">
            <path
              d="M10 9175V0l13778 2 13777 3v18340l-13777 3-13778 2V9175zm10365 4665c87-13 166-50 206-99 17-20 577-1060 1244-2311 1111-2086 1214-2275 1239-2278l26-3v4526l24 52c31 67 81 100 168 114 39 6 273 9 594 7l530-3 59-30c49-25 63-39 84-80l26-49 3-1508 2-1507-1452-2515c-799-1383-1453-2514-1455-2512-2 1 178 423 398 936 327 761 400 938 393 956-5 13-407 764-894 1668-770 1433-888 1646-907 1646h-23l-2-2257c-3-2151-4-2260-21-2298-25-55-62-92-116-112-42-16-94-18-606-18-431 0-570 3-603 13-56 17-117 78-134 134-20 65-19 7335 0 7391 27 76 85 122 171 137 69 11 964 11 1046 0zm7920-1673c55-25 92-62 112-116 17-44 18-231 18-3716V4665l-22-41c-12-23-36-53-52-67-62-52-63-52-681-52-628 0-620-1-687 58-73 64-67-62-73 1579l-5 1478-28 27-27 28-1068 3c-763 2-1075-1-1094-9-15-6-35-20-45-31-17-19-18-86-23-1492-5-1390-6-1473-23-1511-25-55-62-92-116-112-42-16-95-18-626-18-570 0-581 0-626 21-25 12-58 34-73 50-58 63-56-2-56 1556v1429l1221 2117c672 1164 1226 2122 1231 2127 14 15 22 35-471-1114l-461-1073v-550l34-34 34-34h2152l32 29 33 29 5 1484c5 1599 2 1512 58 1571 37 40 78 59 142 68 30 4 300 6 600 5 501-1 548-3 585-19z"
              transform="matrix(.1 0 0 -.1 0 1835)"
            ></path>
          </svg>
        </Link>
        <p className="mt-6 text-xs lg:text-sm leading-none">Alonso NH.</p>
      </div>
    </footer>
  );
};

export default Footer;
