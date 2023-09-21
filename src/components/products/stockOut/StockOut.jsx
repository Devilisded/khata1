import * as React from "react";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

const StockOut = (props) => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const current_date = `${month}/${date}/${year}`;
    const value = dayjs(current_date);
  
    const value1 = "DOZ";
    const value2 = "NOS";
    const [unit, setUnit] = useState(value1);
    const [isActive, setIsActive] = useState(true)
  return (
    <Box
    sx={{ width: 400 }}
    role="presentation"
  >
    <div>
      <h1 className="text_left heading text-red-600 font-semibold text-lg">
        Stock Out
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

            {value2 !== "" ? (
              <Box className="box-sec unit-selector">
                <label className="pl-3">Stock in unit in</label>

                <div className=" flex  selector-btn">
                  <button 
                    className= {isActive ? "active-btn" : "inactive-btn"}
                    onClick={(e) => {
                      e.preventDefault(),
                      setUnit(value1);
                      setIsActive(true)
                    }}
                  >
                    {value1}
                  </button>
                  <button
                  className={isActive ? "inactive-btn" : "active-btn"}
                    onClick={(e) => {
                      e.preventDefault(),
                      setUnit(value2);
                      setIsActive(false)
                    }}
                  >
                    {value2}
                  </button>
                </div>
              </Box>
            ) : (
              <div></div>
            )}

            <Box className="box-sec">
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">{unit}</InputAdornment>
                  ),
                }}
                label="Enter quantity of products"
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

      <div className="product-stock-in-btn-wrapper">
        <button className=" text-red-600 bg-red-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-red-600 transition-all ease-in" onClick={props.snack}>
          Stock Out
        </button>
      </div>
    </div>
  </Box>
  )
}

export default StockOut