import React from "react";
import { Container } from "react-bootstrap";
import RecipeReviewCard from "../components/CardHotel";
import CheckInCheckOutDatePicker from "../components/checkDate";
import SearchHotel from "../components/SearchBarHotel";
import bgHotel from "../images/Hotel.jpg";
import "../styles/hotelStyle.css";

function Hotels() {
  const styleHotel = {
    marginTop: "-6rem",
  };
  const styleHotelCard = {
    marginTop: "3rem",
  };
  return (
    
      <Container className="bg-hotel mt-3" >
        <div className="row align-items-centers gy-2 ">
          <div style={styleHotel} className="col-lg-4 col-md-7 col-sm-12 search-hotel">
            <SearchHotel />
          </div>
          <div style={styleHotelCard} className="col-lg-8 col-md-5 col-sm-12 style-margin mb-5" >
            <Container>
              <div className="row g-4 ">
                <div className="col">
                  <RecipeReviewCard />
                </div>
                <div className="col">
                  <RecipeReviewCard />
                </div>
                <div className="col">
                  <RecipeReviewCard />
                </div>
                <div className="col">
                  <RecipeReviewCard />
                </div>
                <div className="col">
                  <RecipeReviewCard />
                </div>
                <div className="col">
                  <RecipeReviewCard />
                </div>
               
              </div>
            </Container>
          </div>
        </div>
      </Container>
  
  );
}

export default Hotels;
