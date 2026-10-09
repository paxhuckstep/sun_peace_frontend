import { useState } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="header">
      <h1 className="header__title">SunPeace</h1>
      {/* <NavBar /> */}
      <button
        onClick={() => {
          if (location.pathname === "/cart") {
            navigate("/");
          } else {
            navigate("/cart");
          }
        }}
        className="header__cart-button"
      >
        {location.pathname === "/cart" ? "*HOME*" : "*CART*"}
      </button>
    </section>
  );
}

export default Header;
