import { useState } from 'react'
import './ProductCard.css'

function ProductCard({productData}) {

  const imageClass = "product-card__picture " + productData.imageClass

  return (
    <li className="product-card">
      <h3 className="product-card__title">{productData.name}</h3>
      <div className={imageClass}> </div>
      <p className="product-card__price">{productData.price}</p>
      <button className="product-card__atc">Add to Cart</button>
      {/* <img src="../../assets/creamy.jpeg" alt="ddd" /> */}
    </li>
  )
}

export default ProductCard
