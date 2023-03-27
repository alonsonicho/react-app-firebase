import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-center">
      <div className="w-24 h-24 border-8 border-dashed rounded-full animate-spin border-gray-700"></div>
      <p className="mt-5 font-bold text-gray-800 text-lg">Cargando ...</p>
    </div>
  );
};

export default Spinner;
