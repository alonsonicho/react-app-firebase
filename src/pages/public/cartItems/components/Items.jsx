import React from "react";

const Items = ({ item, updateQuantity, deleteProduct, getStockProduct }) => {

    const { id, url, name, quantity, price, size, subtotal } = item;

  return (
    <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
      <div className="w-full flex items-center">
        <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
          <img src={url} alt="name" />
        </div>
        <div className="flex flex-grow flex-col pl-3">
          <h6 className="font-semibold uppercase text-gray-600">{name}</h6>
          <div className="flex flex-col text-gray-500 text-sm">
            <p> x {quantity}</p>
            <p>Precio : S/{price}</p>
            <p>Talla : {size}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-1">
            <button
              className={`${
                quantity === 1 ? "cursor-not-allowed bg-gray-50 hover:bg-gray-50 text-gray-300" : "cursor-pointer bg-gray-100 border-solid border"
              } border-solid border rounded-l  py-1 px-3 transition-colors`}
              onClick={() => updateQuantity(id, false)}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="text-black text-center w-10">{quantity}</span>
            <button
              className={`${
                quantity === getStockProduct(item, size) ? "cursor-not-allowed bg-gray-50 hover:bg-gray-50 text-gray-300" : "cursor-pointer bg-gray-100 border-solid border"
              } border-solid border rounded-l  py-1 px-3 transition-colors`}
              onClick={() => updateQuantity(id, true)}
              disabled={quantity === getStockProduct(item, size)}
            >
              +
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-gray-600 text-lg">S/ {subtotal}.00</span>
            <button onClick={() => deleteProduct(id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
