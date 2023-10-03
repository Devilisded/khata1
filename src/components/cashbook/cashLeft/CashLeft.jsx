import { IconChecklist } from "@tabler/icons-react";
import "./cashleft.scss";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CashLeft = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const current_date = `${month}/${date}/${year}`;
  const todaysDate = dayjs(current_date);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="cashleft">
      <div className="text-xl font-semibold p-5 border-b border-gray-300 text-blue-600">
        CashBook
      </div>
      <div className="flex justify-between p-5 border-b border-gray-300 balance">
        <div className="text-gray-500 flex gap-1 items-center">
          Total Balance &nbsp;
          <span className="text-green-500 font-bold">₹12800</span>
        </div>
        <div className="text-gray-500 flex gap-1 items-center">
          Today's Balance &nbsp;
          <span className="text-red-500 font-bold text-md">₹600</span>
        </div>
        <button className="flex gap-1 items-end report rounded-md p-2 text-blue-600 hover:text-white hover:bg-blue-600">
          <IconChecklist className="w-5 h-5" /> View Report
        </button>
      </div>
      <div className="date flex justify-between items-center p-5 px-6 border-b border-gray-300">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="Date"
              value={todaysDate}
              format="LL"
              maxDate={todaysDate}
            />
          </DemoContainer>
        </LocalizationProvider>
        <div className="line"></div>
        <FormControl className="w-[30%]">
          <InputLabel id="demo-simple-select-label">All</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="All"
            onChange={handleChange}
          >
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Cash</MenuItem>
            <MenuItem value={30}>Online</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="headings"></div>
    </div>
  );
};

export default CashLeft;
