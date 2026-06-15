import { useState } from "react";
import "./Cart.css";
import ProductCard from "../ProductCard/ProductCard";
import { productsData } from "../../constants";
import CartCard from "../CartCard/CartCard";

function Cart({ creamyCount, crunchyCount, editCount }) {
  if (crunchyCount < 1 && creamyCount < 1) {
    return (
      <section className="cart">
        <p className="cart__empty">Cart is Empty :/</p>
      </section>
    );
  }
  return (
    <section className="cart">
      <ul className="cart__cards">
        <CartCard
          productData={productsData[0]}
          productCount={creamyCount}
          editCount={editCount}
        />
        <CartCard
          productData={productsData[1]}
          productCount={crunchyCount}
          editCount={editCount}
        />
      </ul>
    </section>
  );
}

export default Cart;
