import { IconSearch } from "@tabler/icons-react";
import "./exleft.scss";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ExTran from "../exTran/ExTran";

const ExLeft = () => {
  return (
    <div className="exleft">
      <div className="border-b border-slate-300 p-4 font-semibold text-blue-600 text-xl">
        Expenses
      </div>
      <div className="flex items-center justify-between p-4 border-b border-slate-300">
        <div className="searchbar1 flex h-10 rounded p-1 w-72 items-center gap-2 border border-slate-400 hover:border-black">
          <IconSearch className="text-slate-500" />
          <input
            type="text"
            className="focus:outline-none p-1 w-56"
            placeholder="Name Or Phone Number"
          />
        </div>
        <div className="filter1">
          <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
            <InputLabel id="demo-select-small-label">
              <div className="flex gap-3">Sort By</div>
            </InputLabel>

            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Sort By"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="recent">Most Recent</MenuItem>
              <MenuItem value="highestAmount">Highest Amount</MenuItem>
              <MenuItem value="name">By Name</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="filter2">
          <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
            <InputLabel id="demo-select-small-label">Filter By</InputLabel>

            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Filter By"
            >
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="pay">Receive</MenuItem>
              <MenuItem value="receive">Pay</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between p-3 border-b border-slate-300 bg-slate-100 text-slate-600 font-semibold">
        <div className="name">Name</div>
        <div className="amount">Amount</div>
      </div>
      <div className="transactions border-b border-slate-300">
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
        <ExTran />
      </div>
      <div className="expbtn px-6 py-4">
        <button className="rounded-lg p-2 w-full text-emerald-600 hover:text-white hover:bg-emerald-600">
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExLeft;
