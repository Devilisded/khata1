import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import InputAdornment from "@mui/material/InputAdornment";
import "./recordsale.scss"

const RecordSale = (props) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const current_date = `${month}/${date}/${year}`;
    const value = dayjs(current_date);
    const value1 = "DOZ";
  return (
    <Box
    sx={{ width:400 }}
    role="presentation"
  >
    <div>
      <h1 className="text_left heading text-blue-500 font-semibold text-lg">
      Record Sale
      </h1>

      <div className="services-record-sale-section-wrapper">
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
                    <InputAdornment position="end">{value1}</InputAdornment>
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

      <div className="services-record-sale-btn-wrapper p-3">
        <button className=" text-blue-600 bg-blue-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-blue-600 transition-all ease-in" onClick={props.snack}>
        Record Sale
        </button>
      </div>
    </div>
  </Box>
  )
}

export default RecordSale