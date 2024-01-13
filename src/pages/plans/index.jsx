import React, { useState, useEffect} from "react";
import Plans from "../../components/plans";
import Header from "components/header";
import { useGetUserBalanceQuery, useGetWithdrawalsQuery } from "state/api";

import "./index.css";
import crown from "../../assets/crown.png";
import silver from "../../assets/silver.png";

import {
  Modal,
  Box,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Plan = () => {
  const email = useSelector((state) => state.global.user?.email);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [amount, setAmount] = useState(0);
  const id = useSelector((state) => state.global.user?._id);
  const { data: userGetBalance, isLoading } = useGetUserBalanceQuery(id);
  const [balance, setBalance] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading || userGetBalance) {
      console.log(userGetBalance);
     
      setBalance(userGetBalance.currentBalance);
    }
  }, [ isLoading, userGetBalance]);

  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fffff",
    // border: "1px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    padding: "2rem 1.5rem",
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const subPlan1 = async () => {
    let amo = amount;
    if (amo > balance) {
      toast.error("Amount exceeds current balance", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    } else if (amo > 499 || amo < 30) {
      toast.error("Invalid Min or Max Amount", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    }else {
      const response = await fetch(
        `https://wealthgo-server.onrender.com/investments`,
        {
          method: "POST",
          body: JSON.stringify({
            customerId: id,
            email: email,
            planName: "plan1",
            investAmount: amo,
            percent: 0.1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();

      if (data) {
        setAmount("");
        handleClose();
        toast.success("Successfully Subscribed to Plan 1 ", {
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

  const subPlan2 = async () => {
    let amo = amount;
    if (amo > balance) {
      toast.error("Amount exceeds current balance", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    } else if (amo > 999 || amo < 499) {
      toast.error("Invalid Min or Max Amount", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    } else {
      const response = await fetch(
        `https://wealthgo-server.onrender.com/investments`,
        {
          method: "POST",
          body: JSON.stringify({
            customerId: id,
            email: email,
            planName: "plan2",
            investAmount: amo,
            percent: 0.3,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();

      if (data) {
        setAmount("");
        handleClose();
        toast.success("Successfully Subscribed to Plan 2 ", {
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
  const subPlan3 = async () => {
    let amo = amount;
    if (amo > balance) {
      toast.error("Amount exceeds current balance", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    } else if (amo > 4999 || amo < 1000) {
      toast.error("Invalid Min or Max Amount", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    }else {
      const response = await fetch(
        `https://wealthgo-server.onrender.com/investments`,
        {
          method: "POST",
          body: JSON.stringify({
            customerId: id,
            email: email,
            planName: "plan3",
            investAmount: amo,
            percent: 0.6,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();

      if (data) {
        setAmount("");
        handleClose();
        toast.success("Successfully Subscribed to Plan 3 ", {
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
  const subPlan4 = async () => {
    let amo = amount;
    if (amo > balance) {
      toast.error("Amount exceeds current balance", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    } else if (amo < 5000) {
      toast.error("Invalid Min or Max Amount", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      handleClose();
      setAmount("");
    } else {
      const response = await fetch(
        `https://wealthgo-server.onrender.com/investments`,
        {
          method: "POST",
          body: JSON.stringify({
            customerId: id,
            email: email,
            planName: "plan4",
            investAmount: amo,
            percent: 1.0,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();

      if (data) {
        setAmount("");
        handleClose();
        toast.success("Successfully Subscribed to Plan 4 ", {
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

  return (
    <div className="plan-page">
      <div className="plan-pageContainer">
        <Header dashtitle="Choose your plans" dashsub="make good profits!!!" />

        <div className="planpage-cardContainer">
          <div className="planpage-cards">
            <div className="planpage-card">
              <h5>plan 1</h5>
              <h1 className="plan-per">10%</h1>
              <div className="plan-details">
                <p>AFTER 24 HOURS </p>
                <p>Minimum Deposit: $30 </p>
                <p>Maximum deposit: $499 </p>
                <p> PRINCIPAL RETURN</p>
              </div>
              <div className="plan-page-btn">
                <button onClick={handleOpen}>Invest With Balance</button>
              </div>
            </div>
          </div>
          <div className="planpage-cards">
            <div className="planpage-card">
              <h5>plan 2</h5>
              <h1 className="plan-per">30%</h1>
              <div className="plan-details">
                <p>AFTER 24 HOURS </p>
                <p>Minimum Deposit : $500 </p>
                <p>Maximum deposit : $999 </p>
                <p> PRINCIPAL RETURN</p>
              </div>
              <div className="plan-page-btn">
                <button onClick={handleOpen1}>Invest With Balance</button>
              </div>
            </div>
           
          </div>
          <div className="planpage-cards">
            <div className="planpage-card">
              <h5>plan 3</h5>
              <h1 className="plan-per">60%</h1>
              <div className="plan-details">
                <p>AFTER 48 HOURS </p>
                <p>Minimum Deposit : $1000 </p>
                <p>Maximum deposit : $4999 </p>
                <p> PRINCIPAL RETURN</p>
              </div>
              <div className="plan-page-btn">
                <button onClick={handleOpen2}>Invest With Balance</button>
              </div>
            </div>
            
          </div>
          <div className="planpage-cards">
            <div className="planpage-card">
              <h5>plan 4</h5>
              <h1 className="plan-per">100%</h1>
              <div className="plan-details">
                <p>AFTER 72 HOURS </p>
                <p>Minimum Deposit : $5000 </p>
                <p>Maximum deposit : Unlimited </p>
                <p> PRINCIPAL RETURN</p>
              </div>
              <div className="plan-page-btn">
                <button onClick={handleOpen3}>Invest With Balance</button>
              </div>
            </div>
            
          </div>
        </div>

        <Modal open={open} onClose={handleClose}>
          <Box style={style} bgcolor="#ffffff">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Investment Amount
            </Typography>
            <FormControl fullWidth sx={{ mt: 2.5, ml: 0 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              justifyContent="flex-end"
              m="1rem"
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <Button onClick={subPlan1} variant="contained" color="success">
                Invest
              </Button>
            </Box>
          </Box>
        </Modal>
        <Modal open={open1} onClose={handleClose}>
          <Box style={style} bgcolor="#ffffff">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Investment Amount
            </Typography>
            <FormControl fullWidth sx={{ mt: 2.5, ml: 0 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              justifyContent="flex-end"
              m="1rem"
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <Button onClick={subPlan2} variant="contained" color="success">
                Invest
              </Button>
            </Box>
          </Box>
        </Modal>
        <Modal open={open2} onClose={handleClose}>
          <Box style={style} bgcolor="#ffffff">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Investment Amount
            </Typography>
            <FormControl fullWidth sx={{ mt: 2.5, ml: 0 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              justifyContent="flex-end"
              m="1rem"
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <Button onClick={subPlan3} variant="contained" color="success">
                Invest
              </Button>
            </Box>
          </Box>
        </Modal>
        <Modal open={open3} onClose={handleClose}>
          <Box style={style} bgcolor="#ffffff">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Investment Amount
            </Typography>
            <FormControl fullWidth sx={{ mt: 2.5, ml: 0 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              justifyContent="flex-end"
              m="1rem"
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <Button onClick={subPlan4} variant="contained" color="success">
                Invest
              </Button>
            </Box>
          </Box>
        </Modal>

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
    </div>
  );
};

export default Plan;