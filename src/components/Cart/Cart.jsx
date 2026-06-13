import { useState } from "react";
import "./Cart.css";
import ProductCard from "../ProductCard/ProductCard";
import { productsData } from "../../constants";
import CartCard from "../CartCard/CartCard";

function Cart({ creamyCount, crunchyCount }) {
  return (
    <body className="cart">
      <ul className="cart__cards">
        <CartCard productData={productsData[0]} productCount={creamyCount} />
        <CartCard productData={productsData[1]} productCount={crunchyCount} />
      </ul>
    </body>
  );
}

export default Cart;
