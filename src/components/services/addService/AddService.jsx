import { Box, TextField } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Switch from "@mui/material/Switch";
import {
  IconX,
} from "@tabler/icons-react";
import "./addservice.scss"
const AddService = () => {
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

        const [isOn2, setIsOn2] = useState(false);
        const handleOnChange2 = () => {
          setIsOn2(!isOn2);
          //console.log("isOn2 : ", isOn2);
        };
      
        const [isClicked, setIsClicked] = useState(false);
        const [isClicked2, setIsClicked2] = useState(false);
      
      
        const handleOnChange3 = () => {
          setIsClicked(!isClicked);
          setIsClicked2(false)
          //console.log("isClicked : ", isClicked);
        };
        //console.log("isClicked before click : ", isClicked);
      
       
        const handleOnChange4 = () => {
          setIsClicked2(!isClicked2);
          setIsClicked(false)
          //console.log("isClicked2 : ", isClicked2);
        };
        //console.log("isClicked2 before click : ", isClicked2);
      
        const [gstOnItem, setGstOnItem] = useState("");
        const [gstValue1, setGstValue1] = useState("GST %");
        const [gstValue2, setGstValue2] = useState("");
        //console.log("gstOnItem : ", gstOnItem);
      
        const [hsnCode, setHsnCode] = useState("SAC Code");
        const [hsnValue1, setHsnValue1] = useState("");
        const [hsnValue2, setHsnValue2] = useState("");
        //console.log(hsnCode, hsnValue1, hsnValue2);
      
        const [searchValue, setSearchValue] = useState("0");
        console.log(searchValue);
      
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
        //console.log(custom_gst_details);
      
        const handleClick = () => {
          setGstValue1(customGst);
          setGstValue2(custom_gst_details);
        };
      
        const [fileSizeExceeded, setFileSizeExceeded] = React.useState(false);
        const maxFileSize = 20000;
        const [file, setFile] = useState("File Name");
        const [fileExists, setFileExists] = useState(false);
      
        const label = { inputProps: { "aria-label": "Checkbox demo" } };
        const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
        });
      
        const toggleDrawer = (anchor, open) => (event) => {
          if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
          ) {
            return;
          }
          setState({ ...state, [anchor]: open });
        };
  return (
    <div>
    <div>
      <Box sx={{ width: 400 }} role="presentation">
        <h1 className="text_left heading font-semibold text-2xl flex justify-between items-center">
          Add Services
        </h1>

        <div className="add-services-section-wrapper">
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
                        File size exceeded the limit of {maxFileSize / 1000}{" "}
                        KB
                      </p>
                    </>
                  )}
                </div>
              <Autocomplete
                options={units}
                id="disable-close-on-select"
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
                  <Switch {...label}  color="success" onChange={handleOnChange2} />
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
                              setSearchValue("0")
                          }}
                        >
                          <div className="gst-card-text cursor-pointer hover:bg-slate-100 p-3 rounded">
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
                                    setIsClicked2(false)
                                    
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Box>
                  <Box className="box-sec">
                    <div>Custom Tax %</div>
                    <TextField
                      label="GST"
                      id="outlined-basic"
                      variant="outlined"
                      className="sec-1"
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
    <div className="add-customer-btn-wrapper1">
      <button className="text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in">
        Add Services
      </button>
    </div>
  </div>
  )
}

export default AddService