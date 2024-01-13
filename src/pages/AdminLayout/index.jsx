import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import DashNav from "../../components/DashNav";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { InfinitySpin } from "react-loader-spinner";
import AdminSidebar from "components/adminsidebar";
import { setLogout } from "state";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const token = useSelector((state) => state.global?.token);
  const id = useSelector((state) => state.global.user?._id);
  const user = useSelector((state) => state.global.user);
  const { data, isLoading } = useGetUserQuery(id ? id : skipToken);

  useEffect(() => {
    if (token === null && user.role !== "admin") {
      dispatch(setLogout());
      navigate("/login");
    }

    if (data || !isLoading) {
      // setResponse(data);
      console.log(data);
    }
  }, [token, navigate, data, isLoading]);

  if (!isLoading && data?._id !== id) return null;
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <AdminSidebar
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

export default AdminLayout;
