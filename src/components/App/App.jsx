import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import { Routes, Route, useNavigate } from "react-router";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import { productsData } from "../../constants";
function App() {
  const [creamyCount, setCreamyCount] = useState(0);
  const [crunchyCount, setCrunchyCount] = useState(0);
  const addToCart = (productID, quantity) => {
    if (productID === 1) {
      setCreamyCount((prev) => prev + quantity);
    }
    if (productID === 2) {
      setCrunchyCount((prev) => prev + quantity);
    }
    console.log("add to cart ran");
  };

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
            <Cart creamyCount={creamyCount} crunchyCount={crunchyCount} />
          }
        />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
