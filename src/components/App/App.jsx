import { useEffect, useState } from "react";
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

  const gameDataOG =
    "'1. e4 e5 2. d3 Nc6 3. Nc3 Bb4 4. Bd2 Nf6 5. Nf3 d6 6. Be2 Be6 7. O-O Qd7 8. a3 Ba5 9. b4 Bb6 10. Be3 Ng4 $6 11. Bxb6 axb6 12. h3 Nf6 13. b5 $6 Nd4 14. Nxd4 $6 exd4 15. Nb1 h5 $6 16. c3 Bxh3 $3 17. gxh3 (17. cxd4 Bg4 18. Nc3 d5 19. Re1 O-O-O (19... Rh6 20. e5 Ng8 21. Bxg4 hxg4 22. a4 Ne7 23. Qc1 O-O-O 24. a5 Rdh8 25. Kf1 $1 g3 26. axb6 Rh1+ 27. Ke2 Qg4+ 28. Kd2 Rxe1 29. Qxe1 Rh2 30. Ra8+ Kd7 31. Na4 Qxd4 32. Qe3 Qxe3+ $1 33. fxe3 Rxg2+ $1) 20. e5) 17... Qxh3 $1 18. cxd4 $2 Ng4 $1 19. Bxg4 hxg4 20. Nc3 Qh2'";

  const splitData = gameDataOG.split(".")
  const splitData2 = splitData.map((badEnding, index) => {
    return badEnding.slice(0, -2)
    // return goodEnding
  })
  const splitData3 = splitData2.splice(1,splitData2.length)

    console.log(splitData3);


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
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
