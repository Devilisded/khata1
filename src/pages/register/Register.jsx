import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import { IconInbox, IconPhoneCall, IconUser } from "@tabler/icons-react";
import { IconLock } from "@tabler/icons-react";
import IconButton from "@mui/material/IconButton";
import "./register.scss";
function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="register">
      <div className="register-section">
        <div className="section-1">
          <h1>AccBook</h1>
          <h2>Sign up</h2>
          <p>Enter your credentials to continue</p>
          <h6>Sign up with Email address</h6>
        </div>
        <div className="section-2">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "21.5ch", pb: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconUser />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconPhoneCall />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch", pb: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Email"
              placeholder="Email"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconInbox />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/*<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <IconAt sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField id="input-with-sx" label="With sx" variant="standard" />
                </Box>*/}

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconLock />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </div>
        <div className="section-3">
          <div>
            <span>
              <Checkbox inputProps={{ "aria-label": "controlled" }} />
            </span>
            Agree with Terms & Condition.
          </div>
        </div>
        <div className="section-4">
          <Button variant="contained" sx={{ width: "50ch" }}>
            Sign Up
          </Button>
        </div>
        <div className="section-5">
          <p>
            <a href="#">Already have an account?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
