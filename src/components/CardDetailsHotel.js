import React from "react";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
// import DateRate from "./dateRate";
import "../styles/cardHotel.css"





function CardDetailsHotel({hotelSelected}) {
    const dispatch = useDispatch();
    const { id } = useParams();
   
  
    console.log("=====================================");
    console.log();

    return (
      <>
        <div className="d-flex align-items-center row hotelDetailsPrice">
     
          <h3 className="col-8">{hotelSelected?.hotel.title} </h3>
        
          {/* <form onSubmit={handleSubmit}> */}
          <button type="submit" className=" col-4">
              Reserve Now 
          </button>
     
        </div>
         <div className="d-flex mt-3 align-items-start">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <h6 className="m-2">Hosted By Twinci travel agency </h6>
        </div>
        <div>
   
        </div>
  
    
        <div className="mt-4">
          <p>
            {hotelSelected?.hotel.details}
          </p>
        </div>
        
      
      </>
    );
  }
  
  export default CardDetailsHotel;
  