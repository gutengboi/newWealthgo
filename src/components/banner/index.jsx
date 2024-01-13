import React from "react";
import "./index.css";
import airbnb from "../../assets/airbnb.png";
import framer from "../../assets/Framer.png";
import himalayas from "../../assets/himalayas.png";
import opendoor from "../../assets/opendoor.png";
import pendo from "../../assets/pendo.png";
import treehouse from "../../assets/treehouse.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-header">
          <h2 className="title">Trusted By Over   
          <font size="6" color="#5ba601">2000+ Partners</font>
            </h2>
          
          <div className="banner-img">
            <img src={airbnb} alt="airbnb" className="banner-logo" />
            <img src={framer} alt="framer" className="banner-logo" />
            <img src={himalayas} alt="himalayas" className="banner-logo" />
            <img src={opendoor} alt="opendoor" className="banner-logo" />
            <img src={treehouse} alt="treehouse" className="banner-logo" />
            <img src={pendo} alt="pendo" className="banner-logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
