import * as React from "react";
import { useState } from "react";
import MainLeft from "../../components/mainLeft/MainLeft";
import MainRight from "../../components/mainRight/MainRight";
import Navbar from "../../components/navbar/Navbar";
import SelectCustomer from "../../components/selectCustomer/SelectCustomer";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./mainpage.scss";
const MainPage = () => {
  const [state, setState] = useState({
    right: false,
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
  const list = (anchor) => <Box sx={{ width: 350 }} role="presentation"></Box>;
  const users = [
    {
      name: "Akshit",
      type: "Get",
      amount: 300,
    },
    {
      name: "Harsh",
      type: "Give",
      amount: 400,
    },
    {
      name: "Sunil",
    },
  ];
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
  const handleClick = () => {
    setActive(true);
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
      <div className="mainpage">
        <Navbar />
        <div className="content flex">
          <MainLeft users={users} click={handleClick} click1={toggleDrawer("right", true)}/>

          {active ? (
            <MainRight transactions={transactions} />
          ) : (
            <SelectCustomer />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPage;
