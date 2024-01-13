import React, { useEffect, useState } from "react";
import "./index.css";
import {
  AccountBalanceWallet,
  AccountBalance,
  WalletOutlined,
  AddCardOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useGetAdminDashboardQuery } from "state/api";
import { useNavigate } from "react-router-dom";
const AdminDash = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetAdminDashboardQuery();
  const [currentBalance, setCurrentBalance] = useState();
  const [pendingBalance, setPendingBalance] = useState();
  const [totalDeposits, setTotalDeposits] = useState();
  const [pendingDeposits, setPendingDeposits] = useState();
  const [totalWithdrawals, setTotalWithdrawals] = useState();
  const [pendingWithdrawals, setPendingWithdrawals] = useState();
  const [customers, setCustomers] = useState();
  const [tickets, setTickets] = useState();
  const [pendingTickets, setPendingTickets] = useState();

  const [plan, setPlan] = useState();

  useEffect(() => {
    if (!isLoading || data) {
      setCurrentBalance(data.currentBalance);
      setPendingBalance(data.pendingBalance);
      setTotalDeposits(data.totalDeposits);
      setPendingDeposits(data.pendingDeposits);
      setTotalWithdrawals(data.totalWithdrawals);
      setPendingWithdrawals(data.pendingWithdrawals);
      setPendingTickets(data.pendingTickets);
      setCustomers(data.noOfUsers);
      setTickets(data.noOfTickets);

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
              <p className="cards-text">Generated Revenue</p>
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
            onClick={() => navigate("/all-transactions")}
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
            onClick={() => navigate("/all-transactions")}
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
            onClick={() => navigate("/customers")}
          >
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">
                  <Person2Outlined />
                  {customers}
                </h6>
                <p className="s">No of Customers</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
          <div
            className="dashboard-mid-card"
            onClick={() => navigate("/all-tickets")}
          >
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">{tickets} Tickets</h6>

                <p className="s">Open Tickets: {pendingTickets}</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
          <div
            className="dashboard-mid-card"
            onClick={() => navigate("/edit-profile")}
          >
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">Edit Profile</h6>
                <p className="s">Current Plan</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
