import React from "react";
import "./index.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h5 className="subtitle hero-subtitle">Welcome to Wealth Go</h5>
        <h1 className="hero-title">Investment in Agriculture</h1>
        <p className="description hero-description">
          Wealth Go is the easiest way to Invest, Manage and Grow your capital
          in agriculture. Sign up and start growing your profit today!.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
