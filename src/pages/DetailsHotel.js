import React, { useEffect, useState } from "react";
import { Accordion, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import AddRooms from "../components/AddRoom";
import CardDetailsHotel from "../components/CardDetailsHotel";
import DateRangePicker from "../components/checkDate";
import ModaleVerif from "../components/ModaleVerif";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import img6 from "../images/bali.jpg";
import {
  addRatingToHotel,
  fetchHotelById,
} from "../redux/actions/hotelActions";
import "../styles/DeatailsHotel.css";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "tss-react/mui";

import { height } from "@mui/system";
import { fetchReviewByUser } from "../redux/actions/reviewActionCreator";

const useStyles = makeStyles()((theme) => ({
  textField: {
    width: "200px",
    height: "40px",
    color: "white",
  },
}));

function DetailsHotel() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [addComponents, setAddComponent] = useState([{ numberRoom: 1 }]);
  const [age, setAge] = useState(0);
  const [nbAdult, setNbAdult] = useState(0);
  const numberOfChildren = [0, 1, 2, 3, 4];
  const [nbChilds, setNbChilds] = useState(0);

  const selectHotel = useSelector((state) => state.hotels.selected);
  
  const { id } = useParams();
  console.log(id)
  const { info } = useSelector((state) => state.user);
  console.log(info._id)

  const reviewSelected = useSelector((state)=>state.reviews.selected)
  const [updateRate, setUpdateRate] = useState({
    note: selectHotel?.userReview?.note,
   
  });
  const handleClickAdd = () => {
    setAddComponent((prev) => [
      ...prev,
      { numberRoom: addComponents.length + 1 },
    ]);
  };
  

  useEffect(()=>{
    if(reviewSelected){

      setUpdateRate(reviewSelected);
    }
  },[reviewSelected])

  useEffect(() => {
    dispatch(fetchReviewByUser(id));
  }, [dispatch, id]);

  console.log(reviewSelected)

  const handleSubmitReview = (e) => {
    e.preventDefault();
    dispatch(addRatingToHotel(id, { note: updateRate.note, user: info._id, hotel: id }));
  };
  const handleChangeReview = (e) => {
    setUpdateRate({[e.target.name]: e.target.value});
  };

  const handleClickCancel = () => {
    if (addComponents.length > 1) {
      setAddComponent((prevRooms) => {
        prevRooms.pop();
        return [...prevRooms];
      });
    }
  };
  const handleChange = (event) => {
    setNbChilds(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchHotelById(id));
  }, [dispatch, id]);
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
            <CardDetailsHotel hotelSelected={selectHotel} />
          </div>
        </div>
        <div className="bg-search ">
          <h5 className=" mt-5 ms-3">Dates & Rates</h5>
          <div className="d-flex align-items-center justify-content-between mt-3 ">
            {/* <DateRate />
            <DateRangePicker /> */}

            <div style={{ width: 400 }}>
              <TextField
                id="start-date"
                label="Check-in"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ m: 1, borderColor: "white" }}
              />
              <TextField
                id="end-date"
                label="Check-out"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ m: 1 }}
              />
            </div>
            <div className=" me-1">
              <button
                variant="outline-warning"
                onClick={handleShow}
                className="check-hotel"
              >
                ChecK avaibility
              </button>
            </div>
          </div>
          <div className="ms-2 ">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5>Rooms and Guests</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {/* <AddRooms /> */}
                  <div className="row ">
                    <div className="col-10 ">
                      {addComponents.map((room, index) => (
                        <>
                          {/* <RoomAndGuests
                            numberRoom={room.numberRoom}
                            key={index}
                            
                          /> */}
                          <div>
                            <h6>Room {room.numberRoom}</h6>
                          </div>
                          <div className="d-flex flex-wrap">
                            <div>
                              <FormControl
                                sx={{ m: 1, width: "200px" }}
                                variant="outlined"
                              >
                                <InputLabel htmlFor="outlined-adornment-password">
                                  Adults
                                </InputLabel>
                                <OutlinedInput
                                  id="outlined-adornment-password"
                                  type="text"
                                  value={nbAdult}
                                  onChange={(event) =>
                                    setNbAdult(event.target.value)
                                  }
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                      >
                                        <PersonIcon />
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                  label="adults"
                                />
                              </FormControl>
                            </div>
                            <div>
                              <FormControl sx={{ m: 1, width: "200px" }}>
                                <InputLabel id="demo-controlled-open-select-label">
                                  Childrens
                                </InputLabel>
                                <Select
                                  labelId="demo-controlled-open-select-label"
                                  id="demo-controlled-open-select"
                                  label="Childrens"
                                  value={nbChilds}
                                  onChange={handleChange}
                                >
                                  {numberOfChildren.map((child, index) => (
                                    <MenuItem value={child} key={index}>
                                      {child}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </div>

                            {(() => {
                              switch (nbChilds) {
                                case 1:
                                  return (
                                    <div>
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                    </div>
                                  );
                                case 2:
                                  return (
                                    <div>
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                    </div>
                                  );
                                case 3:
                                  return (
                                    <div>
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                    </div>
                                  );
                                case 4:
                                  return (
                                    <div>
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                      <TextField
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        onChange={(e) => setAge(e.target.value)}
                                        sx={{ m: 1, width: "200px" }}
                                      />
                                    </div>
                                  );

                                default:
                                  return <div> </div>;
                              }
                            })()}
                          </div>
                        </>
                      ))}
                    </div>
                    <div className=" col-2 mt-2 ">
                      {" "}
                      <button className="btn-valide  " onClick={handleClickAdd}>
                        <i
                          className="bi bi-plus-circle icon-add"
                          style={{ fontSize: 30 }}
                        ></i>
                      </button>
                      <button
                        onClick={handleClickCancel}
                        className="btn-cancel"
                      >
                        <i
                          class="bi bi-x-circle icon-cancel"
                          style={{ fontSize: 30 }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <h5 className=" mt-2 ms-3 ">Rate your experience</h5>
            <form className="row ms-1" onSubmit={handleSubmitReview}>
              <Rating
                name="note"
                value={updateRate.note}
                precision={1}
              
                onChange={handleChangeReview}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                className="ms-1 col"
              />
              <button type="submit" className="check-review col-4 mb-2 me-2" >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </Container>
      <ModaleVerif handleClose ={handleClose} show={show} numberRoom = {addComponents.numberRoom} hotelSelected = {selectHotel}/>
    </>
  );
}

export default DetailsHotel;
