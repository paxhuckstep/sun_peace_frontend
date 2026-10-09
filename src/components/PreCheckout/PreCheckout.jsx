import { useState } from "react";
import "./PreCheckout.css";

function PreCheckout({ creamyCount, crunchyCount }) {
  const [shipName, setShipName] = useState("");
  const [shipAddress, setShipAddress] = useState("");
  const [shipAddressLineTwo, setShipAddressLineTwo] = useState("");
  const [shipZip, setShipZip] = useState("");
  const [shipCity, setShipCity] = useState("COS");
  const [shipState, setShipState] = useState("Colorado");

  const handleShipNameChange = (e) => {
    setShipName(e.target.value);
  };

  const handleShipAddressChange = (e) => {
    setShipAddress(e.target.value);
  };

  const handleShipAddressLineTwoChange = (e) => {
    setShipAddressLineTwo(e.target.value);
  };

  const handleShipZipChange = (e) => {
    setShipZip(e.target.value);
  };

  const handleShipCityChange = (e) => {
    setShipCity(e.target.value);
  };

  const handleShipStateChange = (e) => {
    setShipState(e.target.value);
  };

  return (
    <form action="" className="pre-checkout__shipping">
      <label htmlFor="shipping-name" className="pre-checkout__label">
        Shipping Name:
        <input
          type="text"
          name="shipping-name"
          className="pre-checkout__input"
          id="ship-name"
          placeholder="Shipping Name"
          minLength="1"
          maxLength="40"
          required
          onChange={handleShipNameChange}
          value={shipName}
        />
      </label>
      <label htmlFor="shipping-name" className="pre-checkout__label">
        Street Address:
        <input
          type="text"
          name="shipping-address"
          className="pre-checkout__input"
          id="ship-address"
          placeholder="Street Address"
          minLength="1"
          maxLength="40"
          required
          onChange={handleShipAddressChange}
          value={shipAddress}
        />
      </label>
      <label htmlFor="shipping-address-line-2" className="pre-checkout__label">
        Street Address Line 2:
        <input
          type="text"
          name="shipping-address-line-2"
          className="pre-checkout__input"
          id="ship-address-line-2"
          placeholder="Street Address Line 2"
          minLength="1"
          maxLength="40"
          required
          onChange={handleShipAddressLineTwoChange}
          value={shipAddressLineTwo}
        />
      </label>
      <label htmlFor="shipping-zip" className="pre-checkout__label">
        Zip Code:
        <input
          type="text"
          name="shipping-zip"
          className="pre-checkout__input"
          id="ship-zip"
          placeholder="000000"
          minLength="6"
          maxLength="6"
          required
          onChange={handleShipZipChange}
          value={shipZip}
        />
      </label>
      <label htmlFor="shipping-city" className="pre-checkout__label">
        City:
        <input
          type="text"
          name="shipping-city"
          className="pre-checkout__input"
          id="ship-city"
          placeholder="Colorado Springs?!"
          minLength="1"
          maxLength="40"
          required
          onChange={handleShipCityChange}
          value={shipCity}
        />
      </label>
      <label htmlFor="shipping-city" className="pre-checkout__label">
        State:
        <input
          type="text"
          name="shipping-state"
          className="pre-checkout__input"
          id="ship-state"
          placeholder="Oh you Far!"
          minLength="1"
          maxLength="40"
          required
          onChange={handleShipCityChange}
          value={shipState}
        />
      </label>
    </form>
  );
}

export default PreCheckout;
