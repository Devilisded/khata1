import React from "react";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SerLeft from "../../components/services/serLeft/SerLeft";
import SerRight from "../../components/services/serRight/SerRight";
import SelectService from "../../components/services/selectService/SelectService";
import { UserContext } from "../../context/UserIdContext";
import { Box, Drawer } from "@mui/material";
import AddService from "../../components/services/addService/AddService";

const Services = () => {
  const [state, setState] = useState({
    add: false,
    edit: false,
    record: false,
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
      {anchor === "add"
        ? <AddService/>
        : anchor === "edit"
        ? "Edit Service"
        : anchor === "record"
        ? "Record a sale"
        : "-"}
    </Box>
  );
  const { serId } = useContext(UserContext);
  const [active, setActive] = useState(false);
  const update = () => {
    serId > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    update();
  }, [serId]);

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
        open={state["record"]}
        onClose={toggleDrawer("record", false)}
      >
        {list("record")}
      </Drawer>
      <div className="services">
        <Navbar />
        <div className="content flex">
          <SerLeft add={toggleDrawer("add", true)} />
          {active ? <SerRight edit={toggleDrawer("edit", true)} record={toggleDrawer("record", true)}/> : <SelectService />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
