import React from "react";
import contact from "../../assets/contact.png";
import "./index.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2 className="title">Get information about us</h2>
          <p className="description">what are you looking for ?</p>

          <div className="contact-form">
            <input
              type="text"
              className="contact-email"
              placeholder="Enter you email...."
            />
            <button className="contact-btn">Submit</button>
          </div>
        </div>
        {/* <div className="contact-illus">
          <img src={contact} alt="" className="contact-img" />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
