import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import Button from '@mui/material/Button';

function ChangePassword() {
  const dispatch = useDispatch;
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState({
    curentPassword :" ",
    newPassword: " ",
    confirmPassword: " "
  });

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPwd) => !prevShowPwd);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch();
  };
  return (
    <>
      <h5 className="card-title mt-2 border-bottom text-start">Change Password</h5>
      <div className="card-body  ">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel htmlFor="outlined-adornment-password">
                Current Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password.curentPassword}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Current Password"
                required
                />
            </FormControl>
            <FormControl  variant="outlined" fullWidth margin="normal">
              <InputLabel htmlFor="outlined-adornment-password">
                New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password.newPassword}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Current Password"
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel htmlFor="outlined-adornment-password">
               Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password.confirmPassword}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Current Password"
              />
            </FormControl>
          </div>
          <div className="mt-3" fullWidth>
           <Button variant="contained"  >
             Change Password
            </Button>
            </div>
        </Box>
      </div>
    </>
  );
}

export default ChangePassword;
