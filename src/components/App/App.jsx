import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const tempProductsData = [{
  name: "Creamy PB",
  price: "$10",
  inStock: true,
  imageClass: "product-card__picture_creamy",
},{
  name: "Cruncy PB",
  price: "$10",
  inStock: true,
  imageClass: "product-card__picture_cruncy",
}]

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <Header />
      <Body productsData={tempProductsData}/>
      <Footer />
    </main>
  );
}

export default App;
