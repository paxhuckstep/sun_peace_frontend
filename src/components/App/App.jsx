import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { Routes, Route, useNavigate } from "react-router";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

const productsData = [
  {
    id: 1,
    name: "Creamy PB",
    price: "$10",
    inStock: true,
    imageClass: "product-card__picture_creamy",
    stockQuantity: 100,
  },
  {
    id: 2,
    name: "Cruncy PB",
    price: "$10",
    inStock: true,
    imageClass: "product-card__picture_cruncy",
    stockQuantity: 100,
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [cartData, setCartData] = useState([]);

  const addToCart = (item, quantity) => {
    setCartData((prev) => {
      prev.push({
        product: item,
        amount: quantity,
      });
    });
  };

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Body productsData={productsData} addToCart={addToCart} />}
        />
        <Route path="cart" element={<Cart cartData={cartData} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
