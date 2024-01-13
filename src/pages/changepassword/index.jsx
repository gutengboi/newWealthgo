import React, { useState } from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./index.css";
import avatar from "../../assets/avatar.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const ChangePassword = () => {
  const id = useSelector((state) => state.global.user?._id);
  const token = useSelector((state) => state.global.token);
  const user = useSelector((state) => state.global.user);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleUpdate = async () => {
    try {
      if (confirmpassword !== newPassword) {
        toast.error(`old new password and confirm password doesn't match`, {
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
          `https://wealthgo-server.onrender.com/users/changepassword/${id}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
              oldPassword: oldPassword,
              newPassword: newPassword,
            }),
          }
        );

        const data = await response.json();

        if (data.email) {
          toast.success(`Successfully updated password `, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setConfirmpassword("");
          setNewPassword("");
          setOldPassword("");
        } else {
          toast.error(`wrong old credentials`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setConfirmpassword("");
          setNewPassword("");
          setOldPassword("");
        }
      }
    } catch (error) {
      toast.error(`${error.message}`, {
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
    <Box m="1.5rem 2.5rem" className="changepass">
      <Header dashtitle="Update Password" dashsub="Change your passsword" />
      <Link to={user.role === "admin" ? "/edit-profile" : "/profile"}>
        <ArrowBackIcon sx={{ mt: "1rem" }} />
      </Link>
      <div className="profile-container">
        <div className="profile-left">
          {/* <div className="profile-avatar">
            <img src={avatar} alt="profile" />
          </div> */}
          <div className="profile-change">
            <Link
              to={
                user.role === "admin"
                  ? "/admin/changepassword"
                  : "/profile/changepassword"
              }
            >
              Change Password
            </Link>
          </div>
        </div>
        <div className="profile-form">
          <h3 className="small-title">Update Password</h3>
          <form className="p-form">
            <div className="form_input">
              <label htmlFor="">Old Password</label>
              <input
                type="password"
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor="">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor="">Update Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
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
          </form>
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

export default ChangePassword;
