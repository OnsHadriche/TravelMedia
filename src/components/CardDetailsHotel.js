import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { MdPool } from "react-icons/md";
import { AiOutlineWifi, AiFillSafetyCertificate } from "react-icons/ai";
import { FaCocktail, FaUmbrellaBeach } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { BsCurrencyExchange } from "react-icons/bs";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DateRangePicker from "./checkDate";
// import DateRate from "./dateRate";





function CardDetailsHotel() {
    // const dispatch = useDispatch();
    // const { id } = useParams();
    // const hotelSelected = useSelector((state) => state.hotels.selected);
    // const { info } = useSelector((state) => state.user);
  
    // console.log("=====================================");
    // const [value, setValue] = useState(hotelSelected?.userReview?.note);
    // console.log(value);
  
    // useEffect(() => {});
    // useEffect(() => {
    //   dispatch(fetchHotelById(id));
    // }, [dispatch, id]);
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   dispatch(addRatingToHotel(id, { note: value, user: info._id, hotel: id }));
    // };
  
    return (
      <>
        <div className="d-flex align-items-center">
          {/* <h1>{hotelSelected?.hotel?.title} </h1> */}
          <h1>test</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <form className="row">
            <Rating
              name="simple-controlled"
              value={3}
              precision={1}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              className="ms-1 col"
            />
            <button type="submit" className="btn btn-primary col">
              Submit
            </button>
          </form>
        </div>
  
        <div className="d-flex mt-3 align-items-start">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <h6 className="m-2">Hosted By Twinci travel agency </h6>
        </div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            eaque. Id quaerat maiores, quae earum accusamus molestias ratione
            quasi vel eligendi amet rem qui, excepturi beatae rerum voluptatibus
            dolor quam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae, alias pariatur quo voluptatibus architecto qui odio quae
            unde veniam sequi mollitia id quam cupiditate, quia facilis ea soluta
            rem dignissimos.
          </p>
        </div>
        <div>
          <h6>Services & equipements</h6>
          <div>
            <Stack
              direction="row"
              spacing={1}
              style={{ listStyleType: "none", flexWrap: "wrap" }}
              className="row-cols-3 row-cols-sm-4 row-cols-md-5"
            >
              <Chip
                label="Bar"
                icon={<FaCocktail />}
                variant="outlined"
                className="col mb-1"
              />
              <Chip
                label="Free Wifi"
                icon={<AiOutlineWifi />}
                variant="outlined"
                className="col mb-1"
              />
              <Chip
                label="Safe"
                icon={<AiFillSafetyCertificate />}
                variant="outlined"
                className="col mb-1"
              />
              <Chip
                label="Air conditioner"
                icon={<AcUnitIcon />}
                variant="outlined"
                className="col mb-1"
              />
              <Chip
                label="Swimming pool"
                icon={<MdPool />}
                variant="outlined"
                className="col mb-1"
              />
              <Chip
                label="Beach"
                icon={<FaUmbrellaBeach />}
                variant="outlined"
                className="col mb-1"
              />
              <Chip
                label="Restaurant"
                icon={<GrRestaurant />}
                variant="outlined"
                className="col mb-1"
              />
              <Chip
                label="Exchange"
                icon={<BsCurrencyExchange />}
                variant="outlined"
                className="col mb-1"
              />
            </Stack>
          </div>
        </div>
        
      </>
    );
  }
  
  export default CardDetailsHotel;
  