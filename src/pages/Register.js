import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/RegisterStyle.css";
import Bg_Travel from "../images/travel.png";

import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { requestRegister } from "../redux/actions/userActionCreators";
import { alertError } from "../utils/feedback";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputFileRef = useRef();
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm((prevState) => !prevState);
  };
  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (!firstName) {
      console.log("cfiygvbh")
      alertError("First name is required");
    }
    if (!lastName) {
      alertError("Last name is required");
    }
    if (!email) {
      alertError("Email is required");
    }
    if (!password) {
      alertError("Password is required");
    }
    if (!confirmPassword) {
      alertError("You have to confirm your password");
    }
    if (password !== confirmPassword) {
      alertError("Passwords mismatch");
    }

    formData.append("image", file);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);
    console.log(formData);
    console.log(confirmPassword);
    dispatch(requestRegister(formData, history));
  };

  return (
    <div className="bg-register shadow mb-5 bg-body rounded row">
      <div
        className="input-register  col-7 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="text-center  mb-4 header-register">Sign up</h3>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex m-2">
            <i
              className="bi bi-person-fill me-2"
              style={{ fontSize: 30, color: "#252525" }}
            ></i>
            <Form.Control
              type="text"
              placeholder="First Name"
              className="me-1"
              value={firstName}
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
            />
          </div>
          <div className="d-flex m-2">
            <i
              className="bi bi-envelope-fill  me-2"
              style={{ fontSize: 30, color: "#252525" }}
            ></i>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>
          <div className="d-flex m-2">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ fontSize: 30, color: "#252525" }}
            ></i>

            <Form.Control
              type="tel"
              placeholder="phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="phoneNumber"
            />
          </div>
          <div className="d-flex m-2">
            <i
              className="bi bi-lock-fill me-2"
              style={{ fontSize: 30, color: "#252525" }}
            ></i>
            <div
              className="pwd-style d-flex me-2"
              style={{ border: "1px solid #cbc4c0" }}
            >
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ border: "none" }}
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="input-group-text"
                style={{ backgroundColor: "white", border: "none" }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </span>
            </div>
            <div
              className="d-flex pwd-style "
              style={{ border: "1px solid #cbc4c0" }}
            >
              <Form.Control
                type={showPasswordConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                style={{ border: "none" }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
              />
              <span
                className="input-group-text "
                style={{ backgroundColor: "white", border: "none" }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPasswordConfirm}
                  edge="end"
                >
                  {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center m-2">
            <i
              className="bi bi-image me-2"
              style={{ fontSize: 30, color: "#252525" }}
            ></i>
            <Form.Control
              ref={inputFileRef}
              id="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
        <Button
          className="text-center m-2 btn-submit"
          type="submit"
          style={{ width: "70%", borderRadius: "20px" }}
        >
          Submit
        </Button>
        </Form>
        <hr className="or-hr" />
        <div className="social-media">
          <BsFacebook className="facebook me-5" />
          <BsTwitter className="twitter me-5" />
          <i className="bi bi-google gmail "></i>
        </div>
      </div>
      <div
        className="col-5 d-flex flex-column justify-content-center align-items-center title-sign-up"
        style={{
          color: "white",
          backgroundColor: "rgb(116 125 126)",
          backgroundBlendMode: "multiply",
          backgroundImage: `url(${Bg_Travel})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2>Hello, friend!</h2>
        <p className="text-center">
          Enter your personal details and start with us{" "}
        </p>
      </div>
    </div>
  );
}

export default Register;
