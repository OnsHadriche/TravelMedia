import { TextField } from "@mui/material";
import React from "react";

import "../styles/SearchBarPage.css";

import { Container } from "react-bootstrap";

function SearchBarPage() {
  return (
    <div className="search-bar-page ">
      <Container className="bg-bar-page  ">
        <div  className="d-flex justify-content-between align-items-center">
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
          {/* <h6 className="mt-3 mb-1 title-bar-filter">Filter By</h6>
          <div>
            <div className="filter-style">
           <FilterHotel/>
            </div>
          </div> */}
        </div>
        
      </Container>

    </div>
  );
}

export default SearchBarPage;
