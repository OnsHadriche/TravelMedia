import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { requestCreatingNewPage } from "../redux/actions/pageActions";
import "../styles/PageStyle.css";
import { useRef } from "react";

export default function CreatePageAgency() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [file, setFile] = useState(null);
  const [contact, setContact] = useState(" ")
  const [country, setContry] = useState(" ")
  const inputFileRef = useRef();
  // const [agencyData, setAgencyData] = useState({
  //   photo: " ",
  //   title: " ",
  //   description: " ",
  //   contact: " ",
  // });
  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", file);
  formData.append("country", country);
  formData.append("description", description);
  formData.append("contact", contact);
  dispatch(requestCreatingNewPage(formData,history));
};
  // const handleChange = (e) => {
  //   setAgencyData((prevAgencyData) => ({
  //     ...prevAgencyData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  console.log(title)
 
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
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descriptions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                name="photo"
                ref={inputFileRef}
                onChange={handleChange}
                type="file"
                accept="image/*"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                name="country"
                type="text"
                value={country}
                onChange={(e)=>setContry(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                name="contact"
                type="tel"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
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
