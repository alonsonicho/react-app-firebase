import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// Components
import Layout from "../components/Layout";
import CardItem from "../components/CardItem";
// Firebase
import { getDataCategories } from "../firebase/Firestore";
import Spinner from "../components/Spinner";

const Categories = () => {
  const { nameCategory } = useParams();

  const [productsByCategory, setProductsByCategory] = useState([]);
  const [priceOrder, setPriceOrder] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        const data = await getDataCategories(nameCategory, priceOrder);
        setProductsByCategory(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsByCategory();
  }, [nameCategory, priceOrder]);

  return (
    <Layout>
      <div className="bg-gray-50 flex justify-center">
        {/* List products by category */}
        <div className="mx-auto py-16 px-2 md:px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="flex justify-end pb-8">
            <select
              onChange={(e) => setPriceOrder(e.target.value)}
              className="w-1/2 md:w-80 outline-none border border-gray-300 px-2 py-3 rounded-md focus:ring-gray-500 focus:border-gray-500  dark:focus:ring-gray-500 dark:focus:border-gray-500 font-medium text-gray-900"
            >
              <option value="def">Ordenar por</option>
              <option value="desc">Mayor precio</option>
              <option value="asc">Menor precio</option>
            </select>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-2 gap-y-5 gap-x-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {productsByCategory.map((product) => (
                <CardItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
