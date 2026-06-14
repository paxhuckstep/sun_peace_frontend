import { useState } from "react";
import "./CartCard.css";
import ProductCard from "../ProductCard/ProductCard";

function CartCard({ productData, productCount, setQuantityToZero }) {
  const [quantity, setQuantity] = useState(0);

  const selectorClicked = (event) => {
    // console.log("selectorClicked?");
    setQuantity(event.target.value);
  };

  const trashClick = () => {
    console.log("trash clicked in cart");
    setQuantityToZero(productData.id)
  };

  if (productCount < 1) {
    return null;
  } else
    return (
      <li className="cart-card">
        <h3 className="cart-card__title">{productData.name}</h3>
        {/* <div className={imageClass}> </div> */}
        <p className="cart-card__price">${(productData.price * productCount).toFixed(2)}</p>
        <input
          type="number"
          min={0}
          max={productData.stockQuantity}
          className="cart-card__input"
          defaultValue={productCount}
          onClick={selectorClicked}
        />
        <button className="cart-card__remove" onClick={trashClick}>
          *TRASH ICON*
        </button>
      </li>
    );
}

export default CartCard;
