import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {
  ChevronLeft,
  SettingsOutlined,
  HomeOutlined,
  ChevronRightOutlined,
  ReceiptLongOutlined,
  BarChart,
  SupportAgent,
  PersonOutlineOutlined,
} from "@mui/icons-material";

import FlexBetween from "../FlexBetween";
import avatar from "../../assets/avatar.jpg";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },

  {
    text: "Investment-plans",
    icon: <BarChart />,
  },
  {
    text: "Deposits",
    icon: <PaymentsIcon />,
  },
  {
    text: "Withdraw",
    icon: <AccountBalanceIcon />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },

  {
    text: "Profile",
    icon: <PersonOutlineOutlined />,
  },
  {
    text: "Support",
    icon: <SupportAgent />,
  },
];

const Sidebar = ({
  isSidebarOpen,
  user,
  setIsSidebarOpen,
  drawerWidth,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: "#fff",
              backgroundColor: "#165e3b",
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color="#fff">
                <Box
                  display="flex"
                  alignItems="center"
                  gap="0.5rem"
                  marginLeft="-30px"
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    fontFamily="  'Goldman', cursive;"
                  >
                    WEALTHGO
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography
                      key={text}
                      sx={{
                        m: "2.5rem 0 1rem 3rem",
                      }}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? "#5ba601" : "transparent",
                        color: active === lcText ? "#fff" : "#fff",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color: active === lcText ? "#fff" : "#fff",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                // component="img"
                // alt="profile"
                // src={avatar}
                // height="40px"
                // width="40px"
                // borderRadius="50%"
                // sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  //   sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.username}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  //   sx={{ color: theme.palette.secondary[100] }}
                >
                  {/* {user.occupation} */}
                  Investor
                </Typography>
              </Box>
              {/* <SettingsOutlined
              // sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              /> */}
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
