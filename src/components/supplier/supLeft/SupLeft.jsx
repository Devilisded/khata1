import "./supleft.scss";
import {
    IconArrowDownLeft,
    IconArrowUpRight,
    IconPlus,
    IconSearch,
  } from "@tabler/icons-react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import SupCard from "../supCard/SupCard";
import suppliers from "../../../pages/supplier/supData"

const SupLeft = (props) => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const [filter,setFilter]=useState('')
    const handleChange1=(e)=>{
      setFilter(e.target.value);
    }
  return (
    <div className="supleft">
      <div className="heading text-xl font-semibold">
        Suppliers
        <p className=" text-sky-600 num font-semibold">{suppliers.length}</p>
      </div>
      <div className="giveget flex justify-between">
        <div className="give text-gray-500 flex gap-1 items-center">
          You'll Give : <span className="text-gray-700 font-bold">₹ 500</span>
          <IconArrowUpRight className="text-red-600" />
        </div>
        <div className="give text-gray-500 flex gap-1 items-center">
          You'll Get: <span className="text-gray-700 font-bold">₹ 300</span>
          <IconArrowDownLeft className="text-green-600" />
        </div>
        <button className="flex gap-1" onClick={props.add}>
          <IconPlus className="w-5" />
          Add Supplier
        </button>
      </div>
      <div className="filters flex items-center justify-between">
        <div className="searchbar1 flex h-10 rounded p-1 w-72 items-center gap-2 border border-slate-400 hover:border-black">
          <IconSearch className="text-slate-500"/>
          <input type="text" className="focus:outline-none p-1 w-56" placeholder="Name Or Phone Number"/>
        </div>
        <div className="filter1">
        <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
          <InputLabel id="demo-select-small-label"><div className="flex gap-3">Sort By</div></InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={filter}
            label="Sort By"
            onChange={handleChange1}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Most Recent</MenuItem>
            <MenuItem value={20}>Highest Amount</MenuItem>
            <MenuItem value={30}>By Name</MenuItem>
          </Select>
          </FormControl>
        </div>
        <div className="filter2">
        <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
          <InputLabel id="demo-select-small-label">Filter By</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Filter By"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Pay</MenuItem>
            <MenuItem value={30}>Receive</MenuItem>
          </Select>
          </FormControl>
        </div>
      </div>
      <div className="heading1">
        <div className="name">Name</div>
        <div className="amount">Amount</div>
      </div>
      <div className="cards">
        {
          suppliers.map((item,index)=>(
            <SupCard key={index} data={item}/>
          ))
        }
      </div>
    </div>
  );
};

export default SupLeft;
