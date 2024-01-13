import React from "react";
import "./index.css";
import country from "../../assets/mining.png";
import farmer from "../../assets/about.png";
import aboutus from "../../assets/aboutus.jpeg";
import { useLocation, useNavigate } from "react-router-dom";
const About = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname, "hey", window.location.pathname);
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-img">
          <img className="about-illus" src={aboutus} alt="farmer-bro" />
        </div>
        <div className="about-text">
          <h5 className="subtitle">About Us</h5>
          <h2 className="title">
            We provide high quality investments products
          </h2>
          <p className="description">
            We are building the crypto economy – a more fair, accessible,
            efficient, and transparent financial system enabled by crypto. We
            started in 2017 with the radical idea that anyone, anywhere, should
            be able to easily and securely invest in Agriculture, Gold mining
            and Real estate through cryptocurrency. Today, we offer a trusted
            and easy-to-use platform for accessing the broader cryptoeconomy.
          </p>
          <div className="box">
            <button
              className="about-cta"
              onClick={() => {
                navigate("/about");
              }}
            >
              More about us
            </button>
            {/* <a class="button" href="#popup1">More about us</a> */}
          </div>
        </div>
      </div>
      {/* <div className="whychoose-container">
        <div className="whychoose-text">
          <h5 className="subtitle">Why Choose Us ?</h5>
          <h2 className="title">
            We provide high quality investments products
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            adipisci numquam sed culpa quaerat error ipsam id quo, dolor modi?
            Doloremque rerum nostrum ducimus minima aliquam quidem laboriosam
            eaque tenetur!
          </p>
          <div className="">
            <button className="about-cta">More info</button>
          </div>
        </div>
        <div className="whychoose-img">
          <img className="about-illus" src={country} alt="country-farm" />
        </div>
      </div> */}
    </div>
  );
};

export default About;
