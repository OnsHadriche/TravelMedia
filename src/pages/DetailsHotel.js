import React, { useEffect, useState } from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import AddRooms from "../components/AddRoom";
import CardDetailsHotel from "../components/CardDetailsHotel";
import DateRangePicker from "../components/checkDate";
import ModaleVerif from "../components/ModaleVerif";

import img6 from "../images/bali.jpg";
import { fetchHotelById } from "../redux/actions/hotelActions";
import"../styles/DeatailsHotel.css"

function DetailsHotel() {
  const dispatch = useDispatch()
  const selectHotel = useSelector((state)=> state.hotels.selected)
  const {id} = useParams()

  useEffect(()=>{
    dispatch(fetchHotelById(id))
  },[dispatch,id])
  const style_Slider = {
    height: "20rem",
    width: "30rempx",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <CardDetailsHotel hotelSelected ={selectHotel}/>
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
                onClick = {handleShow}
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
      <ModaleVerif show = {show} handleClose ={handleClose}/>
    </>
  );
}

export default DetailsHotel;
