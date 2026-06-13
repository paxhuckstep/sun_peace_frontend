import { useState } from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <section className="header">
      <h1 className="header__title">SunPeace</h1>
      {/* <NavBar /> */}
      <button
        onClick={() => {
          navigate("cart");
        }}
        className="header__cart-button"
      >
        *CART*
      </button>
    </section>
  );
}

export default Header;
