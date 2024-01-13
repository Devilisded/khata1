import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const DrawModerator = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    permission: "",
    inventory: "",
    Bills: "",
  });

  const handleSubmission = () => {
    try {
      axios.post("http://localhost:8000/api/ad/addModerator", formState);
      props.draw();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-5 text-xl m-8 w-[19vw] ">
      <TextField
        id="outlined-basic"
        label="Name"
        size="small"
        variant="outlined"
        required
        value={formState.name}
        name="name"
        onChange={handleSubmit}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        size="small"
        variant="outlined"
        onChange={(e) => {
          setFormState({ ...formState, email: e.target.value });
        }}
      />

      <FormLabel>
        <div className="font-semibold text-[18px] pt-[20px]">Permission</div>
      </FormLabel>
      <div className="ml-16 mt-[2px]">
        <RadioGroup defaultValue="Option_2" name="radio1">
          <FormControlLabel
            value="Option_1"
            control={<Radio size="small" />}
            label="Option 1"
            onClick={(e) => {
              setFormState({
                ...formState,
                permission: "Permission 1 granted ",
              });
            }}
          />
          <FormControlLabel
            value="Option_2"
            control={<Radio size="small" />}
            label="Option 2"
            onClick={(e) => {
              setFormState({
                ...formState,
                permission: "Permission 1 granted ",
              });
            }}
          />
          <FormControlLabel
            value="Option_3"
            control={<Radio size="small" />}
            label="Option 3"
            onClick={(e) => {
              setFormState({
                ...formState,
                permission: "Permission 1 granted ",
              });
            }}
          />
        </RadioGroup>
      </div>

      <div>
        <FormLabel>
          <div className="font-semibold text-[18px]">Inventory</div>
        </FormLabel>
      </div>
      <div className="ml-16 mt-[2px]">
        <RadioGroup defaultValue="Option_2" name="radio1">
          <FormControlLabel
            value="Option_1"
            control={<Radio size="small" />}
            label="Option 1"
            onClick={(e) => {
              setFormState({
                ...formState,
                inventory: "Permission 1 granted ",
              });
            }}
          />
          <FormControlLabel
            value="Option_2"
            control={<Radio size="small" />}
            label="Option 2"
            onClick={(e) => {
              setFormState({
                ...formState,
                inventory: "Permission 1 granted ",
              });
            }}
          />
          <FormControlLabel
            value="Option_3"
            control={<Radio size="small" />}
            label="Option 3"
            onClick={(e) => {
              setFormState({
                ...formState,
                inventory: "Permission 1 granted ",
              });
            }}
          />
        </RadioGroup>
      </div>

      {/* <div>
        <FormLabel>
          <div className="font-semibold text-[18px]">Bills</div>{" "}
        </FormLabel>
      </div>
      <div className="ml-16 mt-[2px]">
        <RadioGroup defaultValue="Option_2" name="radio1">
          <FormControlLabel
            value="Option_1"
            control={<Radio size="small" />}
            label="Option 1"
          />
          <FormControlLabel
            value="Option_2"
            control={<Radio size="small" />}
            label="Option 2"
          />
          <FormControlLabel
            value="Option_3"
            control={<Radio size="small" />}
            label="Option 3"
          />
        </RadioGroup>
      </div> */}

      <motion.div whileTap={{ scale: 0.97 }}>
        <motion.button
          className="py-2 my-24 text-lg border-2 shadow-sky-400  mt-36 w-full text-center bg-slate-300/50 rounded-lg"
          onClick={handleSubmission}
        >
          Submit
        </motion.button>
      </motion.div>
    </div>
  );
};
export default DrawModerator;
