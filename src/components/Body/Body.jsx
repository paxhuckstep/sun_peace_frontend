import { useState } from "react";
import "./Body.css";
import ProductCard from "../ProductCard/ProductCard";

function Body({ productsData }) {
  return (
    <section className="body">
      <ul className="body__products">
      {productsData.map((productData, index) => {
        return <ProductCard productData={productData} key={index} />;
      })}
      </ul>
    </section>
  );
}

export default Body;
