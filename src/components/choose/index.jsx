import React from "react";
import "./index.css";
import cc from "../../assets/cc.svg";
import fairprice from "../../assets/fairprice.svg";
import globe from "../../assets/globe.svg";
import group from "../../assets/group.svg";
import medal from "../../assets/medal.svg";
import graph from "../../assets/graph.svg";
const Choose = () => {
  return (
    <div className="choose">
      <div className="choose-container">
        <div className="choose-header">
          <h2 className="title">Choose a Big, Fair and Human Broker</h2>
          <p className="description">
            There is a reason why over 5 Million Clients Choose WealthGO for
            Forex Trading, Stock Indices Trading, Commodity Trading, Stocks,
            Metals and Energies Trading.
          </p>
        </div>
        <div className="choose-wrapper">
          <div className="choose-card">
            <img src={medal} alt="" />
            <div className="choose-text">
              <h4 className="ch-title">Industry best practices</h4>
              <p className="ch-desc">
                We engage in best practice to provide our users/investors
                platform to perform their investment, we have highly trained
                professionals which are available on demand, to guide investors
                on best practices.
              </p>
              <hr />
            </div>
          </div>
          <div className="choose-card">
            <img src={globe} alt="" />
            <div className="choose-text">
              <h4 className="ch-title">Globally Renowned</h4>
              <p className="ch-desc">
                We have clients from over 196 countries and staff speaking over
                30 languages. Our management has visited over 120 cities
                globally to understand clients’ and partners’ needs.
              </p>
              <hr />
            </div>
          </div>
          <div className="choose-card">
            <img src={group} alt="" />
            <div className="choose-text">
              <h4 className="ch-title">Focused on the Client</h4>
              <p className="ch-desc">
                Size does not matter. At WealthGo investment the client comes
                first regardless of net capital worth, account type or size of
                investment. All our clients receive the same quality services,
                the same execution, and the same level of support.
                WealthGo was founded on these values, and that
                will not change.
              </p>
              <hr />
            </div>
          </div>
          <div className="choose-card">
            <img src={graph} alt="" />
            <div className="choose-text">
              <h4 className="ch-title">Range of Trading Instruments</h4>
              <p className="ch-desc">
                Our clients can choose to trade forex and CFDs on stock indices,
                commodities, stocks, metals and energies from the same trading
                account. With a wide range of trading instruments available from
                a single multi asset platform WealthGo makes
                investing easier and efficient.
              </p>
              <hr />
            </div>
          </div>
          <div className="choose-card">
            <img src={fairprice} alt="" />
            <div className="choose-text">
              <h4 className="ch-title">Transparent and Fair</h4>
              <p className="ch-desc">
                At WealthGo what you see is what you get, with no
                hidden terms. Be that pricing, execution or promotions. What we
                advertise is what we give our clients, regardless of the size of
                their investment.
              </p>
              <hr />
            </div>
          </div>
          <div className="choose-card">
            <img src={cc} alt="" />
            <div className="choose-text">
              <h4 className="ch-title">IEasy and Convenient</h4>
              <p className="ch-desc">
                All our systems are built and updated with the client in mind.
                Starting from our account opening procedure, to managing your
                account, depositing or withdrawing funds and finally trading,
                it’s all straightforward simple and easy to use for all our
                clients.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
