import { useState } from "react";
import "./Cart.css";
import ProductCard from "../ProductCard/ProductCard";
import { productsData } from "../../constants";

function Cart({ creamyCount, crunchyCount }) {
  return (
    <body className="cart">
      <ul className="cart__cards">
        <cartCard productData={productsData[0]} productCount={creamyCount} />
        <cartCard productData={productsData[1]} productCount={crunchyCount} />
      </ul>
    </body>
  );
}

export default Cart;
