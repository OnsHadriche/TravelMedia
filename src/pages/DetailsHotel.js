import React from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import AddRooms from "../components/AddRoom";
import CardDetailsHotel from "../components/CardDetailsHotel";
import DateRangePicker from "../components/checkDate";

import img6 from "../images/bali.jpg";
import"../styles/DeatailsHotel.css"

function DetailsHotel() {
  const style_Slider = {
    height: "20rem",
    width: "30rempx",
  };

  return (
    <>
      <Container className="mt-5 ">
        <div
          className="row g-5"
          style={{
            backgroundColor: "rgb(215 227 227 / 37%)",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <div className="col-md-6 text-center">
            <img
              src={img6}
              alt="test"
              className="img-fluid"
              style={style_Slider}
            />
          </div>

          <div className="col-md-6 p-4">
            <CardDetailsHotel />
          </div>
        </div>
        <div className="bg-search ">
          <h5 className=" mt-5 ms-3">Dates & Rates</h5>
          <div className="d-flex align-items-center justify-content-between mt-3">
            {/* <DateRate /> */}
            <DateRangePicker />
            <div className=" me-1">
              <Button
                variant="outline-warning"
                style={{ width: 150, height: 56 }}
              >
                ChecK avaibility
              </Button>
            </div>
          </div>
          <div className="ms-2 ">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>Rooms and Guests</h5>
                </Accordion.Header>
                <Accordion.Body>
                  <AddRooms />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </>
  );
}

export default DetailsHotel;
