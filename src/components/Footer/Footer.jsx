import React from "react";
import { Link, useNavigate } from "react-router-dom";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import twitter from "../../assets/twitter.svg";
import { Link as ScrollLink } from "react-scroll";
import "./footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h1>WealthGO</h1>
            <div className="footer-socials">
              <img src={fb} alt="" />
              <img src={ig} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>

          <div className="footer-links">
            <h6>USEFUL LINKS</h6>
            <ul>
              <li>
                <p onClick={() => navigate("/login")}>Login</p>
              </li>
              <li>
                <p onClick={() => navigate("/register")}>Sign Up</p>
              </li>
              <li>
                <Link> 
                <ScrollLink
              to="plans"
              spy={true}
              smooth={true}
              duration={200}
              className="some-class"
              activeClass="some-active-class">
                Investment Plans
                </ScrollLink></Link>
              </li>
              <li>
                <Link>
                <ScrollLink
              to="choose"
              spy={true}
              smooth={true}
              duration={200}
              className="some-class"
              activeClass="some-active-class">
                Mission
              </ScrollLink>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="footer-links">
            <h6>Support</h6>
            <ul>
              <li>
                <Link>
                <ScrollLink
              to="abouts"
              spy={true}
              smooth={true}
              duration={200}
              className="some-class"
              activeClass="some-active-class">
                About Us
                </ScrollLink>
                </Link>
              </li>
              <li>
                <Link>
                <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={200}
              className="some-class"
              activeClass="some-active-class">
              Contact
            </ScrollLink>
                </Link>
              </li>
              {/* <li>
                <Link> FAQS</Link>
              </li>   */}
            </ul>
          </div>
          <div className="footer-crypto">
            <h6>CRYPTO LIVE PRICES</h6>
            <coingecko-coin-list-widget
              coin-ids="bitcoin,ethereum,eos,ripple,litecoin"
              currency="usd"
              locale="en"
              //   width="100"
            ></coingecko-coin-list-widget>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="copyright">
            <h6>Copyright 2017-2023 ©️  All rights Reserved.</h6>
            <ul className="faq-links">
              <li>
                <Link>Terms and Condition</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="language">
            <h6>English</h6>
            <h6>USD</h6>
          </div>
        </div>

        <hr />
        <p className="description footer-desc">
          Contact Us: Rue de Toutes-Ames 1, 1204 Zurich Switzerland 
        </p>
      </div>
    </div>
  );
};

export default Footer;
