import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/header";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useGetAllTransactionsQuery } from "state/api";

const AdminTransactions = () => {
  const id = useSelector((state) => state.global.user?._id);
  const { data, isLoading } = useGetAllTransactionsQuery(id);
  const [trasanctionData, setTrasanctionData] = useState([]);

  useEffect(() => {
    if (!isLoading || data) {
      setTrasanctionData(data);
    }
  }, [isLoading, data]);

  const handleUpdate = async (id, email, amount, action) => {
    const response = await fetch(
      `https://wealthgo-server.onrender.com/transactions/update`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          transactionId: id,
          action: action,
          userEmail: email,
          tramount: amount,
        }),
      }
    );

    const data = await response.json();

    if (data) {
      setTrasanctionData(data);
      toast.success(`${action} transaction `, {
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
      toast.error(`Something went wrong`, {
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

  const renderApprovedButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{
            fontSize: "0.75rem",
            textTransform: "Capitalize",
          }}
          disabled={
            params.row.verification === "canceled" ||
            params.row.verification === "approved"
          }
          size="small"
          color="success"
          onClick={() => {
            const currentRow = params.row;
            handleUpdate(
              currentRow._id,
              currentRow.emailId,
              currentRow.amount,
              "approved"
            );
            // return console.log(currentRow);
          }}
        >
          approve
        </Button>
      </strong>
    );
  };
  const renderCancelButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{
            fontSize: "0.75rem",
            textTransform: "Capitalize",
          }}
          size="small"
          color="error"
          disabled={
            params.row.verification === "canceled" ||
            params.row.verification === "approved"
          }
          onClick={() => {
            const currentRow = params.row;
            console.log(currentRow._id);
            handleUpdate(
              currentRow._id,
              currentRow.emailId,
              currentRow.amount,
              "canceled"
            );
            // return console.log(currentRow);
          }}
        >
          cancel
        </Button>
      </strong>
    );
  };
  const columns = [
    {
      field: "_id",
      headerName: "Transaction ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "emailId",
      headerName: "Email",
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
      renderCell: (params) => {
        return params.value.toFixed(2);
      },
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
      minWidth: 250,
      flex: 0.5,
    },
    {
      field: "",
      headerName: "Action",
      minWidth: 100,
      flex: 0.2,
      renderCell: renderApprovedButton,
      disableClickEventBubbling: true,
    },
    {
      field: "a",
      headerName: "Action",
      minWidth: 100,
      flex: 0.2,
      renderCell: renderCancelButton,
      disableClickEventBubbling: true,
    },
  ];
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        dashtitle="Transactions"
        dashsub="See your list of customers transactions"
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
          rows={trasanctionData || []}
          columns={columns}
        />
      </Box>
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

export default AdminTransactions;