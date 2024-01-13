import React from "react";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import "./index.css";
const Snaps = () => {
  return (
    <div className="snaps">
      <div className="snaps-container">
        <div className="snaps-header">
          <h2 className="title">Crypto Markets</h2>
        </div>
        <div className="snaps-chart">
          <CryptoCurrencyMarket
            colorTheme="light"
            width="100%"
            height={400}
          ></CryptoCurrencyMarket>
        </div>
      </div>
    </div>
  );
};

export default Snaps;
