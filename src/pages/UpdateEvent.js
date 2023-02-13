import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";
import { requestUpdateEvent } from "../redux/actions/eventActionCreator";

function UpdateEvent() {
  const dispatch = useDispatch()
  const inputFileRef = useRef();

  const eventInfo = useSelector((state)=> state.events.selected)
  const [title, setTitleEvent] = useState(eventInfo.title)
  const [country, setCountry] = useState( eventInfo.country)
  const [expiredAt, setFinaleDate] = useState(eventInfo.expiredAt)
  const [price, setPriceEvent] = useState(eventInfo.price)
  const [category, setCategoryEvent] = useState(eventInfo.category)
  const [file, setFile] = useState(eventInfo.photo)
  const [details, setDetails] = useState(eventInfo.details)
 
  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("details", details);
    formData.append("category", category);
    formData.append("expiredAt", expiredAt);
    formData.append("price", price);
    formData.append("country", country);
    console.log("update start");
    dispatch(requestUpdateEvent(formData))
  };
  return (
    <div className="container mt-5">
      <h1>Create New event</h1>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <Form.Group className="mb-3 col">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={title}
              onChange={(e)=>setTitleEvent(e.target.value)}
            />
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
              onChange={(e)=> setFinaleDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={price}
              onChange={(e)=>setPriceEvent(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col ">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="col"
              name="category"
              value={category}
              onChange={(e)=> setCategoryEvent(e.target.value)}
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
           className="d-none"
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
            onChange={(e)=> setDetails(e.target.value)}
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

export default UpdateEvent;
