import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useNavigate, useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { requestCreatingHotel } from "../redux/actions/hotelActions";
import "../styles/CreateItem.css"
import { useRef } from "react";

function CreateHotel() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const inputFileRef = useRef();
  const [title, setTitle] = useState(" ");
  const [country, setCountry] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState(" ");
  const [rooms, setRooms] = useState(" ")
  const [star , setStar] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("image", file);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("country", country);
    formData.append("details", details);
    formData.append("star", star);
    formData.append("rooms", rooms);
    dispatch(requestCreatingHotel( id,formData, history));
  };

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
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
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Cover Photo</Form.Label>
          <Form.Control
            name="photo"
            ref={inputFileRef}
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
              value={country}
              onChange={(e)=>setCountry(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Numbre of chambers</Form.Label>
            <Form.Control
              name="rooms"
              type="number"
              value={rooms}
              onChange={(e)=>setRooms(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Numbre of Stars</Form.Label>
            <Form.Control
              name="star"
              type="number"
              value={star}
              onChange={(e)=>setStar(e.target.value)}
            />
          </Form.Group>
        </div>
    
        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="details"
            value={details}
            onChange={(e)=>setDetails(e.target.value)}
          />
        </Form.Group>
        <button className="button-18" role="button" type="submit" onClick={handleSubmit}>
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
