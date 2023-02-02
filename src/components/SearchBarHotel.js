import { TextField } from "@mui/material";
import React from "react";
import AddRooms from "./AddRoom";
import DateRangePicker from "./checkDate";
import "../styles/SearchBarHotel.css";
import FilterHotel from "./FilterHotel";
import { Container } from "react-bootstrap";

function SearchBarHotel() {
  return (
    <div className="search-bar-hotel ">
      <Container className="bg-bar-hotel  ">
        <div >
          <h6 className="mt-2 mb-1 title-bar">Where you want to go?</h6>
          <div>
            <div>
              <TextField
                id="outlined-basic"
                label="choose your destination"
                variant="outlined"
                sx={{ m: 1, width: "200px" }}
              />
              <TextField
                id="outlined-basic"
                label="Enter agency"
                variant="outlined"
                sx={{ m: 1, width: "200px" }}
              />
            </div>
          </div>
          <div>
          <button class="button-75" role="button" ><span class="text">Search</span></button>

          </div>
        </div>
        <div>
          <h6 className="mt-3 mb-1 title-bar-filter">Filter By</h6>
          <div>
            <div className="filter-style">
           <FilterHotel/>
            </div>
          </div>
        </div>
        
      </Container>

    </div>
  );
}

export default SearchBarHotel;
