import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/CreateItem.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { getEventById, requestUpdateEvent } from "../redux/actions/eventActionCreator";
import { useRef } from "react";
function UpdateEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectEvent = useSelector((state) => state.events.selected);
  console.log(selectEvent);
  const { id } = useParams();
  const [updateEvent, setUpdateEvent] = useState({
    title: " ",
    price: " ",
    country: " ",
    details: " ",
    category: " ",
    expiredAt: " "
  });
  const inputFileRef = useRef();
  const [file, setFile] = useState(selectEvent?.image);



  useEffect(() => {
    if (selectEvent) {
      setUpdateEvent(selectEvent);
    }
  }, [selectEvent]);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, country, details , category, expiredAt} = updateEvent;
    dispatch(
      requestUpdateEvent(id, { category,expiredAt, title, price, country, details }, navigate)
    );
  };
  const handleChange = (e) => {
    setUpdateEvent((prevEventData) => ({
      ...prevEventData,
      [e.target.name]: e.target.value,
    }));
  };
  
  return (
    <div>
    <Container className="mt-3 flex-grow-1 p-3">

        <h1>Update informations of  Event</h1>
        <Form onSubmit={handleSubmit}>
          <div className="row">

          <Form.Group className="mb-3 col">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={updateEvent.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Country</Form.Label>
            <Form.Control
              name="country"
              type="text"
              value={updateEvent.country}
              onChange={handleChange}
            />
          </Form.Group>
          </div>
          <div className="row">
          <Form.Group className="mb-3 col">
            <Form.Label>Finale Date</Form.Label>
            <Form.Control
              name="expiredAt"
              type="date"
              value={updateEvent.expiredAt}
              onChange={handleChange}
            />
          </Form.Group>
        
          <Form.Group className="mb-3 col">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={updateEvent.price}
              onChange={handleChange}
            />
          </Form.Group>
          </div>
         
        
          <Form.Group className="mb-3 col ">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="col"
              name="category"
              value={updateEvent.category}
              onChange={handleChange}
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
  

          <button className="button-18" role="button"  type="submit" >
            Update
          </button>
        </Form>
      </Container>
    </div>
  );
}

export default UpdateEvent;
