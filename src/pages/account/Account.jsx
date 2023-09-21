import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Navbar from "../../components/navbar/Navbar";
import "./account.scss";
import { IconX } from "@tabler/icons-react";
import Autocomplete from "@mui/material/Autocomplete";
const business_type = [
  {
    value: "proprietor",
    label: "Proprietor",
  },
  {
    value: "limited_Liability_Partnership",
    label: "Limited Liability Partnership",
  },
  {
    value: "partnership",
    label: "Partnership",
  },
  {
    value: "private_limited",
    label: "Private Limited",
  },
  {
    value: "other",
    label: "Other",
  },
];

const business_nature = [
  {
    value: "retailer",
    label: "Retailer",
  },
  {
    value: "distributor",
    label: "Distributor",
  },
  {
    value: "manufacturer",
    label: "Manufacturer",
  },
  {
    value: "service_Provider",
    label: "Service Provider",
  },
  {
    value: "wholesaler",
    label: "Wholesaler",
  },
  {
    value: "other-nature",
    label: "Other",
  },
];

export default function Account() {
  const [fileSizeExceeded, setFileSizeExceeded] = useState(false);
  const [fileSizeExceeded1, setFileSizeExceeded1] = useState(false);
  const maxFileSize1 = 2000000;
  const maxFileSize2 = 100000;
  const [file, setFile] = useState("File Name");
  const [file1, setFile1] = useState("Business Logo");
  const [file2, setFile2] = useState("Signature");
  const [filename, setFilename] = useState("Choose File");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    console.log(file);
    console.log(filename);
  };

  return (
    <div className="b-form ">
      <Navbar />
      <div className="business_acc_section-wrapper">
        <div className="section-1">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <h1 className="text-3xl text-center mb-5 text-sky-700">
              Create Business Account
            </h1>
            <Box className="box-sec">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Business Name"
                className="w-full"
                required
              />
            </Box>

            <Box className="box-sec">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="Address"
                className="w-full"
              />
            </Box>

            <Box className="box-sec">
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                label="GST Number"
                className="w-full"
              />
            </Box>
            <Box className="flex w-full">
              <Autocomplete
                className="box-sec w-full mr-3"
                options={business_type}
                id="disable-close-on-select"
                renderInput={(params) => (
                  <TextField
                    sx={{ marginTop: 0 }}
                    {...params}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Business Type"
                    required
                  />
                )}
              />

              <Autocomplete
                className="box-sec w-full ml-3"
                options={business_nature}
                id="disable-close-on-select"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{ marginTop: 0 }}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    label="Business Nature"
                    required
                  />
                )}
              />
            </Box>

            <div className="upload-img-sec">
              <input
                type="file"
                id="file-1"
                className="hidden sr-only"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setFile1(file.name);
                  console.log(file.size);
                  if (file.size > maxFileSize1) {
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
                className="relative flex min-h-[5px] "
              >
                <div
                  className="img-browse-btn inline-flex rounded border border-white
                 py-2 px-7 text-base font-medium text-sky-800 cursor-pointer"
                >
                  Browse
                </div>
                <div className="   py-2 px-7 block w-full border border-[#e0e0e0]">
                  <div className="flex items-center justify-between">
                    <span className="truncate pr-3 text-base font-medium text-sky-800 ">
                      {file1}
                    </span>
                    <button
                      className="text-sky-800"
                      onClick={(e) => e.preventDefault()}
                    >
                      <IconX />
                    </button>
                  </div>
                </div>
              </label>
              {fileSizeExceeded && (
                <p className="error">
                  File size exceeded the limit of {maxFileSize1 / 1000000} MB
                </p>
              )}
            </div>
            <div className="upload-img-sec">
              <input
                type="file"
                id="file-2"
                className="hidden sr-only"
                accept="image/x-png,image/gif,image/jpeg"
                onChange={(event) => {
                  const file = event.target.files[0];
                  setFile2(file.name);
                  console.log(file2);
                  if (file.size > maxFileSize2) {
                    setFileSizeExceeded1(true);
                    return;
                  } else {
                    setFileSizeExceeded1(false);
                  }
                }}
              />
              <label
                htmlFor="file-2"
                id="file-2"
                className="relative flex min-h-[5px] "
              >
                <div
                  className="img-browse-btn inline-flex rounded border border-white text-sky-800 cursor-pointer
                 py-2 px-7 text-base font-medium"
                >
                  Browse
                </div>
                <div className="   py-2 px-7 block w-full border border-[#e0e0e0]">
                  <div className="flex items-center justify-between">
                    <span className="truncate pr-3 text-base font-medium text-sky-800">
                      {file2}
                    </span>
                    <button
                      className="text-sky-800"
                      onClick={(e) => e.preventDefault()}
                    >
                      <IconX />
                    </button>
                  </div>
                </div>
              </label>
              {fileSizeExceeded1 && (
                <p className="error">
                  File size exceeded the limit of {maxFileSize2 / 1000} KB
                </p>
              )}
            </div>
            <div className="create_acc_btn_wrapper border">
              <button
                className="create_acc_btn text-green-600 w-full"
                onClick={(e) => e.preventDefault()}
              >
                Create Account
              </button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
