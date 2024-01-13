import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/header";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTicketsQuery } from "state/api";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Support = () => {
  const id = useSelector((state) => state.global.user?._id);
  const email = useSelector((state) => state.global.user?.email);
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [tickets, setTickets] = useState([]);

  const { data, isLoading } = useGetTicketsQuery(id);

  useEffect(() => {
    if (!isLoading || data) {
      setTickets(data.tickets);
    }
  }, [isLoading, data]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 700,
    bgcolor: "#fffff",
    // border: "1px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    padding: "2rem 1.5rem",
  };

  const columns = [
    {
      field: "_id",
      headerName: "Ticket ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 150,
      minWidth: 200,
      flex: 0.8,
    },

    {
      field: "message",
      headerName: "Message",
      minWidth: 700,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      minWidth: 250,
      flex: 0.5,
    },
  ];

  const submitTicket = async () => {
    try {
      if (subject === "" || message === "") {
        toast.error("Subject or message is empty", {
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
        const response = await fetch(
          `https://wealthgo-server-wealthgo.onrender.com/tickets/${id}`,
          {
            method: "POST",
            body: JSON.stringify({
              customerId: id,
              email: email,
              subject: subject,
              message: message,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const data = await response.json();
        if (data) {
          toast.success(`Ticket has been successfully opened`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setMessage("");
          setSubject("");
          handleClose();
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
      }
    } catch (error) {
      toast.error(`${error.message}`, {
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
      <Header dashtitle="TICKETS" dashsub="Log your tickets" />
      <Box m="2rem 0">
        <FlexBetween>
          <h5>Need help with anything create and log a ticket</h5>
          <Button variant="contained" color="success" onClick={handleOpen}>
            Create A ticket
          </Button>
        </FlexBetween>
        <Modal open={open} onClose={handleClose}>
          <Box style={style} bgcolor="#ffffff">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Tickets
            </Typography>
            <FormControl fullWidth sx={{ mt: 2.5, ml: 0 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Subject
              </InputLabel>
              <OutlinedInput
                label="sunject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 2.5, ml: 0 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Message
              </InputLabel>
              <OutlinedInput
                label="message"
                multiline={true}
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              justifyContent="flex-end"
              m="1rem"
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <Button
                onClick={submitTicket}
                variant="contained"
                color="success"
              >
                Log Ticket
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
      <Box
        mt="40px"
        height="55vh"
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
          rows={tickets || []}
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

export default Support;
