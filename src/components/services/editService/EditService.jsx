import { Box, TextField } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";
import {
  IconX,
  IconTrash,
  IconSquareRoundedX,
  IconAlertOctagonFilled,
} from "@tabler/icons-react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./editservice.scss";

const EditService = (props) => {
  const units = [
    {
      value: "pieces",
      label: "Pieces - PCS",
    },
    {
      value: "numbers",
      label: "Numbers - NOS",
    },
    {
      value: "Days",
      label: "Days - DAY",
    },
    {
      value: "hours",
      label: "Hours - HRS",
    },
  ];

  const gst = [
    {
      value: "taxExempted",
      label1: "Tax Exempted",
      label2: "(NO GST)",
    },
    {
      value: "gst0",
      label1: "GST@ 0%",
      label2: "(NO GST)",
    },
    {
      value: "gst0_1", // 0_1 => 0.1
      label1: "GST@ 0.1%",
      label2: "(0.05% CSGT + 0.05% SGST/UT GST ; 0.1% IGST )",
    },
    {
      value: "gst0_25", // 0_25 => 0.25
      label1: "GST@ 0.25%",
      label2: "(0.125% CSGT + 0.125% SGST/UT GST ; 0.25% IGST )",
    },
    {
      value: "gst3",
      label1: "GST@ 3%",
      label2: "(1.5% CSGT + 1.5% SGST/UT GST ; 3% IGST )",
    },
    {
      value: "gst5",
      label1: "GST@ 5%",
      label2: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      value: "gst6",
      label1: "GST@ 6%",
      label2: "(3% CSGT + 3% SGST/UT GST ; 6% IGST )",
    },
    {
      value: "gst7_5", // 7_5  =>  7.5
      label1: "GST@ 7.5%",
      label2: "(3.75% CSGT + 3.75% SGST/UT GST ; 7.5% IGST )",
    },
    {
      value: "gst12",
      label1: "GST@ 12%",
      label2: "(6% CSGT + 6% SGST/UT GST ; 12% IGST )",
    },
    {
      value: "gst18",
      label1: "GST@ 18%",
      label2: "(9% CSGT + 9% SGST/UT GST ; 18% IGST )",
    },
    {
      value: "gst28",
      label1: "GST@ 28%",
      label2: "(14% CSGT + 14% SGST/UT GST ; 28% IGST )",
    },
  ];

  const hsn = [
    {
      hsn_code: "21",
      product_name:
        "LITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "5 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "212",
      product_name:
        "AITE BITE FOODS PVT LTD Classic ab cd  ef Vegetable Momo's 09 Pcs 9 Each",
      tax: "6 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "213",
      product_name:
        "MITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "7 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "226",
      product_name:
        "BITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "8 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "271",
      product_name:
        "EITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "9 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "22",
      product_name:
        "BITE BITE FOODS PVT LTD Classic ab cd  ef Vegetable Momo's 09 Pcs 9 Each",
      tax: "10 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "23",
      product_name:
        "MITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "11 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
    {
      hsn_code: "27",
      product_name:
        "LITE BITE FOODS PVT LTD Classic Vegetable Momo's 09 Pcs 9 Each",
      tax: "12 GST %",
      tax_details: "(2.5% CSGT + 2.5% SGST/UT GST ; 5% IGST )",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isOn2, setIsOn2] = useState(false);
  const handleOnChange2 = () => {
    setIsOn2(!isOn2);
    //console.log("isOn2 : ", isOn2);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleOnChange3 = () => {
    setIsClicked(!isClicked);
    setIsClicked2(false);
    //console.log("isClicked : ", isClicked);
  };

  const handleOnChange4 = () => {
    setIsClicked2(!isClicked2);
    setIsClicked(false);
  };

  const [gstValue1, setGstValue1] = useState("GST %");
  const [gstValue2, setGstValue2] = useState("");

  const [hsnCode, setHsnCode] = useState("SAC Code");
  const [hsnValue1, setHsnValue1] = useState("");

  const [searchValue, setSearchValue] = useState("0");

  const [customGst, setcustomGst] = useState("");
  const [customeCess, setCustomeCess] = useState("");
  const custom_gst_details =
    "(" +
    customGst / 2 +
    "% CSTS + " +
    customGst / 2 +
    "% SGST/UT GST ; " +
    customGst +
    "% IGST ; " +
    customeCess +
    "% CESS )";

  const [fileSizeExceeded, setFileSizeExceeded] = React.useState(false);
  const maxFileSize = 20000;
  const [file, setFile] = useState("File Name");
  const [fileExists, setFileExists] = useState(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div>
        <Box sx={{ width: 400 }} role="presentation">
          <h1 className="text_left heading font-semibold text-2xl flex justify-between items-center">
            Edit Services
          </h1>

          <div className="add-services-edit-section-wrapper">
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
                    label="Service Name"
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full"
                    size="small"
                    required
                  />
                </Box>
                <Autocomplete
                  options={units}
                  id="disable-close-on-select"
                  value={"akshit"}
                  className=" mt-0 w-3/4 sec-2 box-sec margin-bottom-zero "
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="outlined-basic"
                      variant="outlined"
                      label="Units"
                      className="w-full my-0 "
                      size="small"
                    />
                  )}
                />

                <Box className="box-sec margin-bottom-zero">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Sell Price"
                    className=" w-full"
                    size="small"
                  />
                </Box>
                <Box className="box-sec margin-top-zero ">
                  <label className="pl-2 ">Tax included</label>
                  <Switch
                    {...label}
                    color="success"
                    onChange={handleOnChange2}
                  />
                </Box>

                <Box className="box-sec box-sex-1">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={hsnCode}
                    helperText={hsnValue1}
                    className="sec-1"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                    onClick={() => {
                      handleOnChange3();
                    }}
                  />

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={gstValue1}
                    helperText={gstValue2}
                    className="sec-2"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                    onClick={() => {
                      handleOnChange4();
                    }}
                  />
                </Box>
                <>
                  {isClicked ? (
                    <>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Search By"
                        className=" my-0 "
                        placeholder="SAC Code or Services Name "
                        size="small"
                        onChange={(e) => {
                          setSearchValue(e.target.value);
                        }}
                      />

                      {hsn
                        .filter(
                          (code) =>
                            code.hsn_code.startsWith(searchValue) ||
                            code.product_name.startsWith(searchValue)
                        )
                        .map((filteredItem) => (
                          <div
                            className="flex card-sec"
                            onClick={() => {
                              console.log(filteredItem.hsn_code);
                              setHsnCode(filteredItem.hsn_code),
                                setHsnValue1(filteredItem.product_name),
                                setGstValue1(filteredItem.tax),
                                setGstValue2(filteredItem.tax_details);
                              setIsClicked(false);
                              setSearchValue("0");
                            }}
                          >
                            <div className="gst-card-text">
                              <div className="flex gap-6 pb-4">
                                <h2 className=" rounded bg-slate-300 px-6 py-1 ">
                                  {filteredItem.hsn_code}
                                </h2>
                                <h2 className=" rounded bg-slate-300 px-4 py-1 ">
                                  {filteredItem.tax}
                                </h2>
                              </div>
                              <p>{filteredItem.product_name}</p>
                            </div>
                          </div>
                        ))}
                    </>
                  ) : (
                    <div></div>
                  )}
                </>
                {isClicked2 ? (
                  <>
                    <Box className="box-sec">
                      <div className="gst-section-wrapper">
                        <div className="gst-section">
                          {gst.map((item, index) => (
                            <div className="flex card-sec" key={index}>
                              <div className="gst-card-text">
                                <h2 className=" font-medium">{item.label1}</h2>
                                <p>{item.label2}</p>
                              </div>
                              <div className="customer-info-icon-wrapper">
                                <input
                                  type="radio"
                                  id="gst_on_selected_item"
                                  name="gst"
                                  //value={item.value}
                                  onChange={() => {
                                    setGstOnItem(item.value),
                                      setGstValue1(item.label1),
                                      setGstValue2(item.label2);
                                    setIsClicked2(false);
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Box>
                    <div>Custom Tax %</div>
                    <Box className="box-sec">
                      <TextField
                        label="GST"
                        id="outlined-basic"
                        variant="outlined"
                        className="sec-1"
                        size="small"
                        required
                        onChange={(e) => {
                          setcustomGst(e.target.value);
                        }}
                      />
                      <TextField
                        label="CESS"
                        id="outlined-basic"
                        variant="outlined"
                        className="sec-2"
                        size="small"
                        required
                        onChange={(e) => {
                          setCustomeCess(e.target.value);
                        }}
                      />
                    </Box>
                    <Box className="box-sec">
                      <button
                        onClick={(e) => {
                          e.preventDefault(),
                            setGstValue1(customGst),
                            setGstValue2(custom_gst_details);
                        }}
                      >
                        Add Custome Gst
                      </button>
                    </Box>
                  </>
                ) : (
                  <div></div>
                )}
              </Box>
            </div>
          </div>
        </Box>
      </div>
      <div className="add-services-edit-btn-wrapper flex gap-3">
        <button
          className="delete-btn text-red-600 flex gap-1 justify-center"
          type="submit"
          onClick={handleClickOpen}
        >
          <IconTrash />
          Delete
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
              <DialogTitle id="alert-dialog-title">Are You Sure ?</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  You are about to delete this service This action cannot be
                  undone.
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
                  Delete Service
                </button>
              </DialogActions>
            </div>
          </div>
        </Dialog>
        <button
          className="text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
          onClick={props.snacku}
        >
          Update Service
        </button>
      </div>
    </div>
  );
};

export default EditService;
