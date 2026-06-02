import { useState } from "react";
import "./Body.css";
import ProductCard from "../ProductCard/ProductCard";

function Body({ productsData }) {
  return (
    <section className="body">
      {productsData.map((productData, index) => {
        return <ProductCard productData={productData} />;
      })}
    </section>
  );
}

export default Body;
