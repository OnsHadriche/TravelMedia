import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
function RoomAndGuests(props) {
  const numberOfChildren = [0, 1, 2, 3, 4];
  const [nbChilds, setNbChilds] = useState(0);
  const [age, setAge] = useState(0);

  const handleChange = (event) => {
    setNbChilds(event.target.value);
  };
  useEffect(() => {});

  return (
    <>
      <div>
        <h6>Room {props.numberRoom}</h6>
      </div>
      <div className="d-flex flex-wrap">
        <div>
          <FormControl sx={{ m: 1, width: "200px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Adults
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              value={0}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <PersonIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="adults"
            />
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "200px" }}>
            <InputLabel id="demo-controlled-open-select-label">
              Childrens
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              label="Childrens"
              value={nbChilds}
              onChange={handleChange}
            >
              {numberOfChildren.map((child, index) => (
                <MenuItem value={child} key={index}>
                  {child}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

       
       

        {(() => {
          switch (nbChilds) {
            case 1:
              return (
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                </div>
              );
            case 2:
              return (
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                </div>
              );
            case 3:
              return (
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                </div>
              );
            case 4:
              return (
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    onChange={(e) => setAge(e.target.value)}
                    sx={{ m: 1, width: "200px" }}
                  />
                </div>
              );

            default:
              return <div> </div>;
          }
        })()}
      </div>
    </>
  );
}

export default RoomAndGuests;
