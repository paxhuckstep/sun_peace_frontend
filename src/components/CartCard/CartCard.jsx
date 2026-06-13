import { useState } from "react";
import "./CartCard.css";
import ProductCard from "../ProductCard/ProductCard";

function CartCard({ productData, productCount }) {
  const [quantity, setQuantity] = useState(0);

  const selectorClicked = (event) => {
    // console.log("selectorClicked?");
    setQuantity(event.target.value);
  };

  const submitClick = () => {
    console.log("trash clicked in cart")
  };

  return (
    <li className="cart-card">
      <h3 className="cart-card__title">{productData.name}</h3>
      {/* <div className={imageClass}> </div> */}
      <p className="cart-card__price">{productData.price * productCount}</p>
      <input
        type="number"
        min={0}
        max={productData.stockQuantity}
        className="cart-card__input"
        defaultValue={0}
        onClick={selectorClicked}
      />
      <button className="cart-card__remove" onClick={submitClick}>
        *TRASH ICON*
      </button>
    </li>
  );
}

export default CartCard;
