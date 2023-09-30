import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import InputAdornment from "@mui/material/InputAdornment";
import "./recordsale.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/UserIdContext";
import axios from "axios";
const RecordSale = (props) => {
  const { serId, change, changeChange } = useContext(UserContext);
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const current_date = `${month}/${date}/${year}`;
  const todaysDate = dayjs(current_date);
  const [transactionDate, setTransactionDate] = useState(todaysDate);
  var date1 = transactionDate.$d;
  var filteredDate = date1.toString().slice(4, 16);

  const [data, setData] = useState({
    ser_tran_price: "",
    ser_quantity: "",
    ser_date: "",
    ser_description: "",
    ser_cnct_id: serId,
  });

  const [unit, setUnit] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/ser/fetchDataid/${serId}`)
      .then((res) => {
        setData({ ...data, ser_tran_price: res.data[0].ser_price }),
          setUnit(res.data[0].ser_unit);
      });
  }, [change, serId]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      data.ser_date = filteredDate;
      axios.post("http://localhost:8000/api/ser/sendTran", data);
      changeChange();
      props.snack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box sx={{ width: 400 }} role="presentation">
      <div>
        <h1 className="text_left heading text-blue-500 font-semibold text-lg">
          Record Sale
        </h1>

        <div className="services-record-sale-section-wrapper">
          <div className="section-2">
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "95%" },
              }}
              className="w-full p-6"
            >
              <Box className="box-sec">
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">{unit}</InputAdornment>
                    ),
                  }}
                  label="Enter quantity of services sold"
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full m-0"
                  size="small"
                  onChange={(e) =>
                    setData({ ...data, ser_quantity: e.target.value })
                  }
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
                  value={data.ser_tran_price}
                  onChange={(e) =>
                    setData({ ...data, ser_tran_price: e.target.value })
                  }
                  required
                />
              </Box>

              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="Date"
                      value={transactionDate}
                      format="LL"
                      className="w-full"
                      maxDate={todaysDate}
                      onChange={(newValue) => setTransactionDate(newValue)}
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
                  onChange={(e) =>
                    setData({ ...data, ser_description: e.target.value })
                  }
                />
              </Box>
            </Box>
          </div>
        </div>

        <div className="services-record-sale-btn-wrapper p-3">
          <button
            className=" text-blue-600 bg-blue-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-blue-600 transition-all ease-in"
            onClick={handleClick}
          >
            Record Sale
          </button>
        </div>
      </div>
    </Box>
  );
};

export default RecordSale;
