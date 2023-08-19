import { PublicRoutes } from "@routes/routes";
import React from "react";
import { Link } from "react-router-dom";

const CTAs = () => {
  const data = [
    {
      name: "poleras",
      url_img: "https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: "pantalones",
      url_img: "https://images.unsplash.com/photo-1511105612320-2e62a04dd044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      name: "gorras",
      url_img: "https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <div className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 lg:max-w-none">
          <h2 className="text-2xl font-bold">Nuestras Colecciones</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {data.map((item) => (
              <div key={item.name} className="group">
                <div className="h-80 w-full group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img src={item.url_img} alt={item.name} className="h-full w-full object-cover object-center rounded-lg" />
                </div>
                <h3 className="mt-6 text-base font-semibold capitalize">
                  <Link to={`${PublicRoutes.CATEGORIE}/${item.name}`} className="hover:border-b-2 border-gray-50 pb-1">
                    {item.name}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAs;
