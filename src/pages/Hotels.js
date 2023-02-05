import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RecipeReviewCard from "../components/CardHotel";
import CheckInCheckOutDatePicker from "../components/checkDate";
import Login from "../components/ModalLogin";
import SearchHotel from "../components/SearchBarHotel";
import bgHotel from "../images/Hotel.jpg";
import { fetchAllHotels } from "../redux/actions/hotelActions";
import "../styles/hotelStyle.css";

function Hotels() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue]= useState()
  const allHotels =  useSelector((state) => state.hotels.all);
  const { isAuth, info } = useSelector((state) => state.user);
  const userId = info && info._id;
  const [modalShowLogin, setModalShowLogin] = useState(false);
  useEffect(() => {
    if (allHotels) {
      dispatch(fetchAllHotels());
    }
  },[]);
  const handleClickBook = (id) => {
    if (isAuth) {
      return navigate(`/hotel-details/${id}`);
    } else {
      return setModalShowLogin(true);
    }
  };

  console.log(allHotels);

  const styleHotel = {
    marginTop: "-6rem",
  };
  const styleHotelCard = {
    marginTop: "3rem",
  };
  return (
    <>
    <Container className="bg-hotel mt-3">
      <div className="row align-items-centers gy-2 ">
        <div
          style={styleHotel}
          className="col-lg-4 col-md-7 col-sm-12 search-hotel"
        >
          <SearchHotel />
        </div>
        <div
          style={styleHotelCard}
          className="col-lg-8 col-md-5 col-sm-12 style-margin mb-5"
        >
          <Container >
            <div className="row">
              {allHotels?.map((hotel) => (
                <div className="col"       key={hotel._id}>
                  <RecipeReviewCard
                  hotel = {hotel}
                  handleClickBook = {handleClickBook}
                  isAuth = {isAuth}
                  userId ={userId}
                  value = {value}
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

export default Hotels;
