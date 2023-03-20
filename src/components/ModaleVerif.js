import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory, useParams } from "react-router-dom";
import { requestUpdateHotel } from "../redux/actions/hotelActions";

function ModaleVerif(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const [updateHotel, setUpdateHotel] = useState({
    title: props.hotelSelected?.hotel.title,
    price: props.hotelSelected?.hotel.price,
    country: props.hotelSelected?.hotel.country,
    details: props.hotelSelected?.hotel.details,
    star: props.hotelSelected?.hotel.star,
    rooms: props.hotelSelected?.hotel.rooms, 
  });
  console.log(props.hotelSelected)

  useEffect(() => {
    if (props.hotelSelected) {
      setUpdateHotel(props.hotelSelected);
    }
  }, [props.hotelSelected]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const { rooms,title,details,star,country,price} = updateHotel;
    dispatch(
      requestUpdateHotel(
        id,
        { rooms,title,details,star,country,price},
        history
      )
    );
    props.handleClose()
  };
  
  const isValide = () => {
    if (props.hotelSelected.hotel.rooms - props.numberRoom !== 0) {
      setUpdateHotel((prevEventData) => ({
        ...prevEventData,
       rooms: (props.hotelSelected?.hotel.rooms - Number(props.numberRoom)) ,
      }));
      return true;

    }
    return false;
  };


  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      {isValide ? (
        <Modal.Body>Rooms are disponible </Modal.Body>
      ) : (
        <Modal.Body>Rooms are not disponible</Modal.Body>
      )}

      <Modal.Footer>
        <Button variant="secondary" onClick={handleSubmit}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModaleVerif;
