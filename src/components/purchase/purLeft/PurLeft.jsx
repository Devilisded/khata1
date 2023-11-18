import { IconArrowDownLeft, IconPlus, IconSearch } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PurTran from "../purTran/PurTran";

const PurLeft = () => {
  return (
    <div className="left bg-white shadow-lg w-full flex flex-col h-full">
      <div className="heading text-xl font-semibold">
        Purchase
        <p className=" text-sky-600 num font-semibold">5</p>
      </div>
      <div className="flex justify-between p-5 border-b border-slate-300">
        <div className="give text-gray-500 flex gap-1 items-center">
          Sales :<span className="text-gray-700 font-bold">₹ 20000</span>
          <IconArrowDownLeft className="text-green-600" />
        </div>
        <Link to="/purchaseForm">
          <button
            className="flex gap-1 text-cyan-600 p-2 rounded hover:bg-cyan-600/90 hover:text-white"
            style={{
              border: "1px solid #0891b2",
              transition: "all 400ms ease-in-out",
            }}
          >
            <IconPlus className="w-5" />
            Add Purchase
          </button>
        </Link>
      </div>
      <div className="filters flex items-center justify-between">
        <div className="searchbar1 flex h-10 rounded p-1 w-72 items-center gap-2 border border-slate-400 hover:border-black">
          <IconSearch className="text-slate-500" />
          <input
            type="text"
            className="focus:outline-none p-1 w-56"
            placeholder="Name Or Phone Number"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
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
          <FormControl sx={{ m: 1, minWidth: 155 }} size="small">
            <InputLabel id="demo-select-small-label">Filter By</InputLabel>

            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Filter By"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="unpaid">Unpaid</MenuItem>
              <MenuItem value="partial">Partially Paid</MenuItem>
              <MenuItem value="full">Fully Paid</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="heading1">
        <div className="name">Transaction</div>
        <div className="amount">Amount</div>
      </div>
      <div className="cards2">
        <PurTran />
        <PurTran />
        <PurTran />
        <PurTran />
        <PurTran />
        <PurTran />
        <PurTran />
      </div>
    </div>
  );
};

export default PurLeft;
