import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import AddRooms from "./AddRoom";
import DateRangePicker from "./checkDate";
import "../styles/SearchBarHotel.css";
import FilterHotel from "./FilterHotel";
import { Container, Form } from "react-bootstrap";

function SearchBarHotel({handleChange,handleSearch, valueInput}) {


  console.log(valueInput)
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
                value = {valueInput}
                sx={{ m: 1, width: "200px" }}
                onChange = {handleChange}
                type="text"
              />
          {/* <Form.Control type="text" placeholder="City, region, land,...." ref={inputRef} autoComplete="off"/> */}

              <TextField
                id="outlined-basic"
                label="Enter agency"
                variant="outlined"
                sx={{ m: 1, width: "200px" }}
              
                type="text"
              />
            </div>
          </div>
          <div>
          <button class="button-75" role="button" ><span class="text" onClick={handleSearch}>Search</span></button>

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
