import { useState } from "react";
import "./Cart.css";
import ProductCard from "../ProductCard/ProductCard";

function Cart({ cartData }) {
  return (
<body className="cart">
   <ul className="cart__cards">
      {productsData.map((cartData, index) => {
        return <CartCard cartData={cartData} key={index} />;
      })}
      </ul>
</body>
  );
}

export default Cart;
