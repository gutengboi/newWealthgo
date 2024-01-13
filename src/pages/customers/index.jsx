import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/header";
import React from "react";
import { useSelector } from "react-redux";
import { useGetCustomersQuery } from "state/api";

const Customers = () => {
  const id = useSelector((state) => state.global.user?._id);
  const { data, isLoading } = useGetCustomersQuery(id);
  const columns = [
    {
      field: "_id",
      headerName: "TXID",
      minWidth: 200,
      flex: 0.8,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 150,
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "username",
      headerName: " Username",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "state",
      headerName: "State",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "country",
      headerName: "Country",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Joined",
      minWidth: 250,
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header dashtitle="Customers" dashsub="See your list of customers" />
      <Box
        mt="40px"
        height="75vh"
        // maxWidth={"1200px"}
        // m="0 auto"
        width="98%"
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
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
