import { React, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "../styles/CreateItem.css";
import { requestCreatingNewEvent } from "../redux/actions/eventActionCreator";

function CreateEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputFileRef = useRef();
  const { id } = useParams();
  const [title, setTitleEvent] = useState(" ");
  const [country, setCountry] = useState(" ");
  const [expiredAt, setExpiredAt] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState(" ");

  // const [eventData, setEventData] = useState({
  //   photo: " ",
  //   title: " ",
  //   price: " ",
  //   country: " ",
  //   details: " ",
  //   category: " ",
  //   expiredAt: " ",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("image", file);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("country", country);
    formData.append("details", details);
    formData.append("category", category);
    formData.append("expiredAt", expiredAt);
    dispatch(requestCreatingNewEvent(formData, id, navigate));
  };
  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <Container className="mt-3 flex-grow-1 p-3">
      <h1>Create New event</h1>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group className="mb-3 col">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" value={title} onChange={(e)=>setTitleEvent(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3 col">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              type="text"
              value={country}
              onChange={(e)=>setCountry(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="row">
          <Form.Group className="mb-3 col">
            <Form.Label>Finale Date</Form.Label>
            <Form.Control
              name="expiredAt"
              type="date"
              value={expiredAt}
              onChange={(e)=>setExpiredAt(e.target.value)}
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
          <Form.Group className="mb-3 col ">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="col"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            >
              <option value="">Open this select menu</option>
              <option value="Soirée">Soirée</option>
              <option value="Musique">Musique</option>
              <option value="Théatre">Théatre</option>
              <option value="Cinéma">Cinéma</option>
              <option value="Foire">Foire</option>
              <option value="Camping">Camping</option>
            </Form.Select>
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            ref={inputFileRef}
            id="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </Form.Group>
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

        <button class="button-18" role="button" type="submit">
          {" "}
          Add event
        </button>
      </Form>
    </Container>
  );
}

export default CreateEvent;
