import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";

//Styling ModalLogin
import "../styles/ModalLoginStyle.css";
import "../styles/StyleCustome.scss";

function Login({ show, onHide }) {
  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
     
      >
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
          <Form className="mt-2 ">
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Link to="/forget_password" onClick={onHide}>
              <h6 className="text-end ">Forget password?</h6>
            </Link>
            <Button className="btn-login" onClick={onHide}>
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className=" justify-content-center align-items-baseline ">
          <h6>Don't have an account ? </h6>
          <Link to="/register" onClick={onHide}>
            <h6 >Create</h6>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
