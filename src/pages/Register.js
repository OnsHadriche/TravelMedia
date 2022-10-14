import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/RegisterStyle.css";
import Bg_Travel from "../images/travel.png";
import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import { BsFacebook, BsTwitter } from "react-icons/bs";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm((prevState) => !prevState);
  };
  return (
    <div className="bg-register shadow  mb-5 bg-body rounded row">
      <div
        className="input-register  col-7 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="text-center  mb-4 header-register">Sign up</h3>
        <Form>
          <div className="d-flex m-2">
            <i class="bi bi-person-fill me-2" style={{ fontSize: 30,color: "#252525" }}></i>
            <Form.Control
              type="text"
              placeholder="First Name"
              className="me-1"
            />
            <Form.Control type="text" placeholder="Last Name" />
          </div>
          <div className="d-flex m-2">
            <i class="bi bi-envelope-fill  me-2" style={{ fontSize: 30,color: "#252525" }}></i>
            <Form.Control type="email" placeholder="Email" />
          </div>
          <div className="d-flex m-2">
            <i class="bi bi-lock-fill me-2" style={{ fontSize: 30, color: "#252525" }}></i>
            <div
              className="pwd-style d-flex me-2"
              style={{ border: "1px solid #cbc4c0" }}
            >
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ border: "none" }}
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
        </Form>
        <Button
          className="text-center m-2"
          type="submit"
          style={{ width: "70%", borderRadius: "20px" }}
        >
          Submit
        </Button>
        <hr className="or-hr" />
        <div className="social-media">
          <BsFacebook className="facebook me-5" />
          <BsTwitter className="twitter me-5" />
          <i class="bi bi-google gmail "></i>
        </div>
      </div>
      <div
        className="col-5 d-flex flex-column justify-content-center align-items-center"
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
        <h2 >Hello, friend!</h2>
        <p className="text-center">Enter your personal details and start with us </p>
      </div>
    </div>
  );
}

export default Register;
