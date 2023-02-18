
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardEvent from "../components/CardEvent";
import Login from "../components/ModalLogin";
import SearchBarEvent from "../components/SearchBarEvent";
import { getAllEvents } from "../redux/actions/eventActionCreator";
import "../styles/hotelStyle.css";

function Event() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue]= useState()

  const allEvent =  useSelector((state) => state.events.all);
 

  const { isAuth, info } = useSelector((state) => state.user);

  const userId = info && info._id;
  const [modalShowLogin, setModalShowLogin] = useState(false);
  
  useEffect(() => {
      if (allEvent) {
      dispatch(getAllEvents());
    }
},[]);


const handleClicDetails = (id) => {
    if (isAuth) {
        return navigate(`/event/${id}`);
    } else {
      return setModalShowLogin(true);
    }
};



const styleHotel = {
    marginTop: "-6rem",
};
const styleHotelCard = {
    marginTop: "3rem",
};
return (
    <>
    <Container style={{height:"100%"}}>
      <div>
          <SearchBarEvent/>
        
        <div
          style={styleHotelCard}
        >
          <Container >
            <div className="row gy-2">
              {allEvent?.map((event) => (
                  <div className="col-4 col-sm-6 col-md-4" >
                  <CardEvent
                  isAuth = {isAuth}
                  userId ={userId}
                  Img={event.image}
                  page = {event.page}
                  eventTitle={event.title}
                  eventPrice ={event.price}
                  id ={event._id}
                  eventCountry = {event.country}
                  handleClicDetails={handleClicDetails}
                  // isLiked={favColor}
                  value ={value}
                  
                  />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </Container>
    <Login show={modalShowLogin} onHide={() => setModalShowLogin(false)} />

    </>
  );
}


export default Event
