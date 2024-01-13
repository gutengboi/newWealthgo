import React, { useEffect, useState } from "react";

import { Box, Button } from "@mui/material";
import "./index.css";

import { ToastContainer, toast } from "react-toastify";

import { useGetWalletsQuery } from "state/api";

const Wallet = () => {
  const { data, isLoading } = useGetWalletsQuery();
  const [walletId, setWalletId] = useState("");
  const [btcQr, setBtcQr] = useState("");
  const [btcWallet, setBtcWallet] = useState("");
  const [ethQr, setEthQr] = useState("");
  const [ethWallet, setEthWallet] = useState("");
  const [usdtQr, setUsdtQr] = useState("");
  const [usdtWallet, setUsdtWallet] = useState("");

  useEffect(() => {
    if (!isLoading || data) {
      setWalletId(data[0]._id);
      setBtcQr(data[0].btcQr);
      setBtcWallet(data[0].btcWallet);
      setEthQr(data[0].ethQr);
      setEthWallet(data[0].ethWallet);
      setUsdtQr(data[0].usdtQr);
      setUsdtWallet(data[0].usdtWallet);
    }
  }, [data, isLoading]);

  const handleUpdate = async () => {
    const response = await fetch(`https://wealthgo-server.onrender.com/wallet/`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        walletId: walletId,
        btcQr: btcQr,
        btcWallet: btcWallet,
        ethQr: ethQr,
        ethWallet: ethWallet,
        usdtQr: usdtQr,
        usdtWallet: usdtWallet,
      }),
    });

    const data = await response.json();

    if (data) {
      toast.success(`Successfully update wallet inormation`, {
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
      toast.error(`wallet information could not be updated`, {
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
  };

  return (
    <Box m="1.5rem 2.5rem">
      <div className="profile-container">
        <div className="profile-form">
          <h3 className="small-title">Wallet Information</h3>
          <div className="p-form">
            <div className="form_input">
              <label htmlFor="">BTC QR</label>
              <input type="text" 
              name="btcQr" 
              value={btcQr}
              onChange={(e) => setBtcQr(e.target.value)}
               />
            </div>
            <div className="form_input">
              <label htmlFor="">BTC WALLET</label>
              <input type="email" 
              name="btcWallet" 
              value={btcWallet}
              onChange={(e) => setBtcWallet(e.target.value)} 
              />
            </div>
            <div className="form_input">
              <label htmlFor="">ETH QR</label>
              <input
                type="text"
                value={ethQr}
                name="ethQr"
                onChange={(e) => setEthQr(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor=""> ETH Wallet</label>
              <input
                type="text"
                value={ethWallet}
                name="ethWallet"
                onChange={(e) => setEthWallet(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor="">USDT QR</label>
              <input
                type="text"
                name="usdtQr"
                value={usdtQr}
                onChange={(e) => setUsdtQr(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor="">USDT WALLET</label>
              <input
                type="text"
                value={usdtWallet}
                name="usdtWallet"
                onChange={(e) => setUsdtWallet(e.target.value)}
              />
            </div>

            <Button
              sx={{
                width: "100px",
                backgroundColor: "#165e3b",
              }}
              variant="contained"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </div>
        </div>
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
    </Box>
  );
};

export default Wallet;
