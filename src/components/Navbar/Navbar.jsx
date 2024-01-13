import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { Close } from "@mui/icons-material";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const ScrollLink = Scroll.ScrollLink;
  const navigate = useNavigate();
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo" onClick={() => navigate("/")}>
          WealthGo
        </h1>
        <ul className="nav-links">
          <li className="nav-listItems">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-listItems">
            <ScrollLink
              to="abouts"
              spy={true}
              smooth={true}
              duration={200}
              className="some-class"
              activeClass="some-active-class"
            >
              About
            </ScrollLink>
          </li>
          <li className="nav-listItems">
            <ScrollLink
              to="plans"
              spy={true}
              smooth={true}
              duration={200}
              className="some-class"
              activeClass="some-active-class"
            >
              Plans
            </ScrollLink>
          </li>
          <li className="nav-listItems">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={200}
              className="some-class"
              activeClass="some-active-class"
            >
              Contact
            </ScrollLink>
          </li>
          <li className="nav-listItems">
            <button className="nav-btn" onClick={() => navigate("/login")}>
              Sign In
            </button>
          </li>
        </ul>
        <div className="nav-menu" onClick={toggleMenu}>
          <MenuIcon
            sx={{
              cursor: "pointer",
              color: "#5BA601",
            }}
          />
        </div>
        {toggle && (
          <div className="nav-menu-container">
            <div className="menu-cancel">
              <Close
                sx={{
                  fontSize: "30px",
                  color: "#5ba601",
                }}
                onClick={() => setToggle(false)}
              />
            </div>
            <div className="menu-links">
              <ul>
                <li className="menuLinkItems">
                  <Link to="/" onClick={() => setToggle(false)}>
                    Home
                  </Link>
                </li>
                <li className="menuLinkItems">
                  <ScrollLink
                    to="abouts"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="some-class"
                    activeClass="some-active-class"
                    onClick={() => setToggle(false)}
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="menuLinkItems">
                  <ScrollLink
                    to="plans"
                    spy={true}
                    smooth={true}
                    duration={200}
                    className="some-class"
                    activeClass="some-active-class"
                    onClick={() => setToggle(false)}
                  >
                    Plans
                  </ScrollLink>
                </li>
                <li className="menuLinkItems">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={200}
                    className="some-class"
                    activeClass="some-active-class"
                    onClick={() => setToggle(false)}
                  >
                    Contact
                  </ScrollLink>
                </li>
                <li className="menuLinkItems">
                  {" "}
                  <Link to="/login">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
