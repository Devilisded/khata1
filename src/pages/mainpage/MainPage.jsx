import * as React from "react";
import { useState } from "react";
import MainLeft from "../../components/mainLeft/MainLeft";
import MainRight from "../../components/mainRight/MainRight";
import Navbar from "../../components/navbar/Navbar";
import SelectCustomer from "../../components/selectCustomer/SelectCustomer";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./mainpage.scss";
import AddCustomer from "../../components/addCustomer/AddCustomer";
import Pay from "../../components/pay/Pay";
import Receive from "../../components/receive/Receive";
import Edit from "../../components/edit/Edit";
import { useEffect } from "react";
import users from "./dummyData";
import { UserContext } from "../../context/UserIdContext";
import { useContext } from "react";


const MainPage = () => {
  const [state, setState] = useState({
    add: false,
    edit: false,
    pay: false,
    receive: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box sx={{ width: 400 }} role="presentation">
      {anchor === "add" ? (
        <AddCustomer />
      ) : anchor === "edit" ? (
        <Edit/>
      ) : anchor === "pay" ? (
        <Pay/>
      ) : anchor === "receive" ? (
        <Receive/>
      ) : (
        "-"
      )}
    </Box>
  );
  const transactions = [
    {
      date: "10 Sep 2023",
      pay: 600,
    },
    {
      date: "11 Sep 2023",
      receive: 1000,
    },
    {
      date: "12 Sep 2023",
      pay: "400",
    },
  ];
  const [active, setActive] = useState(false);
  const {userId}=useContext(UserContext)
  const checkActive=()=>{
    userId>0?setActive(true):setActive(false);
  }
  useEffect(()=>{
    checkActive();
  },[userId])
//   useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [ ])
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={state["add"]}
        onClose={toggleDrawer("add", false)}
      >
        {list("add")}
      </Drawer>
      <Drawer
        anchor="right"
        open={state["edit"]}
        onClose={toggleDrawer("edit", false)}
      >
        {list("edit")}
      </Drawer>
      <Drawer
        anchor="right"
        open={state["pay"]}
        onClose={toggleDrawer("pay", false)}
      >
        {list("pay")}
      </Drawer>
      <Drawer
        anchor="right"
        open={state["receive"]}
        onClose={toggleDrawer("receive", false)}
      >
        {list("receive")}
      </Drawer>
      <div className="mainpage">
        <Navbar />
        <div className="content flex">
          <MainLeft
            users={users}
            add={toggleDrawer("add", true)}
          />

          {active ? (
            <MainRight
              transactions={transactions}
              edit={toggleDrawer("edit", true)}
              pay={toggleDrawer("pay", true)}
              receive={toggleDrawer("receive", true)}
            />
          ) : (
            <SelectCustomer />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
