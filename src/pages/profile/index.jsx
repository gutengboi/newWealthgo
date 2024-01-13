import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./index.css";
import avatar from "../../assets/avatar.jpg";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import state from "state";
import { useGetUserQuery } from "state/api";

const Profile = () => {
  const id = useSelector((state) => state.global.user?._id);
  const user = useSelector((state) => state.global.user);
  const token = useSelector((state) => state.global.token);

  const { data, isLoading } = useGetUserQuery(id);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    setEmail(data.email);
    setUsername(data.username);
    setFullName(data.fullName);
    setAddress(data.address);
    setCity(data.city);
    setState(data.state);
    setCountry(data.country);
  }, [data, isLoading]);

  const handleUpdate = async () => {
    const response = await fetch(
      `https://wealthgo-server.onrender.com/users/update/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          fullName: fullName,
          address: address,
          city: city,
          state: state,
          country: country,
        }),
      }
    );

    const data = await response.json();

    if (data) {
      toast.success(`Successfully update user inormation`, {
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
      toast.error(`invalid information could not update`, {
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
      <Header dashtitle="Profile" dashsub="Welcome to your profile." />
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
          <h3 className="small-title">Personal Information</h3>
          <div className="p-form">
            <div className="form_input">
              <label htmlFor="">Username</label>
              <input type="text" disabled value={username} />
            </div>
            <div className="form_input">
              <label htmlFor="">Email</label>
              <input type="email" value={email} disabled />
            </div>
            <div className="form_input">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                value={fullName}
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor=""> Address</label>
              <input
                type="text"
                value={address}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor=""> City</label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor=""> State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor=""> Country</label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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

export default Profile;
