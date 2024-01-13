import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const LoginBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="loginbanner">
      <div className="loginbanner-container">
        <div className="loginbanner-header">
          <h1 className="title">
          Referral Commission 5%
          </h1>
          <p className="description1">
          Become WealthGo affiliate and enjoy high commissions 
          for lifetime; You’ll earn 5% commission every time if
           your downline made a deposit. There is no limitation
            for the commission.
          </p>
        </div>
        <div className="">
          <button className="loginbanner-btn" onClick={() => navigate("/register")}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
