import React from "react";
import Header from "components/header";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useGetUserInvestmentsQuery } from "state/api";
import { useSelector } from "react-redux";

const InvestmentPlans = () => {
  const id = useSelector((state) => state.global.user?._id);
  const { data, isLoading } = useGetUserInvestmentsQuery(id);
  const columns = [
    {
      field: "_id",
      headerName: "TXID",
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "planName",
      headerName: "Plan Type",
      width: 150,
      minWidth: 200,
      flex: 0.4,
    },

    {
      field: "investAmount",
      headerName: "Amount",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "interest",
      headerName: "Interest",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "paymentStat",
      headerName: "Status",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "createdAt",
      headerName: "Start Date",
      minWidth: 250,
      flex: 0.7,
    },
    {
      field: "expirationTime",
      headerName: "End Date",
      minWidth: 250,
      flex: 0.7,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        dashtitle="Investment Logs"
        dashsub="See your list of investments"
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
        />
      </Box>
    </Box>
  );
};

export default InvestmentPlans;