import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import DashNav from "../../components/DashNav";
import Sidebar from "../../components/sidebar";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { InfinitySpin } from "react-loader-spinner";

const DashboardLayout = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [response, setResponse] = useState({});
  const navigate = useNavigate();
  const token = useSelector((state) => state.global?.token);
  const id = useSelector((state) => state.global.user?._id);
  const user = useSelector((state) => state.global?.user);
  const { data, isLoading } = useGetUserQuery(id ? id : skipToken);

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }

    if (data || !isLoading) {
      // setResponse(data);
      console.log(data);
    }
  }, [token, navigate, data]);

  if (!isLoading && data?._id !== id) return null;
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="280px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <DashNav
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {data || !isLoading ? (
          <Outlet />
        ) : (
          <>
            <Box
              display="flex"
              height="80vh"
              alignItems="center"
              justifyContent="center"
            >
              <InfinitySpin width="200" color="green" />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
