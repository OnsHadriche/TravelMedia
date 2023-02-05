import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";

//Styling ModalLogin
import "../styles/ModalLoginStyle.css";
import "../styles/StyleCustome.scss";
import { useDispatch } from "react-redux";
import { requestLogin } from "../redux/actions/userActionCreators";

function Login({ show, onHide }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestLogin(email, password));
  };
  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title className="justify-content-center">
            <h3>Log in</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="social-media">
            <BsFacebook className="facebook" />
            <BsTwitter className="twitter" />
            <i class="bi bi-google gmail "></i>
          </div>

          <hr />
          <Form className="mt-2 " onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Link to="/forget_password" onClick={onHide}>
              <h6 className="text-end ">Forget password?</h6>
            </Link>
            <Button className="btn-login" type="submit" onClick={onHide}>
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" justify-content-center align-items-baseline ">
          <h6>Don't have an account ? </h6>
          <Link to="/register" onClick={onHide}>
            <h6>Create</h6>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
