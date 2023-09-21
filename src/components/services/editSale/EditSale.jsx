import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import InputAdornment from "@mui/material/InputAdornment";
import {
  IconReceipt,
  IconTrash,
  IconSquareRoundedX,
  IconEdit,
  IconChevronLeft,
  IconAlertOctagonFilled,
} from "@tabler/icons-react";
import "./editsale.scss"

const EditSale = (props) => {
    const value1 = "DOZ";
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const current_date = `${month}/${date}/${year}`;
    const value = dayjs(current_date);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [openEntryDetails, setOpenEntryDetails] = useState(true);
    const [openSupplierPay, setOpenSupplierPay] = useState(false);
    const handleClick = () => {
      setOpenSupplierPay(!openSupplierPay);
      setOpenEntryDetails(!openEntryDetails);
    };
  return (
    <Box
    sx={{ width: 400 }}
    role="presentation"
  >
    {openEntryDetails ? (
      <div>
        <Box sx={{ width: 400 }} className="w-full">
          <h1 className="text_left heading">Sale Record Details</h1>
          <div className="customer-profile flex items-start px-4 py-6">
            <img
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-normal text-gray-700 -mt-1">
                  Rajat Kumar
                </h2>
              </div>
              <p className="text-gray-500  bg-slate-200 rounded-full text-center">
                18 Sep 2023
              </p>
            </div>
          </div>

          <div className="pay-edit-entry-btn-wrapper flex justify-center">
            <button
              className="edit-entry-btn flex gap-1 justify-center text-gray-600 bg-gray-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-gray-600 transition-all ease-in"
              type="submit"
              onClick={handleClick}
            >
              <IconEdit />
              Edit Entry
            </button>
          </div>

          <div className="supplier-pay-edit-section-wrapper">
            <div className="edit-section">
              <div className="flex card-sec">
                <div className="customer-info-icon-wrapper ">
                  <IconReceipt />
                </div>
                <div className="customer-info-text">
                  <h2>Sale</h2>
                  <p className=" font-medium">12 DOZ</p>
                </div>
              </div>

              <div className="flex card-sec">
                <div className="customer-info-icon-wrapper ">
                  <IconReceipt />
                </div>
                <div className="customer-info-text">
                  <h2>Notes</h2>
                  <p className=" font-medium"></p>
                </div>
              </div>
            </div>
          </div>
        </Box>

        <div className="add-customer-btn-wrapper flex justify-center">
          <button
            className="delete-btn text-red-600 flex gap-1 justify-center"
            type="submit"
            onClick={handleClickOpen}
          >
            <IconTrash />
            Delete Entry
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="flex">
              <div className="pt-5 pl-3">
                <IconAlertOctagonFilled size={60} className="text-red-600" />
              </div>
              <div>
                <DialogTitle id="alert-dialog-title">
                  Are You Sure ?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You are about to delete this Entry This action cannot
                    be undone.
                  </DialogContentText>
                </DialogContent>
                <DialogActions className="flex gap-4">
                  <button className="pb-3" onClick={handleClose}>
                    Cancel
                  </button>
                  <button
                    className="delete-btn text-red-600 pb-3 pr-3"
                    onClick={props.snackd}
                    autoFocus
                  >
                    Delete Entry
                  </button>
                </DialogActions>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    ) : (
      <div></div>
    )}
    {openSupplierPay ? (
      <>
        <div className="back-btn-wrapper ">
          <button
            className="back-btn flex gap-1 justify-center text-gray-600 bg-gray-200 w-full p-2 pl-0 rounded-[5px] hover:text-white hover:bg-gray-600 transition-all ease-in"
            type="submit"
            onClick={handleClick}
          >
            <IconChevronLeft />
            Back
          </button>
        </div>
        <div>
          <h1 className="text_left heading text-red-500 font-semibold text-lg">
            Edit sale record of the service
          </h1>

          <div className="product-stock-in-section-wrapper">
            <div className="section-2">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "95%" },
                }}
                noValidate
                autoComplete="off"
                className="w-full"
              >
                <Box className="box-sec">
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {value1}
                        </InputAdornment>
                      ),
                    }}
                    label="Enter quantity of services sold"
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full m-0"
                    size="small"
                    required
                  />
                </Box>

                <Box className="box-sec">
                  <TextField
                    label="Sale Price"
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full m-0"
                    size="small"
                    required
                  />
                </Box>

                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        label="Date"
                        value={value}
                        format="LL"
                        className="w-full"
                        maxDate={value}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>

                <Box className="box-sec">
                  <TextField
                    fullWidth
                    multiline
                    id="outlined-basic"
                    variant="outlined"
                    label="Description"
                    type="text"
                    placeholder="Enter Details (Party Name, Bill No etc)"
                    InputProps={{
                      rows: 4,
                    }}
                    className="w-full"
                  />
                </Box>
              </Box>
            </div>
          </div>

          <div className="supplier-pay-btn-wrapper bg-white">
            <button className="add_btn2 text-red-600" type="submit" onClick={props.snacku}>
              Update Record
            </button>
          </div>
        </div>
      </>
    ) : (
      <div></div>
    )}
  </Box>
  )
}

export default EditSale