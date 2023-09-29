import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  IconX,
  IconTrash,
  IconSquareRoundedX,
  IconAlertOctagonFilled,
} from "@tabler/icons-react";
import Autocomplete from "@mui/material/Autocomplete";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Switch from "@mui/material/Switch";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./editproduct.scss";
import { UserContext } from "../../../context/UserIdContext";
import axios from "axios";
const EditProduct = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isOn, setIsOn] = useState(false);
  const handleOnChange1 = () => {
    setIsOn(!isOn);
    console.log("isOn : ", isOn);
  };

  const [isOn2, setIsOn2] = useState(false);
  const handleOnChange2 = () => {
    setIsOn2(!isOn2);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  const handleOnChange3 = () => {
    setIsClicked(!isClicked);
    setIsClicked2(false);
  };

  const handleOnChange4 = () => {
    setIsClicked2(!isClicked2);
    setIsClicked(false);
  };

  const { pId, change, changeChange, changeProduct } = useContext(UserContext);
  const [result, setResult] = useState([]);
  const [gstValue , setGstValue] = useState("")
  const [hsnCode, setHsnCode] = useState("");
  const [hsnValue1, setHsnValue1] = useState("");
  const [data, setData] = useState({
    product_name: "",
    primary_unit: null,
    secondary_unit: "",
    sale_price: null,
    purchase_price: null,
    tax: "",
    opening_stock: 0,
    low_stock: 0,
    balance_stock: 0,
    entry_date: "",
    hsn_code: null,
    hsn_desc: "",
    sgst: null,
    igst: null,
    cess: null,
    conversion: null,
    cgst: null,
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/auth/fetchProductTran/${pId}`)
      .then((response) => {
        setResult(response.data);
        setData({
          ...data,
          product_name: response.data[0].product_name,
          primary_unit: response.data[0].primary_unit,
          secondary_unit: response.data[0].secondary_unit,
          sale_price: response.data[0].sale_price,
          purchase_price: response.data[0].purchase_price,
          tax: response.data[0].tax,
          opening_stock: response.data[0].opening_stock,
          low_stock: response.data[0].low_stock,
          balance_stock: response.data[0].balance_stock,
          entry_date: response.data[0].entry_date,
          hsn_code: response.data[0].hsn_code,
          hsn_desc: response.data[0].hsn_desc,
          sgst: response.data[0].sgst,
          igst: response.data[0].igst,
          cess: response.data[0].cess,
          conversion: response.data[0].conversion,
          cgst: response.data[0].cgst,
        });
        setHsnCode(data.hsn_code ? data.hsn_code : "HSN Code")
        setHsnValue1(data.hsn_desc ? data.hsn_desc : "")
        setGstValue("(" +
        response.data[0].cgst +
        "% CSTS + " +
        response.data[0].sgst +
        "% SGST/UT GST ; " +
        response.data[0].igst +
        "% IGST ; )")
        // "+ cess ? response.data[0].cess +
        // "% CESS)" : "
      });
  }, [change, pId]);

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/auth/delproduct/${pId}`);
      changeChange();
      props.snackd();
      changeProduct(0);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const [gstValue1, setGstValue1] = useState("GST %");
  const [gstValue2, setGstValue2] = useState();

  

  const [searchValue, setSearchValue] = useState("0");
  console.log(searchValue);

  const [customGst, setcustomGst] = useState(data.igst);
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

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const current_date = `${month}/${date}/${year}`;
  const value = dayjs(current_date);

  const [fileSizeExceeded, setFileSizeExceeded] = React.useState(false);
  const maxFileSize = 20000;
  const [file, setFile] = useState("File Name");
  const [fileExists, setFileExists] = useState(false);

  const [productName, setProductName] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  // useEffect(() => {
  //   if (productName !== "") {
  //     setSubmitDisabled(false);
  //     console.log("submitDisabled : ", submitDisabled);
  //   } else {
  //     setSubmitDisabled(true);
  //     console.log("submitDisabled : ", submitDisabled);
  //   }
  // }, [productName]);

  

  return (
    <div>
      <div>
        <Box
          sx={{
            width: 400,
          }}
        >
          <h1 className="text_left heading">Edit Product</h1>

          <div className="add-product-edit-section-wrapper">
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
                    label="Product Name"
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full"
                    size="small"
                    required
                    helperText={
                      productName === "" ? "Product Name Required" : ""
                    }
                    onChange={handleChange}
                    name="product_name"
                    value={data.product_name}
                  />
                </Box>

                <div>
                  <div className=" w-full">
                    <input
                      type="file"
                      id="file-1"
                      className="hidden sr-only w-full"
                      accept="image/x-png,image/gif,image/jpeg"
                      onChange={(event) => {
                        setFile(event.target.value);
                        setFileExists(true);
                        const get_file_size = event.target.files[0];
                        console.log(get_file_size);
                        if (get_file_size.size > maxFileSize) {
                          setFileSizeExceeded(true);
                          return;
                        } else {
                          setFileSizeExceeded(false);
                        }
                      }}
                    />
                    <label
                      htmlFor="file-1"
                      id="file-1"
                      className="relative flex  items-center justify-center rounded-md text-center border border-dashed border-[#e0e0e0] py-8 px-16"
                    >
                      <div>
                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                          Drop Product Image
                        </span>
                        <span className="mb-2 block text-base font-medium text-[#6B7280]">
                          Or
                        </span>
                        <span className="img-browse-btn inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                          Browse
                        </span>
                      </div>
                    </label>
                  </div>
                  {fileExists ? (
                    <div class=" rounded-md bg-[#F5F7FB] py-4 px-8">
                      <div class="flex items-center justify-between">
                        <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                          {file}
                        </span>
                        <button
                          class="text-[#07074D]"
                          onClick={(e) => {
                            e.preventDefault(), setFile("");
                            setFileExists(false);
                            setFileSizeExceeded(false);
                          }}
                        >
                          <IconX />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {fileSizeExceeded && (
                    <>
                      <p className="error">
                        File size exceeded the limit of {maxFileSize / 1000} KB
                      </p>
                    </>
                  )}
                </div>

                <Autocomplete
                  options={units}
                  id="disable-close-on-select"
                  className="box-sec margin-bottom-zero "
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
                <Box className="box-sec margin-top-zero margin-bottom-zero">
                  <label className="pl-3">Add Secondary Unit</label>
                  <Switch
                    {...label}
                    color="success"
                    onChange={handleOnChange1}
                  />
                </Box>
                {isOn ? (
                  <Box className="box-sec margin-top-zero">
                    <Autocomplete
                      options={units}
                      id="disable-close-on-select"
                      className="w-full sec-1 mt-0 pl-3 pb-3"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          id="outlined-basic"
                          variant="outlined"
                          label="Units"
                          className="w-full"
                          size="small"
                        />
                      )}
                    />
                    <div className="pr-3 pb-3 w-full">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Conversion"
                        className="sec-2 w-full pr-3 pb-3"
                        size="small"
                        onChange={handleChange}
                        name="conversion"
                        value={data.conversion}
                      />
                    </div>
                  </Box>
                ) : (
                  <span></span>
                )}

                <Box className="box-sec margin-bottom-zero">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Sale Price"
                    className="sec-1 w-full"
                    size="small"
                    onChange={handleChange}
                    name="sale_price"
                    value={data.sale_price}
                  />

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Purchase Price"
                    className="sec-2 w-full"
                    size="small"
                    onChange={handleChange}
                    name="purchase_price"
                    value={data.purchase_price}
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

                <Box className="box-sec">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Opening stock"
                    className="sec-1 w-full"
                    size="small"
                    onChange={handleChange}
                    name="opening_stock"
                    value={data.opening_stock}
                  />

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Low stock"
                    className="sec-2 w-full"
                    size="small"
                    onChange={handleChange}
                    name="low_stock"
                    value={data.low_stock}
                  />
                </Box>

                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      <DatePicker
                        label="Date"
                        value={dayjs(data.entry_date)}
                        format="LL"
                        className="w-full"
                        size="small"
                        maxDate={value}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>

                <Box className="box-sec box-sex-1 ">
                  <TextField
                    id="outlined-read-only-input"
                    value={hsnCode}
                    helperText={hsnValue1}
                    className="sec-1 w-full"
                    size="small"
                    InputProps={{
                      readOnly: true,
                    }}
                    onClick={() => {
                      handleOnChange3();
                    }}
                  />

                  <TextField
                    id="outlined-read-only-input"
                    value={data.igst}
                    helperText={gstValue}
                    className="sec-2 w-full"
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
                        className=" my-0 z-0"
                        size="small"
                        placeholder="HSN Code or Product Name "
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
                    <span className=" m-0"></span>
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
                        className="sec-1 w-full"
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
                        className="sec-2 w-full"
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
                          setIsClicked2(false);
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
      <div className="add-product-edit-btn-wrapper flex gap-3">
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
                  You are about to delete this Product This action cannot be
                  undone.
                </DialogContentText>
              </DialogContent>
              <DialogActions className="flex gap-4">
                <button className="pb-3" onClick={handleClose}>
                  Cancel
                </button>
                <button
                  className="delete-btn text-red-600 pb-3 pr-3"
                  onClick={deleteProduct}
                  autoFocus
                >
                  Delete Product
                </button>
              </DialogActions>
            </div>
          </div>
        </Dialog>
        {submitDisabled ? (
          <button
            disabled={submitDisabled}
            className="text-slate-600 bg-slate-200 w-full p-3 rounded-[5px]  transition-all ease-in cursor-not-allowed"
          >
            Update
          </button>
        ) : (
          <button
            disabled={submitDisabled}
            className="text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
            onClick={props.snack}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default EditProduct;
