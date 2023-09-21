import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import "./editsup.scss"




import TextField from "@mui/material/TextField";

import Checkbox from "@mui/material/Checkbox";

import {
  IconPhoneCall,
  IconMapPin,
  IconReceipt,
  IconTrash,
  IconSquareRoundedX,
  IconEdit,
  IconChevronLeft,
  IconAlertOctagonFilled,
} from "@tabler/icons-react";

const EditSup = (props) => {

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [isChecked2, setIsChecked2] = useState(false);
  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const label1 = { inputProps: { "aria-label": "Checkbox demo" } };
  const [select, setSelect] = useState(false);

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
    <div>
    {openEntryDetails ? (
        <div>
          <div>
            <Box sx={{ width: 400 }} className="w-full">
              <h1 className="text_left heading">Edit Supplier</h1>
              <div className="customer-profile flex items-start px-4 py-6">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                  src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="avatar"
                />
                <div className="">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-normal text-gray-700 -mt-1">
                      Raman Garg
                    </h2>
                  </div>
                  <p className="text-gray-500  bg-slate-200 rounded-full text-center">
                    Supplier
                  </p>
                </div>
              </div>
              <div className="supplier-edit-btn-wrapper flex justify-center">
                <button
                  className="supplier-edit-btn flex gap-1 justify-center text-gray-600 bg-gray-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-gray-600 transition-all ease-in"
                  type="submit"
                  onClick={handleClick}
                >
                  <IconEdit />
                  Edit Entry
                </button>
              </div>
              <div className="supplier-edit-section-wrapper">
                <div className="edit-section">
                  <div className="flex card-sec">
                    <div className="customer-info-icon-wrapper ">
                      <IconPhoneCall />
                    </div>
                    <div className="customer-info-text">
                      <h2>Phone Number</h2>
                      <p className=" font-medium">234234876</p>
                    </div>
                  </div>

                  <div className="flex card-sec">
                    <div className="customer-info-icon-wrapper ">
                      <IconReceipt />
                    </div>
                    <div className="customer-info-text">
                      <h2>GST Number</h2>
                      <p className=" font-medium">29ABCDE1234TMZP</p>
                    </div>
                  </div>

                  <div className="flex card-sec">
                    <div className="customer-info-icon-wrapper ">
                      <IconMapPin />
                    </div>
                    <div className="customer-info-text">
                      <h2>Shipping Address</h2>
                      <p className=" font-medium">
                        22, 6th Cross Street, Basavanagudi, Bangalore,
                        KARNATAKA, 560004
                      </p>
                    </div>
                  </div>

                  <div className="flex card-sec">
                    <div className="customer-info-icon-wrapper ">
                      <IconMapPin />
                    </div>
                    <div className="customer-info-text">
                      <h2>Billing Address</h2>
                      <p className=" font-medium">
                        7/11, Hauz Khas, New Delhi, DELHI, 110016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="add-customer-btn-wrapper flex justify-center">
            <button
              className="delete-btn text-red-600 flex gap-1 justify-center"
              type="submit"
              onClick={handleClickOpen}
            >
              <IconTrash />
              Delete Customer
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
                      You are about to delete this supplier This action cannot
                      be undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions className="flex gap-4">
                    <button className="pb-3" onClick={handleClose}>
                      Cancel
                    </button>
                    <button
                      className="delete-btn text-red-600 pb-3 pr-3"
                      onClick={props.snack}
                      autoFocus
                    >
                      Delete Customer
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
            <div>
              <Box
                
              >
                <h1 className="text_left heading">Edit Supplier</h1>
                <div className="section-wrapper-2">
                  <div className="section-2">
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "97%" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <Box className="box-sec">
                        <TextField
                          label="Name"
                          id="outlined-basic"
                          variant="outlined"
                          className="w-full"
                          size="small"
                          required
                        />
                      </Box>

                      <Box className="box-sec">
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          label="Phone Number"
                          type="tel"
                          className="w-full"
                          size="small"
                          required
                        />
                      </Box>

                      <Box className="box-sec ">
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          label="Enter amount"
                          className="sec-1"
                          size="small"
                          required
                        />
                        <select
                          className={
                            select
                              ? "text-green-600 bg-white p-1 sel"
                              : "text-red-600 bg-white p-1 sel"
                          }
                        >
                          <option value={10} onClick={() => setSelect(false)}>
                            Pay
                          </option>
                          <option value={20} onClick={() => setSelect(true)}>
                            Receive
                          </option>
                        </select>
                      </Box>
                    </Box>
                    <Box className="box-sec check-box-sec">
                      <Checkbox {...label} onChange={handleOnChange} />
                      <span>Add GSTIN & GST</span>
                    </Box>

                    {isChecked ? (
                      <>
                        <Box
                          component="form"
                          sx={{
                            "& > :not(style)": { m: 1, width: "97%" },
                          }}
                          noValidate
                          autoComplete="off"
                          className="box-sec-2"
                        >
                          <Box className="box-sec ">
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              label="GST IN"
                              className="w-full"
                              size="small"
                            />
                          </Box>
                          <p className="text-xl font-semibold">
                            Shipping Address
                          </p>
                          <Box className="box-sec">
                            <TextField
                              id="outlined-basic"
                              label="Flat / Building Number"
                              variant="outlined"
                              className="w-full"
                              size="small"
                            />
                          </Box>

                          <Box className="box-sec">
                            <TextField
                              id="outlined-basic"
                              label="Area / Locality"
                              variant="outlined"
                              className="w-full"
                              size="small"
                            />
                          </Box>
                          <Box className="box-sec">
                            <TextField
                              id="outlined-basic"
                              label="Area / Locality"
                              variant="outlined"
                              className="w-full"
                              size="small"
                            />
                          </Box>
                          <Box className="box-sec">
                            <TextField
                              id="outlined-basic"
                              label="PIN Code"
                              variant="outlined"
                              className="w-full"
                              size="small"
                            />
                          </Box>
                          <Box className="box-sec">
                            <TextField
                              id="outlined-basic"
                              label="City"
                              variant="outlined"
                              className="sec-1 w-full"
                              size="small"
                            />

                            <TextField
                              id="outlined-basic"
                              label="State"
                              variant="outlined"
                              className="sec-2"
                              size="small"
                            />
                          </Box>
                        </Box>
                        <Box className="box-sec check-box-sec text-center ">
                          <Checkbox
                            {...label1}
                            onChange={handleOnChange2}
                            defaultChecked
                          />
                          <span>Billing Address</span>
                        </Box>

                        {isChecked2 ? (
                          <Box
                            component="form"
                            sx={{
                              "& > :not(style)": { m: 1, width: "97%" },
                            }}
                            noValidate
                            autoComplete="off"
                            className="box-sec-2"
                          >
                            <p className="text_left">Billing Address</p>
                            <Box className="box-sec">
                              <TextField
                                id="outlined-basic"
                                label="Flat / Building Number"
                                variant="outlined"
                                className="w-full"
                                size="small"
                              />
                            </Box>

                            <Box className="box-sec">
                              <TextField
                                id="outlined-basic"
                                label="Area / Locality"
                                variant="outlined"
                                className="w-full"
                                size="small"
                              />
                            </Box>
                            <Box className="box-sec">
                              <TextField
                                id="outlined-basic"
                                label="Area / Locality"
                                variant="outlined"
                                className="w-full"
                                size="small"
                              />
                            </Box>
                            <Box className="box-sec">
                              <TextField
                                id="outlined-basic"
                                label="PIN Code"
                                variant="outlined"
                                className="w-full"
                                size="small"
                              />
                            </Box>
                            <Box className="box-sec">
                              <TextField
                                id="outlined-basic"
                                label="City"
                                variant="outlined"
                                className="sec-1"
                                size="small"
                              />

                              <TextField
                                id="outlined-basic"
                                label="State"
                                variant="outlined"
                                className="sec-2"
                                size="small"
                              />
                            </Box>
                          </Box>
                        ) : (
                          <div></div>
                        )}
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </Box>
            </div>
            <div className="add-customer-btn-wrapper1 bg-white z-50">
              <button className="text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in" onClick={props.snacku}>
                Update Supplier
              </button>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
  </div>
  )
}

export default EditSup