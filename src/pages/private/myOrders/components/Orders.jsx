import React from "react";
import { Link } from "react-router-dom";
import { PublicRoutes } from "@routes/routes";

const Orders = ({prod}) => {
  
  const { id, url, name, quantity, size, price } = prod;

  return (
    <div key={id} className="flex ml-3 sm:ml-5">
      <img src={url} className="rounded-md w-28" />
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex flex-col justify-center ml-8 text-gray-800 font-semibold sm:w-3/5">
          <p>{name}</p>
          <p>x{quantity}</p>
          <p>
            Talla: <span>{size}</span>
          </p>
          <p>S/{price}</p>
        </div>
        <div className="w-full sm:w-2/5 flex items-center md:mr-10 mt-2 sm:mt-0">
          <div className="mx-auto">
            <Link to={`${PublicRoutes.PRODUCT}/${id}`} className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-md text-white text-sm block text-center">
              Comprar de nuevo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
