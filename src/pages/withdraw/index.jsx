import React, { useEffect, useState } from "react";
import "./index.css";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useGetUserBalanceQuery, useGetWithdrawalsQuery } from "state/api";
import { Box } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import Header from "components/header";

const loginSchema = yup.object().shape({
  amount: yup.string().required("required"),
  fwa: yup.string().required("required"),
  walletAddress: yup.string().required("required"),
});

const initialValuesBtc = {
  amount: "",
  fwa: "",
  walletAddress: "",
};

const Withdraw = () => {
  const [form, setForm] = useState("");
  const id = useSelector((state) => state.global.user?._id);
  const email = useSelector((state) => state.global.user?.email);
  const { data } = useGetWithdrawalsQuery(id);
  const { data: userGetBalance, isLoading } = useGetUserBalanceQuery(id);
  const [balance, setBalance] = useState();
  const [withdraw, setWithdraw] = useState([]);
  const [amount, setAmount] = useState("");
  const [fwa, setFwa] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    if (!isLoading || userGetBalance) {
      if (data === undefined || data === null  ) {
        setWithdraw([]);
      } else {
        setWithdraw(data.withdrawals);
        
      }
      setBalance(userGetBalance.currentBalance);
    }
  }, [data, isLoading, userGetBalance]);

  const handleBtcSubmit = async () => {
    try {
      if (fwa > balance || fwa < 0) {
        toast.error("withdrawal amount greater than current balance", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        const response = await fetch(
          `https://wealthgo-server.onrender.com/transactions/${id}/withdrawals`,
          {
            method: "POST",
            body: JSON.stringify({
              amount: fwa,
              emailId: email,
              paymentMethod: "BTC",
              walletAddress: walletAddress,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await response.json();
        setAmount("");
        setFwa("");
        setWalletAddress("");

        toast.success(`withdrawal of ${fwa} has been sent`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        console.log(data);
      }
    } catch (error) {
      if (error) {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const handleUsdtSubmit = async () => {
    try {
      if (fwa > balance || fwa < 0) {
        toast.error("withdrawal amount greater than current balance", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        const response = await fetch(
          `https://wealthgo-server.onrender.com/transactions/${id}/withdrawals`,
          {
            method: "POST",
            body: JSON.stringify({
              amount: fwa,
              emailId: email,
              paymentMethod: "USDT",
              walletAddress: walletAddress,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await response.json();
        setAmount("");
        setFwa("");
        setWalletAddress("");
        toast.success(`withdrawal of ${fwa} has been sent`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        console.log(data);
      }
    } catch (error) {
      if (error) {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const handleEthSubmit = async () => {
    try {
      if (fwa > balance || fwa < 0) {
        toast.error("withdrawal amount greater than current balance", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        const response = await fetch(
          `https://wealthgo-server.onrender.com/transactions/${id}/withdrawals`,
          {
            method: "POST",
            body: JSON.stringify({
              emailId: email,
              amount: fwa,
              paymentMethod: "ETH",
              walletAddress: walletAddress,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await response.json();
        toast.success(`withdrawal of ${fwa} has been sent`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

      console.log(data);
    } catch (error) {
      if (error) {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const columns = [
    {
      field: "_id",
      headerName: "Transaction ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "transactionType",
      headerName: "Transaction Type",
      width: 150,
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "amount",
      headerName: "Amount",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "paymentMethod",
      headerName: "Method",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "verification",
      headerName: "Verification",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      minWidth: 200,
      flex: 0.5,
    },
  ];

  const calculateFwa = (amount) => {
    let newamount = amount;
    newamount = amount - amount * 0.00;
    setFwa(newamount.toFixed(2));
    // return newamount;
  };
  return (
    <div className="withdraw">
      <div className="withdraw-container">
        <div className="withdraw-left">
          <h2 className="small-title">
            {" "}
            Current Balance :{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(balance)}
          </h2>

          <div className="withdrawal-form">
            <div className="withdraw-select">
              <label htmlFor="">Withdrawal Method</label>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setForm(e.target.value);
                  console.log(form);
                }}
              >
                <option value="">Select Method</option>
                <option value="usdt">USDT</option>
                <option value="eth">ETH</option>
                <option value="btc">BTC</option>
              </select>
            </div>

            {form === "btc" ? (
              <div className="withdraw-form">
                <div className="form_input">
                  <label htmlFor="">Withdraw Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      calculateFwa(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="form_input">
                  <label htmlFor=""> Withdraw Charge</label>
                  <input type="text" value={"5.0%"} disabled />
                </div> */}
                <div className="form_input">
                  <label htmlFor="">Final Withdraw Amount</label>
                  <input type="number" name="fwa" disabled value={fwa} />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Account Email/ BTC Wallet Address</label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => {
                      setWalletAddress(e.target.value);
                    }}
                    name="walletAddress"
                  />
                </div>
                <div className="btc-btn">
                  <button
                    // type="submit"
                    className="btc"
                    onClick={handleBtcSubmit}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            ) : form === "usdt" ? (
              <div className="withdraw-form">
                <div className="form_input">
                  <label htmlFor="">Withdraw Amount</label>
                  <input
                    type="number"
                    value={amount}
                    name="amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                      calculateFwa(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="form_input">
                  <label htmlFor=""> Withdraw Charge</label>
                  <input type="text" value={"0.0%"} disabled />
                </div> */}
                <div className="form_input">
                  <label htmlFor="fwa">Final Withdraw Amount</label>
                  <input type="number" name="fwa" disabled value={fwa} />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Account Email/ USDT Wallet Address</label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => {
                      setWalletAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="btc-btn">
                  <button className="btc" onClick={handleUsdtSubmit}>
                    Withdraw
                  </button>
                </div>
              </div>
            ) : form === "eth" ? (
              <div className="withdraw-form">
                <div className="form_input">
                  <label htmlFor="">Withdraw Amount</label>
                  <input
                    type="number"
                    name="amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                      calculateFwa(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="form_input">
                  <label htmlFor=""> Withdraw Charge</label>
                  <input type="text" value={"4.0%"} disabled />
                </div> */}
                <div className="form_input">
                  <label htmlFor="fwa">Final Withdraw Amount</label>
                  <input type="number" name="fwa" disabled value={fwa} />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Account Email/ ETH Wallet Address</label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => {
                      setWalletAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="btc-btn">
                  <button className="btc" onClick={handleEthSubmit}>
                    Withdraw
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="withdraw-right">
          <h5>Withdrawal Instruction</h5>
          <ol>
            <li>Submit your wallet address and you will get your withdrawal amount within 1 hour</li>
            
          </ol>
        </div>
      </div>
      <Box
        mt="40px"
        height="65vh"
        // maxWidth={"1200px"}
        // m="0 auto"
        width="98%"
        display="flex"
        flexDirection="column"
        gap="2rem"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#165e3b",
            color: "#fffff",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#f5f5f5",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#165e3b",
            color: "#165e3b",
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${"#165e3b"} !important`,
          },
        }}
      >
        <Header
          dashtitle="Withdrawal Logs"
          dashsub="List of withdrawal transactions"
        />
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          // rows={data.withdrawals || []}
          rows={withdraw !== undefined || withdraw !== null ? withdraw : []}
          columns={columns}
        />
      </Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Withdraw;