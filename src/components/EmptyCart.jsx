import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="bg-gray-50 py-40">
      <div className="flex items-center justify-center flex-col">
        <div className="text-center px-10 mb-10">
          <p className="font-bold">¡Tu carrito de compras esta vacío!</p>
          <p>Para seguir comprando, navega por nuestra web y descubre todo lo que tenemos para ti.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="none" viewBox="0 0 24 24">
          <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 3h2.5l2 14H17a2 2 0 11-2 2M9 5h12l-2 6m-1 3H6.071M11 19a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <Link className="px-4 bg-gray-900 flex justify-between items-center w-72 h-14 text-white hover:bg-gray-800 transition-colors mt-5" to="/">
          Buscar Productos
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
