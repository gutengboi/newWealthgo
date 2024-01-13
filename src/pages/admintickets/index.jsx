import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/header";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useGetAllTicketsQuery } from "state/api";

const AdminTickets = () => {
  const id = useSelector((state) => state.global.user?._id);
  const { data, isLoading } = useGetAllTicketsQuery(id);
  const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    if (!isLoading || data) {
      setTicketsData(data);
    }
  }, [isLoading, data]);

  const handleUpdate = async (id, action) => {
    const response = await fetch(
      `https://wealthgo-server.onrender.com/tickets/update`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          ticketId: id,
          action: action,
        }),
      }
    );

    const data = await response.json();

    if (data) {
      setTicketsData(data);
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

  const renderCloseButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          sx={{
            fontSize: "0.75rem",
            textTransform: "Capitalize",
          }}
          disabled={params.row.status === "closed"}
          size="small"
          color="success"
          onClick={() => {
            const currentRow = params.row;
            handleUpdate(currentRow._id, "closed");
            // return console.log(currentRow);
          }}
        >
          Close Ticket
        </Button>
      </strong>
    );
  };

  const columns = [
    {
      field: "_id",
      headerName: "Ticket ID",
      minWidth: 200,
      flex: 0.2,
    },
    {
      field: "email",
      headerName: "Ticket ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
      minWidth: 200,
      flex: 0.4,
    },

    {
      field: "message",
      headerName: "Message",
      minWidth: 700,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Staus",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      minWidth: 250,
      flex: 0.5,
    },
    {
      field: "a",
      headerName: "Action",
      minWidth: 130,
      flex: 0.2,
      renderCell: renderCloseButton,
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
          rows={ticketsData || []}
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

export default AdminTickets;