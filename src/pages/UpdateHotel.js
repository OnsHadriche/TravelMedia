import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {
  fetchHotelById,
  requestUpdateHotel,
} from "../redux/actions/hotelActions";
function UpdateHotel() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectHotel = useSelector((state) => state.hotels.selected);
  console.log(selectHotel);
  const { id } = useParams();
  const [updateHotel, setUpdateHotel] = useState({
    title: selectHotel?.hotel?.title,
    price: selectHotel?.hotel?.price,
    country: selectHotel?.hotel?.country,
    details: selectHotel?.hotel?.details,
    rooms: selectHotel?.hotel?.rooms,
    star: selectHotel?.hotel?.star,
  });

  useEffect(() => {
    if (selectHotel) {
      setUpdateHotel(selectHotel);
    }
  }, [selectHotel]);

  useEffect(() => {
    dispatch(fetchHotelById(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { star, rooms, title, price, country, details } = updateHotel;
    dispatch(
      requestUpdateHotel(
        id,
        { star, rooms, title, price, country, details },
        history
      )
    );
  };
  const handleChange = (e) => {
    setUpdateHotel((prevEventData) => ({
      ...prevEventData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <Container className="mt-3">
        <h1>Update information of hotel</h1>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={updateHotel.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col">
              <Form.Label>Country</Form.Label>
              <Form.Control
                name="country"
                type="text"
                value={updateHotel.country}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                value={updateHotel.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col">
              <Form.Label>Numbre of chambers</Form.Label>
              <Form.Control
                name="rooms"
                type="number"
                value={updateHotel.rooms}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col">
              <Form.Label>Numbre of Stars</Form.Label>
              <Form.Control
                name="star"
                type="number"
                value={updateHotel.star}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="details"
                value={updateHotel.details}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          <button
            className="button-18"
            role="button"
            type="submit"
            onClick={handleSubmit}
          >
            Update
          </button>
        </Form>
      </Container>
    </div>
  );
}

export default UpdateHotel;
