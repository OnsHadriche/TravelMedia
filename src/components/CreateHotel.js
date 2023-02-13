import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { requestCreatingHotel } from "../redux/actions/hotelActions";
import "../styles/CreateItem.css"

function CreateHotel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [file, setFile] = useState(null);


  const [hotelData, setHotelData] = useState({
    photo: " ",
    title: " ",
    price: " ",
    country: " ",
    details: " ",
    // photos: " ",
    rooms: " ",
  });
  const handleChange = (e) => {
    setHotelData((prevHotelData) => ({
      ...prevHotelData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestCreatingHotel(id, hotelData, navigate));
  };
  return (
    <Container className="mt-3">
      <h1>Create New Offre Hotel</h1>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group className="mb-3 col">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={hotelData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={hotelData.price}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Cover Photo</Form.Label>
          <Form.Control
            name="photo"
            // value={hotelData.photo}
            onChange={handleChange}
            type="file"
            accept="image/*"
          />
        </Form.Group>
        <div className="row">
          <Form.Group className="mb-3 col">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              type="text"
              value={hotelData.country}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Numbre of chambers</Form.Label>
            <Form.Control
              name="rooms"
              type="number"
              value={hotelData.rooms}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
    
        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="details"
            value={hotelData.details}
            onChange={handleChange}
          />
        </Form.Group>
        <button class="button-18" role="button" type="submit" onClick={handleSubmit}>
          {" "}
          Add Hotel
        </button>
        {/* 
        <Button type="submit" className="mx-auto d-block w-100">
        Add
      </Button> */}
  
      </Form>
    </Container>
  );
}

export default CreateHotel;
