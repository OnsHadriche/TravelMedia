import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/RegisterStyle.css";
import { requestForgetPassword } from "../redux/actions/userActionCreators";

function ResetPwd() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestForgetPassword(email));
  };

  return (
    <div className="bg-register shadow mb-5 bg-body rounded row">
      <div
        className="input-register   d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="text-center  mb-4 header-register">
          Forget your password!
        </h3>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center"
        >
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            size="lg"
          />

          <Button
            className="text-center m-2"
            type="submit"
            style={{ width: "70%", borderRadius: "20px" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ResetPwd;
