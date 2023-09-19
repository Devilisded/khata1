import "./serleft.scss";
import { useLocation, Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import SerCard from "../serCard/SerCard";
import service from "../../../pages/services/servicedata";
import products from "../../../pages/Products/productsdata";

const SerLeft = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [filter,setFilter]=useState('')
  const handleChange1=(e)=>{
    setFilter(e.target.value);
  }
  const location = useLocation();
  return (
    <div className="serleft">
      <div className="heading text-lg font-semibold">
        <Link to="/products">
          <div
            className={
              location.pathname === "/products"
                ? "flex gap-2 sets activate cursor-pointer"
                : "flex gap-2 sets cursor-pointer"
            }
          >
            Products
            <p className=" text-sky-600 num font-semibold">{products.length}</p>
          </div>
        </Link>
        <div
          className={
            location.pathname === "/services"
              ? "flex gap-2 sets activate cursor-pointer"
              : "flex gap-2 sets cursor-pointer"
          }
        >
          Services
          <p className=" text-sky-600 num font-semibold">{service.length}</p>
        </div>
      </div>
      <div className="filters flex items-center justify-between">
        <div className="searchbar1 flex h-10 rounded p-1 w-72 items-center gap-2 border border-slate-400 hover:border-black">
          <IconSearch className="text-slate-500"/>
          <input type="text" className="focus:outline-none p-1 w-56" placeholder="Search By Product Name"/>
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
          <button className="flex gap-1" ><IconPlus/> Add Service</button>
      </div>
      <div className="heading1">
        <div className="pname text-slate-600">Service Name</div>
        <div className="sprice text-slate-600">Sales Price</div>
        <div className="qty text-slate-600">No. Of Sales</div>
      </div>
      <div className="cards">
        {
          service.map((item,index)=>(
            <SerCard key={index} data={item}/>
          ))
        }
      </div>
    </div>
  );
};

export default SerLeft;
