import React, { useEffect } from "react";
import "./index.css";
import aboutpic from "../../assets/imx.jpg";
import avatar from "../../assets/ceo.jpeg";
import avatar2 from "../../assets/pam.jpeg";
import avatar3 from "../../assets/chin.jpeg";
const Aboutpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="aboutpage-header">
        <h1>
          ABOUT <span style={{ color: "#C48E02" }}>US</span>{" "}
        </h1>
      </div>
      <div className="about-pageContainer">
        <img src={aboutpic} className="abouts-img" alt="" />
        <div className="ourstory">
          <h3>WealthGo powers the cryptoeconomy</h3>
          <p className="our-story">
          Customers around the world discover and begin their
           journeys with crypto through WealthGo. Approximately 35k+ 
           verified users and 2000+ ecosystem partners in over 100 countries
            trust WealthGo to easily and securely invest, spend, save, earn, 
            and use crypto.
          </p>
        </div>
        <div className="aboutpage-textContainer">
          <div className="about-mission">
            <div className="mission-text">
              <h3>Mission</h3>
              <p>
              Our mission is to increase economic freedom in the world
              Everyone deserves access to financial services that can 
              help empower them to create a better life for themselves 
              and their families. If the world economy ran on a common 
              set of standards that could not be manipulated by any 
              company or country, the world would be a more fair and
               free place, and human progress would accelerate.
              </p>
            
            </div>
            {/* <img src={mission} alt="" className="mission-img" /> */}
          </div>
          {/* <div className="about-values">
            <img src={values} alt="values" className="mission-img" />
            <div className="mission-values">
              <h3>Our Values</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                omnis laboriosam, deleniti a expedita tenetur natus maxime error
                minus sunt praesentium facilis accusamus velit, architecto dolor
                quisquam rem iste unde!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                omnis laboriosam, deleniti
              </p>
            </div>
          </div> */}
          <div className="about-team">
            <h2 className="team-header">Our Executive Team</h2>
            <div className="team-container">
              <div className="team-leaders">
                <img src={avatar} alt="" className="team-exec" />
                <div className="leaders-text">
                  <h5>Schinecker Lechner</h5>
                  <p>Founder & Chief Executive Officer</p>
                </div>
              </div>
              <div className="team-leaders">
                <img src={avatar2} alt="" className="team-exec" />
                <div className="leaders-text">
                  <h5>Ivy Richard</h5>
                  <p>Investment Advisor</p>
                </div>
              </div>
              <div className="team-leaders">
                <img src={avatar3} alt="" className="team-exec" />
                <div className="leaders-text">
                  <h5>Neil Williams</h5>
                  <p>Chief Financial Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
