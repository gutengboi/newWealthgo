import React, { useState } from "react";
import Header from "components/header";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useGetTransactionsQuery } from "state/api";
import { useSelector } from "react-redux";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
const Transactions = () => {
  const id = useSelector((state) => state.global.user?._id);
  const { data, isLoading } = useGetTransactionsQuery(id);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const columns = [
    {
      field: "_id",
      headerName: "Transaction ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "transactionType",
      headerName: "Transaction Type",
      width: 150,
      minWidth: 200,
      flex: 0.4,
    },

    {
      field: "amount",
      headerName: "Amount",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "paymentMethod",
      headerName: "Method",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "verification",
      headerName: "Verification",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      minWidth: 200,
      flex: 0.5,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        dashtitle="TRANSACTIONS"
        dashsub="See your list of transactions"
      />
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
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;