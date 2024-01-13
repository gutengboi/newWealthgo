import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import hero from "../../assets/tomato.png";
import mine from "../../assets/mine.png";
import realestate from "../../assets/realestate.png";
import "./index.css";

const HomeCarousel = () => {
  const navigate = useNavigate();

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 caro-img" src={hero} alt="First slide" />
        <Carousel.Caption>
          <h3 className="hero-title ">
            Investment in <span className="hero-color">Agriculture</span>
          </h3>
          <p className="hero-description">
          Join millions of people globally, to invest, manage and grow 
          cryptocurrencies the secure and seamless way. Sign up and start growing your profit today!
          </p>
          <button className="hero-btn" onClick={() => navigate("/register")}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 caro-img" src={mine} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="hero-title ">
            Investment in <span className="hero-color">Gold Mining </span>
          </h3>
          <p className="hero-description">
          We like to think of ourselves as superheroes here at WealthGo. We aren't in the 
          business of doing things just because they are routine. We are in the business of 
          creating solutions that are simply mind-blowing. 
          </p>
          <button className="hero-btn" onClick={() => navigate("/register")} >Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caro-img"
          src={realestate}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="hero-title ">
            Investment in <span className="hero-color">Real Estate</span>
          </h3>
          <p className="hero-description">
          WealthGo trade is aimed at providing investors a unique, safe and secured platform for
           investment. We have used cutting edge technologies with extensive infrastructure intented 
           to make things more convenient.
          </p>
          <button className="hero-btn" onClick={() => navigate("/register")}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
