import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { requestUpdateEvent } from "../redux/actions/eventActionCreator";
import { requestUpdateHotel } from "../redux/actions/hotelActions";

function UpdateHotel() {
  const dispatch = useDispatch();
  const inputFileRef = useRef();

  const hotelInfo = useSelector((state) => state.hotels.selected);
  const [title, setTitle] = useState(hotelInfo.title);
  const [country, setCountry] = useState(hotelInfo.country);
  const [rooms, setRooms] = useState(hotelInfo.expiredAt);
  const [price, setPrice] = useState(hotelInfo.price);
  
  const [file, setFile] = useState(hotelInfo.photo);
  const [details, setDetails] = useState(hotelInfo.details);
  const [star, setStar] = useState(hotelInfo.star);

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("details", details);
    formData.append("star", star);
    formData.append("rooms", rooms);
    formData.append("price", price);
    formData.append("country", country);
    console.log("update start");
    dispatch(requestUpdateHotel(formData));
  };
  return (
    <div className="container mt-5">
      <h1>Update information of hotel </h1>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group className="mb-3 col">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Numbre of chambers</Form.Label>
            <Form.Control
              name="rooms"
              type="number"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Numbre of Stars</Form.Label>
            <Form.Control
              name="star"
              type="number"
              value={star}
              onChange={(e) => setStar(e.target.value)}
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
            onChange={(e) => setDetails(e.target.value)}
          />
        </Form.Group>

        <button class="button-18" role="button" type="submit">
          {" "}
          Update
        </button>
      </Form>
    </div>
  );
}

export default UpdateHotel;
