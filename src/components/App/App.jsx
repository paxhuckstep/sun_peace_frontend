import { useEffect, useState } from "react";
import reactLogo from "../../assets/react.svg";
import { Routes, Route, useNavigate } from "react-router";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import PreCheckout from "../PreCheckout/PreCheckout";
import { productsData } from "../../constants";
function App() {
  const [creamyCount, setCreamyCount] = useState(0);
  const [crunchyCount, setCrunchyCount] = useState(0);

  const addToCart = (productID, quantity) => {
    console.log("product ID: ", productID);
    if (productID === 1) {
      setCreamyCount(
        (prevCream) => parseInt(prevCream, 10) + parseInt(quantity, 10),
      );
    }
    if (productID === 2) {
      setCrunchyCount(
        (prevCrunch) => parseInt(prevCrunch, 10) + parseInt(quantity, 10),
      );
    }
    // console.log("add to cart ran");
  };

  const editCount = (productID, quantity) => {
    if (productID === 1) {
      setCreamyCount(quantity);
    }
    if (productID === 2) {
      setCrunchyCount(quantity);
    }
  };

  useEffect(() => {
    // console.log("Creamy Count: ", creamyCount);
  }, [creamyCount]);

  useEffect(() => {
    // console.log("Crunchy Count: ", crunchyCount);
  }, [crunchyCount]);

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Body productsData={productsData} addToCart={addToCart} />}
        />
        <Route
          path="cart"
          element={
            <Cart
              creamyCount={creamyCount}
              crunchyCount={crunchyCount}
              editCount={editCount}
            />
          }
        />
        <Route
          path="pre-checkout"
          element={
            <PreCheckout
              creamyCount={creamyCount}
              crunchyCount={crunchyCount}
            />
          }
        />
      </Routes>
      <Footer />
      <p className="app_bs">creamy: {creamyCount}</p>
      <p className="app_bs">crunchy: {crunchyCount}</p>
    </main>
  );
}

export default App;
