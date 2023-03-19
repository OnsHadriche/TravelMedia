import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { requestCreatePackage } from "../redux/actions/packageActionCreators";
import "../styles/CreateItem.css"
import { useRef } from "react";

function CreatePack() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const inputFileRef = useRef();
  const [title, setTitle] = useState(" ");
  const [country, setCountry] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState(" ");
  const [expiredAt, setExpiredAt] = useState(" ")
 
  // const [packData, setPackData] = useState({
  //   photo: " ",
  //   title: " ",
  //   price: " ",
  //   country: " ",
  //   details: " ",
  //   expiredAt: " ",
  // });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(requestCreatePackage(packData, history, id));
  // };
  // const handleChange = (e) => {
  //   setPackData((prevPackData) => ({
  //     ...prevPackData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("image", file);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("country", country);
    formData.append("details", details);
    formData.append("expiredAt", expiredAt);
 
    dispatch(requestCreatePackage( formData, history,id));
  };

  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
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
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              
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
        <div className = "row">
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
        </div>
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
          Add Package
        </button>
      </Form>
    </Container>
  );
}

export default CreatePack;
