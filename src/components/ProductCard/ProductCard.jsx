import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ productData, addToCart, index }) {
  const imageClass = "product-card__picture " + productData.imageClass;
  const [quantity, setQuantity] = useState(0);

  const selectorClicked = (event) => {
    // console.log("selectorClicked?");
    setQuantity(event.target.value);
  };

  const submitClick = () => {
    // console.log("quantity: ", quantity);
    addToCart(productData.id, quantity);
  };

  return (
    <li className="product-card" key={index}>
      <h3 className="product-card__title">{productData.name}</h3>
      <div className={imageClass}> </div>
      <p className="product-card__price">{productData.price}</p>
      <input
        type="number"
        min={0}
        max={productData.stockQuantity}
        className="product-card__input"
        defaultValue={0}
        onClick={selectorClicked}
      />
      <button className="product-card__atc" onClick={submitClick}>
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
