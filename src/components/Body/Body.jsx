import { useState } from "react";
import "./Body.css";
import ProductCard from "../ProductCard/ProductCard";

function Body({ productsData, addToCart }) {
  return (
    <section className="body">
      <ul className="body__products">
        {productsData.map((productData, index) => {
          return (
            <ProductCard
              productData={productData}
              addToCart={addToCart}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Body;
