import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Components
import Layout from "@components/Layout";
import CTAs from "@components/CTAs";
import CardItem from "@components/CardItem";
// Fibase
import { getDataCollections } from "@servicesFirestore";
import Spinner from "@components/Spinner";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerData = async () => {
      const data = await getDataCollections();
      setProducts(data);
      setIsLoading(false);
    };
    obtenerData();
  }, []);

  return (
    <Layout>
      <CTAs />
      <div className="bg-gray-50">
        <div className="mx-auto py-16 px-2 md:px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-2 gap-y-5 gap-x-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <CardItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
