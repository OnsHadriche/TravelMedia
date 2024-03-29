import { TextField } from "@mui/material";
import React from "react";

import "../styles/SearchBarPage.css";

import { Container } from "react-bootstrap";

function SearchBarPage() {
  return (

      <Container className="bg-bar-page  ">
        <div  className="d-flex justify-content-between align-items-center">
          <div>
              <TextField
                id="outlined-basic"
                label="choose your destination"
                variant="outlined"
                sx={{ m: 1, width: "250px" }}
                className = "textSearch"
              />
              <TextField
                id="outlined-basic"
                label="Enter agency"
                variant="outlined"
                className="textSearch"
                sx={{ m: 1, width: "250px" }}
              />
            </div>
  
          <div>
          <button class="button-75" role="button" ><span class="text">Search</span></button>

          </div>
        </div>
        
      </Container>

  );
}

export default SearchBarPage;
