import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from "react-router-dom";
import CardHotel from "../components/CardHotel";

import CheckInCheckOutDatePicker from "../components/checkDate";
import Login from "../components/ModalLogin";
import SearchHotel from "../components/SearchBarHotel";
import bgHotel from "../images/Hotel.jpg";
import { fetchAllHotels } from "../redux/actions/hotelActions";
import "../styles/hotelStyle.css";

function Hotels() {
  const dispatch = useDispatch();
  const history= useHistory();
  const allHotels =  useSelector((state) => state.hotels.all);
  const { isAuth, info } = useSelector((state) => state.user);
  const userId = info && info._id;
  const [modalShowLogin, setModalShowLogin] = useState(false);
  const [value, setValue]= useState()
  const [valueInput, setValueInput]= useState()
  // const inputRef = useRef(null);
  // const inputRefKey = useRef(null);
  
  const [filtredData, setDataFiltered] = useState(allHotels);
  console.log(filtredData);
  
  useEffect(() => {
    if (allHotels) {
      dispatch(fetchAllHotels());
    }
  },[]);


  const handleClickBook = (id) => {
    if (isAuth) {
      return history.push(`/hotel-details/${id}`);
    } else {
      return setModalShowLogin(true);
    }
  };

  const handleChange = (e)=>{
    setValueInput(e.target.value)
  }

  const styleHotel = {
    marginTop: "-6rem",
  };
  const styleHotelCard = {
    marginTop: "3rem",
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // let valueKey = inputRef.current.value.toLowerCase();
    // let valueKey = inputRefKey.current.toLowerCase()
    console.log("==========================");

    let resultHotel = allHotels.filter((data) =>
      data.country.toLowerCase().includes(valueInput.toLowerCase())
    );
  
  

    console.log("=====================================");
    console.log(resultHotel)
    setDataFiltered(
       resultHotel);

  };
  console.log({"test": filtredData});
  return (
    <>
    <div className="bg-hotel d-fle mt-3 mx-3">
      <div className=" row align-items-centers  ">
        <div
          style={styleHotel}
          className=" search-hotel col-lg-2 col-sm-2 col-md-4"
        >
          <SearchHotel handleSearch ={handleSearch} handleChange = {handleChange} valueInput = {valueInput}/>
        </div>
        <div
          style={styleHotelCard}
          className=" col-lg-10 col-md-8 col-sm-8 style-margin mb-5"
        >
          <Container  >
            <div className="row gy-2">
              {filtredData?.map((hotel) => (
                <div className="col-12 col-sm-7 col-md-8" >
                  <CardHotel
                  isAuth = {isAuth}
                  userId ={userId}
                  Img={hotel.image}
                  HotelTitle={hotel.title}
                  HotelPrice={hotel.price}
                  HotelCountry={hotel.country}
                  id ={hotel._id}
                  page = {hotel.page}
                  star = {hotel.star}
                  handleClickBook={handleClickBook}
                  // isLiked={favColor}
                  value ={value}

                  />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
    <Login show={modalShowLogin} onHide={() => setModalShowLogin(false)} />

    </>
  );
}

export default Hotels;
