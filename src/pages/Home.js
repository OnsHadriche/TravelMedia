import React from "react";
import { Container } from "react-bootstrap";

import CardDestination from "../components/CardDestination";
import Service from "../components/carteService";
import Pub from "../components/Pub";
import footerHome from "../components/footerHome";
import "../styles/HomeStyle.css";
import RecipeReviewCard from "../components/CardHotel";

function Home() {
  return (
    <div>
      <div className=" body-home">
        <div className="bg-home ">
          <Container style={{ height: "90%" }}>
            <Pub />
          </Container>
        </div>
        <Container className="text-service m-5">
          <h2 className="text-center title-service">Our services</h2>
          <Service />
        </Container>
        <div className="mt-5 bg-cards-destination">
          <h2 className="text-center title-destination">
            Incredible destination
          </h2>
          <div className="mb-5">
            <CardDestination />
          </div>
        </div>
        <Container className="mt-5">
          <h2 className="text-center title-destination">Top Hotels </h2>
          <div>
            <RecipeReviewCard />
          </div>
        </Container>
        <Container className="mt-5">
          <h2 className="text-center title-destination">Popular Agences </h2>
          <div>
            
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
