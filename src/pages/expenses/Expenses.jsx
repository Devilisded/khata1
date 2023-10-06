import React from "react";
import "./expenses.scss";
import Navbar from "../../components/navbar/Navbar";
import ExLeft from "../../components/expenses/exLeft/ExLeft";
import ExRight from "../../components/expenses/exRight/ExRight";
import { useState } from "react";
import { Box, Drawer } from "@mui/material";
const Expenses = () => {
  const [state, setState] = useState({
    add: false,
    edit: false,
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
      {anchor === "add" ? "ADD" : "EDIT"}
    </Box>
  );
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
      <div className="expenses">
        <Navbar />
        <div className="content flex">
          <ExLeft add={toggleDrawer("add", true)} />
          <ExRight edit={toggleDrawer("edit", true)} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Expenses;
