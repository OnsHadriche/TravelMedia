import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {
  getPackById,
  requestUpdatePack,
} from "../redux/actions/packageActionCreators";
function UpdatePack() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectPack = useSelector((state) => state.packs.selected);
  console.log(selectPack);
  const { id } = useParams();
  const [updatePack, setUpdatePack] = useState({
    title: selectPack?.title,
    price: selectPack?.price,
    country: selectPack?.country,
    details: selectPack?.details,
    expiredAt: selectPack?.expiredAt,
  });

  useEffect(() => {
    dispatch(getPackById(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (selectPack) {
      setUpdatePack(selectPack);
    }
  }, [selectPack]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const { expiredAt, title, price, country, details } = updatePack;
    dispatch(
      requestUpdatePack(
        id,
        { expiredAt, title, price, country, details },
        history
      )
    );
  };
  const handleChange = (e) => {
    setUpdatePack((prevEventData) => ({
      ...prevEventData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(selectPack)
  return (
    <div>
      <Container className="mt-3">
        <h1>Update information of package</h1>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <Form.Group className="mb-3 col">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={updatePack.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col">
              <Form.Label>Country</Form.Label>
              <Form.Control
                name="country"
                type="text"
                value={updatePack.country}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 col">
              <Form.Label>Finale Date</Form.Label>
              <Form.Control
                name="expiredAt"
                type="date"
                value={updatePack.expiredAt}
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
                value={updatePack.price}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3 col">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="details"
                value={updatePack.details}
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

export default UpdatePack;
