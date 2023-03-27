import React from "react";
import { Link } from "react-router-dom";

const AddToCartModal = ({ setShowModal }) => {
  return (
    <div className="fixed flex items-center justify-center inset-0 z-10 overflow-y-auto">
      <div className="flex text-center sm:block sm:p-0 md:w-full">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowModal(false)}></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" version="1.1" viewBox="0 0 58 58" xmlSpace="preserve">
                <path fill="#BDC3C7" d="M58 40.5H8v-26h50v26zm-48-2h46v-22H10v22z"></path>
                <path fill="#BDC3C7" d="M9 47.5a1 1 0 01-1-1v-7a1 1 0 112 0v7a1 1 0 01-1 1z"></path>
                <circle cx="19" cy="51.5" r="4" fill="#556080"></circle>
                <circle cx="43" cy="51.5" r="4" fill="#556080"></circle>
                <path fill="#BDC3C7" d="M52 47.5H9a1 1 0 110-2h43a1 1 0 110 2z"></path>
                <circle cx="33" cy="15.5" r="13" fill="#24AE5F"></circle>
                <path fill="#FFF" d="M31.999 21.5c-.226 0-.452-.076-.64-.231l-6-5a1.001 1.001 0 011.281-1.537l6 5a1.001 1.001 0 01-.641 1.768z"></path>
                <path fill="#FFF" d="M32 21.5a.999.999 0 01-.747-1.664l8-9a.999.999 0 111.494 1.328l-8 9A.994.994 0 0132 21.5z"></path>
                <path fill="#BDC3C7" d="M9 7.5H4a1 1 0 110-2h5a1 1 0 110 2z"></path>
                <path fill="#BDC3C7" d="M9 16.5a1 1 0 01-1-1v-9a1 1 0 112 0v9a1 1 0 01-1 1z"></path>
                <circle cx="3" cy="6.5" r="3" fill="#D8625E"></circle>
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                ¡Producto agregado al carrito!
              </h3>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-5 sm:mt-6">
            <Link
              to="/"
              onClick={() => setShowModal(false)}
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm sm:mr-2 mb-3"
            >
              Seguir comprando
            </Link>
            <Link
              to="/cart"
              onClick={() => setShowModal(false)}
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-800 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm sm:ml-2 mb-3"
            >
              Ir a mi carrito
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
