import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDataItemDetail } from "@servicesFirestore";
// Components
import Layout from "@components/Layout";
import AddToCartModal from "./components/AddToCartModal";
import ButtonColorProduct from "./components/ButtonColorProduct";
import ButtonSizeProduct from "./components/ButtonSizeProduct";
// Hooks
import useCart from "../../../hooks/useCart";
import { PublicRoutes } from "@routes/routes";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItems } = useCart();

  const [product, setProduct] = useState({});
  const [selectColor, setSelectColor] = useState("");
  const [selectQuantity, setSelectQuantity] = useState(1);
  const [selectSize, setSelectSize] = useState("");
  const [showStock, setShowStock] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const colorOptions = ['White', 'Red', 'Black'];

  useEffect(() => {
    const getData = async (product_id) => {
      const data = await getDataItemDetail(product_id);
      setProduct(data);
    };
    getData(id);
  }, []);

  useEffect(() => {
    setSelectQuantity(1);
  }, [selectSize]);

  const handleItemCart = () => {
    const productAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      color: selectColor,
      size: selectSize,
      description: product.description,
      stock: product.size,
    };

    addItems(productAdd, selectQuantity);
    setShowModal(true);
    setSelectColor("");
    setSelectQuantity(1);
    setSelectSize("");
  };

  const renderStockProduct = (name) => {
    const item = product.size?.find((item) => item.name === name);
    setShowStock(item.stock);
  };

  return (
    <Layout>
      {/* Modal */}
      {showModal && <AddToCartModal setShowModal={setShowModal} showModal={showModal} />}
      <div className="bg-gray-50">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <Link to={PublicRoutes.HOME} className="mr-2 text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 24 24">
                    <path fill="#fff" d="M0 0H24V24H0z"></path>
                    <path
                      fill="rgb(17, 24, 39)"
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm9.707-2.293a1 1 0 00-1.414-1.414L7.38 11.206l-.044.046a.998.998 0 000 1.496l.044.046 2.913 2.913a1 1 0 001.414-1.414L10.414 13H16a1 1 0 100-2h-5.586l1.293-1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="hover:border-b-2 border-gray-700 ml-2 text-sm font-medium text-gray-500">Inicio</span>
                </Link>
              </li>
            </ol>
          </nav>
          {/* <!-- Image gallery --> */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
              <img src={product.url} alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img src={product.url} alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                <img src={product.url} alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
              <img src={product.url} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
            </div>
          </div>
          {/* <!-- Product info --> */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
            {/* <!-- Options --> */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <p className="text-3xl tracking-tight text-gray-900 font-bold">S/{product.price}</p>
              {/* <!-- Colors --> */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mt-4">Color</h3>
                <fieldset className="mt-4">
                  <div className="flex items-center space-x-3">
                    {colorOptions.map((color, index) => (
                      <ButtonColorProduct
                        key={index}
                        color={color}
                        selectColor={selectColor}
                        setSelectColor={setSelectColor}
                      />
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Cantidad</h3>
                <fieldset className="mt-4">
                  <div className="flex items-center">
                    <button
                      className={`${
                        selectQuantity === 1 && "cursor-not-allowed bg-gray-50 hover:bg-gray-50 text-gray-300"
                      } border-solid border px-4 py-1 rounded-sm relative hover:bg-gray-50 focus:outline-none text-2xl font-bold`}
                      onClick={() => setSelectQuantity(selectQuantity - 1)}
                      disabled={selectQuantity === 1}
                    >
                      -
                    </button>
                    <span className="mx-3 font-bold text-xl w-8 text-center">{selectQuantity}</span>
                    <button
                      className={`${
                        selectQuantity === showStock && "cursor-not-allowed bg-gray-50 hover:bg-gray-50 text-gray-300"
                      } "border-solid border px-4 py-1 rounded-sm relative hover:bg-gray-50 focus:outline-none text-2xl font-bold`}
                      onClick={() => setSelectQuantity(selectQuantity + 1)}
                      disabled={selectQuantity === showStock}
                    >
                      +
                    </button>
                  </div>
                </fieldset>
              </div>

              {/* <!-- Sizes --> */}
              <div className="mt-10">
                <fieldset className="mt-4">
                  <p className="text-sm font-medium text-gray-900 mb-4">Unidades disponibles : {showStock ? showStock : <span className="text-gray-400 ml-1">Seleccione su talla ahora!</span>}</p>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.size?.map((item, index) => (
                      <ButtonSizeProduct
                        key={index}
                        name={item.name}
                        inStock={item.inStock}
                        selectSize={selectSize}
                        setSelectSize={setSelectSize}
                        renderStockProduct={renderStockProduct}
                      />
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="button"
                onClick={handleItemCart}
                disabled={[selectColor, selectSize].includes("") ? true : false}
                className={`${
                  [selectColor, selectSize].includes("") ? "cursor-not-allowed bg-gray-300 text-gray-500" : "bg-gray-900 hover:bg-gray-700 text-white"
                } mt-10 flex w-full items-center justify-center rounded-md border py-3 px-8 text-base font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors`}
              >
                AÑADIR AL CARRITO
              </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              <div>
                <h2 className="text-sm font-medium text-gray-900 mb-3">Descripcion</h2>
                <div className="space-y-6">
                  <p className="text-base text-gray-600">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Caracteristicas</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">Polera con capucha</span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">Confort</span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">Franela</span>
                    </li>

                    <li className="text-gray-400">
                      <span className="text-gray-600">95% Algodón y 5% Viscosa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetail;
