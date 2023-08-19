import { PublicRoutes } from "@routes/routes";
import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ product }) => {
  return (
    <div className="group cursor-pointer relative w-full ">
      <div className="overflow-hidden w-full">
        <img src={product.url} alt={product.name} className="h-72 md:h-80 w-full group-hover:opacity-75" />
      </div>
      <h3 className="mt-4 text-sm md:text-lg font-medium text-gray-600">{product.name}</h3>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-md">Antes</p>
          <p className="line-through text-gray-500 text-sm">S/{product.price + 9}.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold">Online</p>
          <p className="mt-1 text-lg font-medium text-red-600">S/{product.price}.00</p>
        </div>
      </div>
      <Link
        to={`${PublicRoutes.PRODUCT}/${product.id}`}
        className="relative z-10 w-full block text-center bottom-32 bg-zinc-300 font-medium bg-opacity-75 py-2 px-4 text-gray-900 opacity-0 group-hover:opacity-100 transition-all"
      >
        Ver ahora
      </Link>
    </div>
  );
};

export default CardItem;
