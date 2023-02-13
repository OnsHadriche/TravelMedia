import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { requestCreatePackage } from "../redux/actions/packageActionCreators";
import "../styles/CreateItem.css"

function CreatePack() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [packData, setPackData] = useState({
    photo: " ",
    title: " ",
    price: " ",
    country: " ",
    details: " ",
    expiredAt: " ",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestCreatePackage(packData, navigate, id));
  };
  const handleChange = (e) => {
    setPackData((prevPackData) => ({
      ...prevPackData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Container className="mt-3 flex-grow-1 p-3">
      <h1>Create New Package</h1>
      <Form onSubmit={handleSubmit}>
        <div className = "row">
          <Form.Group className="mb-3 col">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={packData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              type="text"
              value={packData.country}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className = "row">
          <Form.Group className="mb-3 col">
            <Form.Label>Finale Date</Form.Label>
            <Form.Control
              name="expiredAt"
              type="date"
              value={packData.expiredAt}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={packData.price}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            name="photo"
            value={packData.photo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="details"
            value={packData.details}
            onChange={handleChange}
          />
        </Form.Group>

        <button class="button-18" role="button" type="submit">
          {" "}
          Add Package
        </button>
      </Form>
    </Container>
  );
}

export default CreatePack;
