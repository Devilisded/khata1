import {
  IconArrowDownLeft,
  IconArrowUpRight,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import CardItem from "../cardItem/CardItem";
import "./mainleft.scss";
import { useContext, useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { UserContext } from "../../../context/UserIdContext";
const MainLeft = (props) => {
  const { change } = useContext(UserContext);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [filter, setFilter] = useState("");
  const handleChange1 = (e) => {
    setFilter(e.target.value);
  };
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/auth/fetch").then((response) => {
      setResult(response.data);
    });
  }, [change]);
  const sum = result
    .filter((person) => person.amt_type === "pay")
    .reduce(function (prev, current) {
      return prev + +current.cust_amt;
    }, 0);
  const sum1 = result
    .filter((person) => person.amt_type === "receive")
    .reduce(function (prev, current) {
      return prev + +current.cust_amt;
    }, 0);
  return (
    <div className="left bg-white shadow-lg w-full flex flex-col h-full">
      <div className="heading text-xl font-semibold">
        Customers
        <p className=" text-sky-600 num font-semibold">{result.length}</p>
      </div>
      <div className="giveget flex justify-between">
        <div className="give text-gray-500 flex gap-1 items-center">
          You'll Give : <span className="text-gray-700 font-bold">₹ {sum}</span>
          <IconArrowUpRight className="text-red-600" />
        </div>
        <div className="give text-gray-500 flex gap-1 items-center">
          You'll Get: <span className="text-gray-700 font-bold">₹ {sum1}</span>
          <IconArrowDownLeft className="text-green-600" />
        </div>
        <button className="flex gap-1 " onClick={props.add}>
          <IconPlus className="w-5" />
          Add Customer
        </button>
      </div>
      <div className="filters flex items-center justify-between">
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
        {result.map((item, index) => (
          <CardItem key={index} click={props.click} users={item} />
        ))}
      </div>
    </div>
  );
};

export default MainLeft;
