import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Plans = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="plans">
      <div className="plans-container">
        <div className="plans-header">
          <h2 className="title">Check Out Our 
          <font size="6" color="#5ba601"><b>Investment Plans</b> </font>
          </h2>
          {/* <p className="description" style={{ width: "60%", margin: "0 auto" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            ducimus, nulla error veritatis eius dignissimos rem praesentium
            quisquam dolorum aut maiores exercitationem nisi non quo ipsa a id,
            expedita autem.
          </p> */}
        </div>
        <div className="plan-cards">
          <div className="plan-card">
            <div className="card-header">
              <h4 className="card_subtitle">Plan 1</h4>
              <h2 className="card_title"> 10%</h2>
            </div>
            {/* <img src={plan1} alt="" className="card-img" /> */}
            <div className="card-body">
              <p className="card-text">AFTER 24 HOURS</p>
              <p className="card-text">Minimum Deposit : $30</p>
              <p className="card-text">Maximum deposit : $499</p>
              <p className="card-text">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn" onClick={() => navigate("/login")}>{name}</button>
          </div>
          <div className="plan-card">
            <div className="card-header">
              <h4 className="card_subtitle">Plan 2</h4>
              <h2 className="card_title"> 30%</h2>
            </div>
            {/* <img src={plan2} alt="" className="card-img" /> */}
            <div className="card-body">
              <p className="card-text">AFTER 24 HOURS</p>
              <p className="card-text">Minimum Deposit : $500</p>
              <p className="card-text">Maximum deposit : $999</p>
              <p className="card-text">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn" onClick={() => navigate("/login")}>{name}</button>
          </div>
          <div className="plan-card">
            <div className="card-header">
              <h4 className="card_subtitle">Plan 3</h4>
              <h2 className="card_title"> 60%</h2>
            </div>
            {/* <img src={plan3} alt="" className="card-img" /> */}
            <div className="card-body">
              <p className="card-text">AFTER 48 HOURS</p>
              <p className="card-text">Minimum Deposit : $1000</p>
              <p className="card-text">Maximum deposit : $4999</p>
              <p className="card-text">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn" onClick={() => navigate("/login")}>{name}</button>
          </div>
          <div className="plan-card">
            <div className="card-header">
              <h4 className="card_subtitle">Plan 4</h4>
              <h2 className="card_title"> 100%</h2>
            </div>
            {/* <img src={plan4} alt="" className="card-img" /> */}
            <div className="card-body">
              <p className="card-text">AFTER 72 HOURS</p>
              <p className="card-text">Minimum Deposit: $5000</p>
              <p className="card-text">Maximum deposit : $UNLIMITED</p>
              <p className="card-text">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn" onClick={() => navigate("/login")}>{name}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
