import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CardEvent from "../components/CardEvent";
import Login from "../components/ModalLogin";
import SearchBarEvent from "../components/SearchBarEvent";
import { getAllEvents } from "../redux/actions/eventActionCreator";
import "../styles/hotelStyle.css";

function Event() {
  const { isAuth, info } = useSelector((state) => state.user);
  const userId = info && info._id;
  const [modalShowLogin, setModalShowLogin] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState();
  const allEvent = useSelector((state) => state.events.all);
  const [valueInput, setValueInput] = useState();
  // const inputRef = useRef(null);
  // const inputRefKey = useRef(null);

  const [filtredData, setDataFiltered] = useState(allEvent);
  console.log(filtredData);

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // let valueKey = inputRef.current.value.toLowerCase();
    // let valueKey = inputRefKey.current.toLowerCase()
    console.log("==========================");

    let resultHotel = allEvent.filter((data) =>
      data.country.toLowerCase().includes(valueInput.toLowerCase())
    );

    console.log("=====================================");
    console.log(resultHotel);
    setDataFiltered(resultHotel);
  };

  useEffect(() => {
    if (allEvent) {
      dispatch(getAllEvents());
    }
  }, []);

  const handleClicDetails = (id) => {
    if (isAuth) {
      return history.push(`/event/${id}`);
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
      <Container style={{ height: "100%" }} className="mb-2">
        <div>
          <SearchBarEvent handleSearch={handleSearch} handleChange={handleChange} valueInput={valueInput} />

          <div style={styleHotelCard}>
            <Container>
              <div className="row gy-2 ">
                {filtredData?.map((event) => (
                  <div className="col-4 col-sm-6 col-md-4">
                    <CardEvent
                      isAuth={isAuth}
                      userId={userId}
                      Img={event.image}
                      page={event.page}
                      eventTitle={event.title}
                      eventPrice={event.price}
                      id={event._id}
                      eventCountry={event.country}
                      eventDate={event.expiredAt}
                      handleClicDetails={handleClicDetails}
                      // isLiked={favColor}
                      value={value}
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

export default Event;
