import {
  IconBook2,
  IconBriefcase,
  IconBuildingFactory2,
  IconLogout,
  IconServer,
  IconSettings,
  IconTruckLoading,
  IconUser,
} from "@tabler/icons-react";
import "./navbar.scss";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import Fade from "@mui/material/Fade";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const items = [
    {
      name: "Customer",
      icon: <IconUser />,
      linkto:"/"
    },
    {
      name: "Supplier",
      icon: <IconTruckLoading />,
      linkto:"/supplier"
    },
    {
      name: "Inventory",
      icon: <IconBuildingFactory2 />,
      linkto:"/inventory"
    },
    {
      name: "Items",
      icon: <IconServer />,
      linkto:"/items"
    },
    {
      name: "Settings",
      icon: <IconSettings />,
      linkto:"/settings"
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar flex items-center w-full justify-between shadow-md">
      <div className="left flex items-center">
        <IconBook2 className="text-[#008cff] h-16 w-16" />
        <div className="text-[50px] text-[#008cff]">
          Acc<span className="font-bold">Book</span>
        </div>
      </div>
      <div className="center flex ">
        <div className="items flex">
          {items.map((item, index) => (
            <NavLink activeclassname="active" key={index} to={item.linkto}>
            <div
              className="item flex flex-col items-center gap-1 justify-center cursor-pointer"
              
            >
              <div className="icon1">{item.icon}</div>
              <div className="name text-xs">{item.name}</div>
            </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="profile">
          <div onClick={handleClick} className=" cursor-pointer">
            AB
          </div>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem className="gap-2" onClick={handleClose}><IconUser className="text-slate-600 w-5"/>Profile</MenuItem>
            <MenuItem className="gap-2" onClick={handleClose}><IconBriefcase className="text-slate-600 w-5"/> Account</MenuItem>
            <Link to="/login">
              <MenuItem className="gap-2"><IconLogout className="text-slate-600 w-5"/>Logout</MenuItem>
            </Link>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
