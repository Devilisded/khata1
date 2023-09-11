import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./login.scss";
import { InputAdornment } from "@mui/material";
import { IconLock, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
function Login() {

  return (
    <div className="login-section">
      <div className="container1">
        <div className="section-1">
          <h1 className="text-3xl">ACCBOOK</h1>
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
            <TextField id="standard-basic" label="Email" variant="standard" 
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconUser />
                              </InputAdornment>
                            ),
                          }}/>
          </Box>

          <Box sx={{ "& > :not(style)": { m: 1, width: "45ch" } }}>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconLock />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </div>
        <div className="section-3">
          <div>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            Keep me logged in
          </div>
        </div>
        <div className="section-4">
          <Link to="/">
          <Button variant="contained" sx={{ width: "50ch" }}>
            Log In
          </Button>
          </Link>
        </div>
        <div>
          <p>
          <div className="text-center">Forgot Password?</div>
          <Link to="/register">
            <p className=" cursor-pointer">Don't Have An Account ?</p>
          </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
