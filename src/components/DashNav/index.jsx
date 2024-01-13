import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "../FlexBetween";
// import { useDispatch } from "react-redux";
// import { setMode } from "state";
import profileImage from "../../assets/avatar.jpg";
import {
  AppBar,
  Button,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { setLogout } from "state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  //   const dispatch = useDispatch();
  //   const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
        borderBottom: "0.5px solid #e2f0e9",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left Side */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon sx={{ color: "#165e3b", fontSize: "30px" }} />
          </IconButton>
          {/* <FlexBetween
            backgroundColor={"#f5f5f5"}
            borderRadius="9px"
            gap="1rem"
            p="0.1rem 1rem"
          >
            <InputBase
              placeholder="Search..."
              sx={{
                flexGrow: "1",
              }}
            />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween> */}
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap="1.5rem">
          {/* <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton> */}
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              {" "}
              <Box
                // component="img"
                // alt="profile"
                // src={profileImage}
                // height="32px"
                // width="32px"
                // borderRadius="50%"
                // sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: "#5ba601" }}
                >
                  {user.fullName}
                </Typography>
                {/* <Typography fontSize="0.75rem" sx={{ color: "#5ba601" }}>
                 
                  banker
                </Typography> */}
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: "#5ba601", fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <MenuItem
                onClick={() => {
                  dispatch(setLogout());
                  navigate("/login");
                }}
              >
                Log out
              </MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
