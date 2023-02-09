import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Button from "@mui/material/Button";

import "../styles/Profile.css";
import { requestUpdateUserInfo } from "../redux/actions/userActionCreators";
import { useRef } from "react";

function PersonInfo() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.info);
  const [file, setFile] = useState(userInfo?.image);
  const [firstName, setFirstName] = useState(userInfo?.firstName);
  const [lastName, setLastName] = useState(userInfo?.lastName);
  const [email, setEmail] = useState(userInfo?.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber);
  const inputFileRef = useRef();

  // const [updateData, setUpdateData] = useState({
  //   firstName: userInfo?.firstName,
  //   lastName: userInfo?.lastName,
  //   email: userInfo?.email,
  //   phoneNumber: userInfo?.phoneNumber,
  //   image:userInfo?.image
  // });

  useEffect(()=>{
    console.log("update")
      
    },[userInfo])

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  // const handleOnChange = (e) => {
  //   if (edit) {
  //     setUpdateData((prevUserData) => ({
  //       ...prevUserData,
  //       [e.target.name]: e.target.value,
  //     }));
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", file);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    console.log("update start");
    dispatch(requestUpdateUserInfo(formData))
  };

  return (
    <>
      <h5 className="card-title mt-2 text-start border-bottom titleAcount">
        Profile Information
      </h5>
      <div className="card-body d-flex-row   ">
        <Box component="form" onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
          <div>
            <TextField
              label="First Name"
              id="firstName"
              value={firstName}
              fullWidth
              margin="normal"
              onChange={(e)=> setFirstName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Last Name"
              id="lastName"
              value={lastName}
              fullWidth
              onChange={(e)=> setLastName(e.target.value)}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              label="Email"
              id="email"
              variant="outlined"
              value={email}
              type={"email"}
              fullWidth
              margin="normal"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Phone number"
              id="phoneNumber"
              value={phoneNumber}
              type={"tel"}
              fullWidth
              margin="normal"
              onChange={(e)=> setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Technology Image:
              </label>
              <input
                className="d-none"
                ref={inputFileRef}
                id="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
              <Button
                onClick={() => inputFileRef.current.click()}
                className="w-100"
                variant="outline-dark"
              >
                Browse.. ({file ? file.firstName : "Choose File"})
              </Button>
            </div>
          <div className="mt-3">
            
            <Button variant="contained" type="submit">Update</Button>

            {/* <Button
              variant="contained"
              className="ps-3 ms-2"
              onClick={handleClickEdit}
            >
              Edit
              <ModeEditOutlineOutlinedIcon className="ms-2" />
            </Button> */}
          </div>
        </Box>
      </div>
    </>
  );
}

export default PersonInfo;
