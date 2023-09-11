import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./login.scss";

function Login() {
  return (
    <div className="login-section">
      <div className="container1">
        <div className="section-1">
          <h1>ACCBOOK</h1>
          <div>Hi, Welcome Back</div>
        </div>
        <div className="section-2">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch", pb: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Email" variant="standard" />
          </Box>

          <Box sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
            />
          </Box>
        </div>
        <div className="section-3">
          <div>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            Keep me logged in
          </div>
          <div>Forgot Password?</div>
        </div>
        <div className="section-4">
          <Button variant="contained" sx={{ width: "50ch" }}>
            Log In
          </Button>
        </div>
        <div>
          <p>
            <a href="#">Don't have an account?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
