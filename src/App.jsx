import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Faqs from "./pages/faq";
import AuthLayout from "./pages/AuthLayout";
import Login from "./components/login";
import Register from "./components/register";
import DashboardLayout from "./pages/DashboardLayout";
import Profile from "./pages/profile";
import Transactions from "./pages/transactions";
import Dashboard from "./pages/dashboard";
import Deposits from "./pages/deposits";
import Usdt from "./pages/usdt";
import Withdraw from "./pages/withdraw";
import Plan from "./pages/plans";
import ChangePassword from "./pages/changepassword";
import VerifyEmail from "./components/verifyEmail";
import InvestmentPlans from "pages/investmentlogs";
import Aboutpage from "pages/AboutPage";
import Support from "pages/support";
import AdminLogin from "pages/adminlogin";
import AdminLayout from "pages/AdminLayout";
import Customers from "pages/customers";
import AdminDash from "pages/admindash";
import AdminTransactions from "pages/admintransactions";
import AdminTickets from "pages/admintickets";
import Wallet from "pages/wallets";
import ForgotPassword from "components/forgotPassword";
import ForgotVerify from "components/forgotverify";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/faq" element={<Faqs />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/register" element={<VerifyEmail />} />
            <Route path="/register/verify" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-password/verify" element={<ForgotVerify />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/deposits/payment" element={<Usdt />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />
            <Route
              path="/profile/changepassword"
              element={<ChangePassword />}
            />
            <Route path="/investment-plans" element={<Plan />} />

            <Route path="/investment-logs" element={<InvestmentPlans />} />

            <Route path="/transactions" element={<Transactions />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin-dashboard" element={<AdminDash />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/all-transactions" element={<AdminTransactions />} />
            <Route path="/wallets" element={<Wallet />} />
            <Route path="/edit-profile" element={<Profile />} />
            <Route path="/all-tickets" element={<AdminTickets />} />
            <Route path="/admin/changepassword" element={<ChangePassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
