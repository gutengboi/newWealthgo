import React, { useEffect, useState } from "react";
import "./index.css";
import {
  AccountBalanceWallet,
  AccountBalance,
  WalletOutlined,
  AddCardOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useSelector } from "react-redux";
import { useGetUserDashboardQuery } from "state/api";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const id = useSelector((state) => state.global.user?._id);
  const navigate = useNavigate();

  const { data, isLoading } = useGetUserDashboardQuery(id);
  const [currentBalance, setCurrentBalance] = useState();
  const [pendingBalance, setPendingBalance] = useState();
  const [totalDeposits, setTotalDeposits] = useState();
  const [pendingDeposits, setPendingDeposits] = useState();
  const [totalWithdrawals, setTotalWithdrawals] = useState();
  const [pendingWithdrawals, setPendingWithdrawals] = useState();
  const [totalEarnings, setTotalEarnings] = useState();
  const [currPlanAmount, setCurrPlanAmount] = useState();
  const [activeInvestments, setActiveInvestments] = useState();
  const [plan, setPlan] = useState();

  useEffect(() => {
    if (!isLoading || data) {
      setCurrentBalance(data.currentBalance);
      setPendingBalance(data.pendingBalance);
      setTotalDeposits(data.totalDeposits);
      setPendingDeposits(data.pendingDeposits);
      setTotalWithdrawals(data.totalWithdrawals);
      setPendingWithdrawals(data.pendingWithdrawals);
      setTotalEarnings(data.totalEarnings);
      setCurrPlanAmount(data.currPlanAmount);
      setActiveInvestments(data.activeInvestments);
      setPlan(data.plan);
    }
  }, [isLoading, data]);

  console.log(data);
  // const {
  //   data: { withTotal },
  // } = useGetWithdrawalsQuery(id);
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-top-cards">
          <div className="dashboard-top-card">
            <FlexBetween>
              <AccountBalance
                sx={{
                  color: "#165e3b",
                  fontSize: "45px",
                }}
              />
              <p className="cards-text">Account Balance</p>
            </FlexBetween>
            <div className="card-mid-left">
              <p className="title">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(currentBalance)}
              </p>
            </div>
            <p className="p-dep">
              Pending Balance:{" "}
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(pendingBalance)}
              </span>
            </p>
          </div>

          <div
            className="dashboard-top-card"
            onClick={() => navigate("/deposits")}
          >
            <FlexBetween>
              <WalletOutlined
                sx={{
                  color: "#165e3b",
                  fontSize: "45px",
                }}
              />
              <p className="cards-text">Total Deposits</p>
            </FlexBetween>

            <div className="card-mid-left">
              <p className="title">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalDeposits)}
              </p>
            </div>
            <p className="p-dep">
              Pending Deposit:{" "}
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(pendingDeposits)}
              </span>
            </p>
          </div>
          <div
            className="dashboard-top-card"
            onClick={() => navigate("/withdraw")}
          >
            <FlexBetween>
              <AddCardOutlined
                sx={{
                  color: "#165e3b",
                  fontSize: "45px",
                }}
              />
              <p className="cards-text">Total Withdrawals</p>
            </FlexBetween>
            <div className="card-mid-left">
              <p className="title">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalWithdrawals)}
              </p>
            </div>
            <p className="p-dep">
              Pending Withdrawals:{" "}
              <span>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(pendingWithdrawals)}
              </span>
            </p>
          </div>
        </div>
        <div className="dashboard-mid-cards">
          <div
            className="dashboard-mid-card"
            onClick={() => navigate("/investment-logs")}
          >
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">
                  {" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(totalEarnings)}
                </h6>
                <p className="s">Total Earnings</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
          <div
            className="dashboard-mid-card"
            onClick={() => navigate("/investment-logs")}
          >
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(currPlanAmount)}
                </h6>
                <p className="s">Current Investment</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
          <div
            className="dashboard-mid-card"
            onClick={() => navigate("/investment-plans")}
          >
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">{plan}</h6>
                <p className="s">Current Plan</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-mid-cards">
          <div
            className="dashboard-mid-card"
            onClick={() => navigate("/investment-logs")}
          >
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">
                {" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(activeInvestments)}
              </h6>
              <p className="s">Total Running Investment</p>
            </div>
          </div>
          {/* <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">0</h6>
              <p className="s">Pending Withdrawal</p>
            </div>
          </div> */}
          {/* <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">0</h6>
              <p className="s">No of Referrals</p>
            </div>
          </div> */}
        </div>

        {/* <div className="referral">
          <h5 className="referral-title">Your Referrals Links</h5>
          <div className="referral-links">
            <input type="text" value="ABCDGRT" onChange={() => {}} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
