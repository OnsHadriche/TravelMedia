import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";


function RemoveModal(props) {
  const dispatch = useDispatch();
  const handleDelete =  () => {
    dispatch(props.requestRemove);
    // setTimeout(refresh, 500)
    // window.location.reload();
  };

  return (
    <>
      <Button size="small" onClick={props.handleShow}>
        Delete
      </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure that you want to delete this event</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RemoveModal;
