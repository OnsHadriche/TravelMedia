import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


import ListItem from "./ListItem";

import { fetchEventByPage, requestRemoveEvent } from "../redux/actions/eventActionCreator";
import { Container } from "react-bootstrap";

function EventCreatedByPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const allEventByPage = useSelector((state) => state.events.createdByPage);
  console.log(allEventByPage)
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchEventByPage(id));
  }, [dispatch, id]);

  return (
    <Container>
      <div className="row gy-4"
      >
        {allEventByPage.map((event, index) => (
          <div className="col" key={index}>
            <ListItem
              title={event.title}
              photo = {event.image}
              date={event.createdAt}
              linkUpdate={`/update-event/${event._id}`}
              handleClose={handleClose}
              handleShow={handleShow}
              requestRemove={requestRemoveEvent(event._id,handleClose)}
              show={show}
              

            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default EventCreatedByPage;
