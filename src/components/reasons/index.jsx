import React from "react";
import "./index.css";
import insurance from "../../assets/iglobe.png";
import trust from "../../assets/trust.png";
import easy from "../../assets/easy-to-use.png";
import support from "../../assets/support.png";
import active from "../../assets/24-7.png";
import guarantee from "../../assets/guarantee.png";



const Reasons = () => {
  return (
    <div className="reasons">
      <div className="reasons-container">
        <div className="reasons-header">
          <h2 className="title">What Differentiate Us From Other Companies</h2>
        </div>
        <div className="reasons-cards">
          {/* <div className="reasons-card">
            <img src={securecloud} alt="" />
            <div className="reason-text">
              <h4 className="rs-title">Secure Storage</h4>
              <p className="rs-desc">
                WEALTHGO has secured cloud storage, which is highly encryped
                with end to end encrypting technologies
              </p>
            </div>
          </div> */}
          <div className="reasons-card">
            <img src={insurance} alt="" width="64" height="64"  />
            <div className="reason-text">
              <h4 className="rs-title"> Registered company</h4>
              <p className="rs-desc">
              We are a legal company registered in the Switzerland providing
               its investment services to the members all around the worlds.
              </p>
            </div>
          </div>
          {/* <div className="reasons-card">
            <img src={best} alt="" />
            <div className="reason-text">
              <h4 className="rs-title">Industry best practices</h4>
              <p className="rs-desc">
                Our platform utilizes industry best practices to facilitate
                investment and is supported by a team of qualified advisors to
                offer guidance on the same.
              </p>
            </div>
          </div> */}
          <div className="reasons-card">
            <img src={trust} alt="" />
            <div className="reason-text">
              <h4 className="rs-title"> Secured and Trustworthy</h4>
              <p className="rs-desc">
                Trusted by millions globally for secured platform,
                 we are confident to say that your investment is in the right hand.
              </p>
            </div>
          </div>
          <div className="reasons-card">
            <img src={easy} alt="" />
            <div className="reason-text">
              <h4 className="rs-title"> WealthGo is easy-to-use</h4>
              <p className="rs-desc">
                Everyone loves an easy-to-use platform,
                that is why our top priority is you with seamless
                services you can enjoy without breaking a sweat.
              </p>
            </div>
          </div>
          <div className="reasons-card">
            <img src={guarantee} alt="" />
            <div className="reason-text">
              <h4 className="rs-title">WealthGo is built for you</h4>
              <p className="rs-desc">
                Everyone one of our services is built with you in mind,
                Beating our chest we can say we give you the best investment
                experience.
              </p>
            </div>
          </div>
          <div className="reasons-card">
            <img src={support} alt="" />
            <div className="reason-text">
              <h4 className="rs-title">WealthGo is customer focused</h4>
              <p className="rs-desc">
                We are committed to providing our customers with the highest 
                level of service and timely investment information
                .
              </p>
            </div>
          </div>
          <div className="reasons-card">
            <img src={active} alt="" />
            <div className="reason-text">
              <h4 className="rs-title"> WealthGO is active 24/7</h4>
              <p className="rs-desc">
                We work around the clock to provide our customers the best
                 experience on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
