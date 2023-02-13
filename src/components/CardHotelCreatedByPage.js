import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchHotelByIdPage,
  requestDeleteHotel,
} from "../redux/actions/hotelActions";

import ListItem from "./ListItem";

function HotelCreatedByPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const allHotelsByPage = useSelector((state) => state.hotels.hostedByPage);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchHotelByIdPage(id));
  }, [dispatch, id]);

  return (
    <Container>
      <div className=" row gy-4"
      >
        {allHotelsByPage.map((hotel, index) => (
          <div  className = "col" key={index}>
            <ListItem
              title={hotel.title}
              date={hotel.dateCreated}
              linkUpdate={`/update-hotel/${hotel._id}`}
              handleClose={handleClose}
              handleShow={handleShow}
              requestRemove={requestDeleteHotel(hotel._id, handleClose)}
              show={show}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HotelCreatedByPage;
