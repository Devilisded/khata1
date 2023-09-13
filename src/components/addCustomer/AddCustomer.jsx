import { Box, Checkbox, TextField } from "@mui/material"
import "./addcustomer.scss"
import { useState } from "react";

const AddCustomer = () => {
    const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [isChecked2, setIsChecked2] = useState(false);
  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const label1 = { inputProps: { "aria-label": "Checkbox demo" } };

const [select,setSelect]=useState(false)
  return (
    <div>
    <div >
    <Box sx={{ width: 350 }} role="presentation">
      <h1 className="text_left heading font-semibold text-2xl">Add Customer</h1>

      <div className="section-wrapper-2">
        <div className="section-2">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "97%" },
            }}
            noValidate
            autoComplete="off"
          >
            
            <Box className="box-sec">
              <TextField
                label="Name"
                id="outlined-basic"
                variant="outlined"
                className="w-full"
                required
              />
            </Box>

            <Box className="box-sec">
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Phone Number"
                type="tel"
                className="w-full"
                required
              />
            </Box>

            <Box className="box-sec ">
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Enter amount"
                className="sec-1"
                required
              />
              <select className={select?"text-green-600 bg-white p-3 sel":"text-red-600 bg-white p-3 sel"}>
                <option onClick={()=>setSelect(false)}>Debit</option>
                <option onClick={()=>setSelect(true)}>Credit</option>
              </select>
            </Box>
          </Box>
          <Box className="box-sec check-box-sec">
            <Checkbox {...label} onChange={handleOnChange} />
            <span>Add GSTIN & GST</span>
          </Box>

          {isChecked ? (
            <>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "97%" },
                }}
                noValidate
                autoComplete="off"
                className="box-sec-2"
              >
                <Box className="box-sec ">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="GST IN"
                className="w-full"

                  />
                </Box>
                <p className="text-xl font-semibold">Shipping Address</p>
                <Box className="box-sec">
                  <TextField
                    id="outlined-basic"
                    label="Flat / Building Number"
                    variant="outlined"
                className="w-full"

                  />
                </Box>

                <Box className="box-sec">
                  <TextField
                    id="outlined-basic"
                    label="Area / Locality"
                    variant="outlined"
                className="w-full"

                  />
                </Box>
                <Box className="box-sec">
                  <TextField
                    id="outlined-basic"
                    label="Area / Locality"
                    variant="outlined"
                    className="w-full"


                  />
                </Box>
                <Box className="box-sec">
                  <TextField
                    id="outlined-basic"
                    label="PIN Code"
                    variant="outlined"
                className="w-full"

                  />
                </Box>
                <Box className="box-sec">
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    className="sec-1 w-full"
                  />

                  <TextField
                    id="outlined-basic"
                    label="State"
                    variant="outlined"
                    className="sec-2"
                  />
                </Box>
              </Box>
              <Box className="box-sec check-box-sec text-center ">
                <Checkbox
                  {...label1}
                  defaultChecked
                  onChange={handleOnChange2}
                />
                <span>Billing Address same as shipping address</span>
              </Box>

              {isChecked2 ? (
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "97%" },
                  }}
                  noValidate
                  autoComplete="off"
                  className="box-sec-2"
                >
                  <p className="text_left">Billing Address</p>
                  <Box className="box-sec">
                    <TextField
                      id="outlined-basic"
                      label="Flat / Building Number"
                      variant="outlined"
                      className="w-full"
                    />
                  </Box>

                  <Box className="box-sec">
                    <TextField
                      id="outlined-basic"
                      label="Area / Locality"
                      variant="outlined"
                      className="w-full"

                    />
                  </Box>
                  <Box className="box-sec">
                    <TextField
                      id="outlined-basic"
                      label="Area / Locality"
                      variant="outlined"
                      className="w-full"

                    />
                  </Box>
                  <Box className="box-sec">
                    <TextField
                      id="outlined-basic"
                      label="PIN Code"
                      variant="outlined"
                      className="w-full"
                    />
                  </Box>
                  <Box className="box-sec">
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      className="sec-1"
                    />

                    <TextField
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      className="sec-2"
                    />
                  </Box>
                </Box>
              ) : (
                <div></div>
              )}
            </>
          ) : (
            <div></div>
          )}
          
        </div>
      </div>
    </Box>
    </div>
    <div className="add-customer-btn-wrapper">
    <button className="add_btn text-green-600" type="submit">Add Customer</button>
  </div>
    </div>
  )
}

export default AddCustomer