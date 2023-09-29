import * as React from "react";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Box from "@mui/material/Box";
import "./stockin.scss";
import InputAdornment from "@mui/material/InputAdornment";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/UserIdContext";
import axios from "axios";

const StockIn = (props) => {
  const { pId, changeChange } = useContext(UserContext);
  const [result, setResult] = useState([]);
  const [primaryUnit, setPrimaryUnit] = useState("");
  const [secondaryUnit, setSecondaryUnit] = useState("");
  const [unit, setUnit] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [conversion, setConversion] = useState(0);
  const [currentStock , setCurrentStock] = useState(0)
  const [values, setValues] = useState({
    product_stock_in: null,
    primary_unit: "",
    secondary_unit: "",
    purchase_price: "",
    product_desc: "",
    entry_date: "",
    cnct_id: pId,
    selected_unit: ""
  });

  
  const [convertedPrice , setConvertedPrice] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/auth/fetchProductTran/${pId}`)
      .then((response) => {
        setResult(response.data);
        setPrimaryUnit(response.data[0].primary_unit);
        setSecondaryUnit(response.data[0].secondary_unit);
        setUnit(response.data[0].primary_unit);
        setConversion(response.data[0].conversion);
        setCurrentStock(response.data[0].opening_stock);
        setValues({
          ...values,
          primary_unit: response.data[0].primary_unit,
          secondary_unit: response.data[0].secondary_unit,
          purchase_price: response.data[0].purchase_price,
          
        });
        setConvertedPrice(parseFloat(response.data[0].purchase_price/response.data[0].conversion));
      });
  }, [pId]);


  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const current_date = `${month}/${date}/${year}`;
  const todaysDate = dayjs(current_date);
  const [transactionDate, setTransactionDate] = useState(todaysDate);
  var date1 = transactionDate.$d;
  var filteredDate = date1.toString().slice(4, 16);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [values2, setValues2] = useState({
    updatedStockQty: null
  });

  const handleClick = async (e) => {
    e.preventDefault();
    values.entry_date = filteredDate;
    try {
      var coverted_qty = isActive ? parseFloat(values.product_stock_in) : parseFloat(values.product_stock_in/conversion);
      values2.updatedStockQty = currentStock + coverted_qty;
      values.purchase_price =  isActive ? parseFloat(values.purchase_price) : convertedPrice ;
      values.selected_unit = unit ? unit : primaryUnit;
      await axios.post("http://localhost:8000/api/auth/addStockIn", values);
      await axios.put(`http://localhost:8000/api/auth/updateStockQty/${pId}`, values2);  
      changeChange();
      props.snack();
    } catch (err) {
      console.log(err);
    }


  };

  return (
    <Box sx={{ width: 400 }} role="presentation">
      <div>
        <h1 className="text_left heading text-green-500 font-semibold text-lg">
          Stock In
        </h1>

        <div className="product-stock-in-section-wrapper">
          <div className="section-2">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "95%" },
              }}
              noValidate
              autoComplete="off"
              className="w-full"
            >
              {secondaryUnit !== null && secondaryUnit !== "" ? (
                <Box className="box-sec unit-selector">
                  <label className="pl-3">Stock in unit in</label>

                  <div className=" flex  selector-btn">
                    <button
                      className={isActive ? "active-btn" : "inactive-btn"}
                      onClick={(e) => {
                        e.preventDefault(), setUnit(primaryUnit);
                        setIsActive(true);
                      }}
                    >
                      {primaryUnit}
                    </button>
                    <button
                      className={isActive ? "inactive-btn" : "active-btn"}
                      onClick={(e) => {
                        e.preventDefault(), setUnit(secondaryUnit);
                        setIsActive(false);
                      }}
                    >
                      {secondaryUnit}
                    </button>
                  </div>
                </Box>
              ) : (
                <div></div>
              )}

              <Box className="box-sec">
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">{unit}</InputAdornment>
                    ),
                  }}
                  label="Enter quantity of products"
                  id="outlined-basic"
                  variant="outlined"
                  className="w-full m-0"
                  size="small"
                  required
                  name="product_stock_in"
                  onChange={handleChange}
                />
              </Box>
                <Box className="box-sec">
                  <TextField
                    label="Purchase Price"
                    value={isActive ? parseFloat(values.purchase_price) : convertedPrice}
                    id="outlined-basic"
                    variant="outlined"
                    className="w-full m-0"
                    size="small"
                    required
                    name="purchase_price"
                    onChange={isActive ? handleChange : (e)=>setConvertedPrice(e.target.value)}
                  />
                </Box>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="Date"
                      value={todaysDate}
                      format="LL"
                      className="w-full"
                      maxDate={todaysDate}
                      onChange={(newValue) => setTransactionDate(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>

              <Box className="box-sec">
                <TextField
                  fullWidth
                  multiline
                  id="outlined-basic"
                  variant="outlined"
                  label="Description"
                  type="text"
                  placeholder="Enter Details (Party Name, Bill No etc)"
                  InputProps={{
                    rows: 4,
                  }}
                  className="w-full"
                  name="product_desc"
                  onChange={handleChange}
                />
              </Box>
            </Box>
          </div>
        </div>

        <div className="product-stock-in-btn-wrapper">
          <button
            className=" text-green-600 bg-green-200 w-full p-3 rounded-[5px] hover:text-white hover:bg-green-600 transition-all ease-in"
            onClick={handleClick}
          >
            Stock In
          </button>
        </div>
      </div>
    </Box>
  );
};

export default StockIn;
