import { useState } from "react";
import "./Cart.css";
import ProductCard from "../ProductCard/ProductCard";
import { productsData } from "../../constants";
import CartCard from "../CartCard/CartCard";

function Cart({ creamyCount, crunchyCount, setQuantityToZero }) {
  return (
    <section className="cart">
      <ul className="cart__cards">
        <CartCard productData={productsData[0]} productCount={creamyCount} setQuantityToZero={setQuantityToZero} />
        <CartCard productData={productsData[1]} productCount={crunchyCount} setQuantityToZero={setQuantityToZero} />
      </ul>
    </section>
  );
}

export default Cart;
