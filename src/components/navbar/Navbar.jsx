import { IconBuildingFactory2, IconServer, IconSettings, IconTruckLoading, IconUser } from "@tabler/icons-react"
import "./navbar.scss"
import { useState } from "react";
import { Menu , MenuItem } from "@mui/material";
import Fade from '@mui/material/Fade';
import { Link } from "react-router-dom";
const Navbar = () => {
    const items=[
        {
            name:"Customer",
            icon:<IconUser/>,
            class:"active"
        },{
            name:"Supplier",
            icon:<IconTruckLoading/>
        },
        {
            name:"Inventory",
            icon:<IconBuildingFactory2/>
        },{
            name:"Items",
            icon:<IconServer/>
        },
        {
            name:"Settings",
            icon:<IconSettings/>
        }

    ]
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
        <div className="left">
            <div className="text-[50px] text-[#008cff]">Acc<span className="font-bold">Book</span></div>
        </div>
        <div></div>
        <div className="center flex ">
                <div className="items flex gap-14">
                    {
                        items.map((item,index)=>(
                            <div className="item flex flex-col items-center gap-1 justify-center cursor-pointer" key={index}>
                            <div className={"icon1"}>{item.icon}</div>
                            <div className={"name text-xs"} >{item.name}</div>
                            </div>
                        ))
                    }
            
        </div>
      </div>
      <div className="right">
        <div className="profile">
            <div onClick={handleClick} className=" cursor-pointer">AB</div>
            <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Link to="/login">
        <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>
        </div>
      </div>
    </div>
  )
}

export default Navbar