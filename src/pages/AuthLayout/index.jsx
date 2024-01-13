import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./index.css";
const AuthLayout = () => {
  return (
    <div className="authlayout">
      <div className="auth-left">
        <div className="left-inner">
          <div className="company-logo">
            <h1 className="auth-logo">
              <Link to="/">WEALTHGO</Link>
            </h1>
          </div>
          <div className="auth-text">
            <h2 className="auth-title">
              Are my funds & assets safe on WealthGo?
            </h2>
            <p className="">
              Yes, users funds and properties are held in trust by WealthGo trustees according to SEC regulatory guideline to protect
              against fraud or mismanagement
            </p>
          </div>
        </div>
      </div>
      <div className="auth-container">
        <div className="auth-inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
