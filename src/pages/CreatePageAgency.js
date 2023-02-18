import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { requestCreatingNewPage } from "../redux/actions/pageActions";
import "../styles/PageStyle.css";

export default function CreatePageAgency(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [agencyData, setAgencyData] = useState({
    photo: " ",
    title: " ",
    description: " ",
    contact: " ",
  });
  const handleChange = (e) => {
    setAgencyData((prevAgencyData) => ({
      ...prevAgencyData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestCreatingNewPage(agencyData));
    navigate("/agency-page");
  };
  return (
    <div className="bg-create-bg">
      <Container className="p-5 ">
        <div className="bg-inside-page p-5">
          <h2>Create new page agency</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={agencyData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descriptions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={agencyData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                name="photo"
                
                onChange={handleChange}
                type="file"
                accept="image/*"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                name="contact"
                type="tel"
                value={agencyData.contact}
                onChange={handleChange}
              />
            </Form.Group>
            <button class="button-18" role="button" type="submit"> Create</button>
            {/* <Button type="submit" className="mx-auto d-block w-100">
              Add
            </Button> */}
          </Form>
        </div>
      </Container>
    </div>
  );
}
