import React, { useEffect, useState } from "react";
import "./index.css";
import usdt from "../../assets/qr.png";
import btc from "../../assets/btcqr.png";
import eth from "../../assets/ethqr.png";
import { useSelector } from "react-redux";
import { useDepositMutation } from "state/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useGetWalletsQuery } from "state/api";

const Usdt = () => {
  const email = useSelector((state) => state.global.user?.email);
  const { data, isLoading } = useGetWalletsQuery();
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [qr, setQr] = useState(null);
  const [wallet, setWallet] = useState("");
  const id = useSelector((state) => state.global.user?._id);
  const [deposit] = useDepositMutation();
  const navigate = useNavigate();

  useEffect(() => {
    let amount = localStorage.getItem("amount");
    let currency = localStorage.getItem("currency");

    amount = JSON.parse(amount);
    setAmount(amount);
    setCurrency(currency);
    if (!isLoading || data) {
      if (currency === "USDT") {
        setQr(data[0].usdtQr);
        setWallet(data[0].usdtWallet);
      } else if (currency === "BTC") {
        setQr(data[0].btcQr);
        setWallet(data[0].btcWallet);
      } else if (currency === "ETH") {
        setQr(data[0].ethQr);
        setWallet(data[0].ethWallet);
      } else {
        setQr(null);
      }
    }
  }, [isLoading, data]);

  const sendPayment = async () => {
    const response = await fetch(
      `https://wealthgo-server.onrender.com/transactions/${id}/deposit`,
      {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
          emailId: email,
          paymentMethod: currency,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const data = await response.json();

    setTimeout(() => {
      toast.success(`deposit of ${amount} has been made`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 3000);

    if (data) {
      navigate("/deposits");
      localStorage.removeItem("amount");
    }
  };

  return (
    <div className="usdt">
      <div className="usdt-container">
        <div className="bank-usdt">
          <h4 className="usdt-header">Bank payment information</h4>
          <div className="usdt-method">
            <p>Method</p>
            <p className="curr">{currency}</p>
          </div>
          <div className="usdt-steps">
            <h5>Steps to make a deposit:</h5>
            <ol className="usdt-list">
              <li> Copy the company wallet address below.</li>
              <li> Then go to your wallet app and make a payment.</li>
            </ol>
            <p>
              Wallet address: <span style={{ fontWeight: 600 }}>{wallet}</span>
            </p>
            <p>
              In a few minutes after payment, your balance would be updated.
            </p>
          </div>
          <div className="usdt-qr">
            <img src={qr} alt="" className="qr" />
          </div>
        </div>
        <div className="pay-usdt">
          <h4 className="usdt-header">Payment information</h4>
          <div className="usdt-method">
            <p>Gateway:</p>
            <p className="curr">{currency}</p>
          </div>
          <div className="usdt-method">
            <p>Amount:</p>
            <p className="curr">{amount} USD</p>
          </div>
          <div className="usdt-method">
            <p>Charge:</p>
            <p className="curr">0.00 USD</p>
          </div>
          {/* <div className="usdt-method">
            <p>Conversion:</p>
            <p className="curr">1 USD = 1.00000000</p>
          </div>
          <div className="usdt-method">
            <p>Total payable amount:</p>
            <p className="curr">5000.00000000 usdt</p>
          </div> */}
        </div>
      </div>
      <div className="usdt-paybtn">
        <button onClick={sendPayment}>Deposit now</button>
      </div>

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

export default Usdt;