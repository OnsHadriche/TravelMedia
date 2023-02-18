import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import CardDestination from "../components/CardDestination";
import Service from "../components/carteService";
import Pub from "../components/Pub";
import footerHome from "../components/footerHome";
import "../styles/HomeStyle.css";
import RecipeReviewCard from "../components/CardHotel";
import CarteAgence from "../components/CarteAgence";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllHotels } from "../redux/actions/hotelActions";

function Home() {
  const dispatch = useDispatch();
  const allHotels = useSelector((state) => state.hotels.all);

  useEffect(() => {
    if (allHotels) {
      dispatch(fetchAllHotels());
    }
  }, []);

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
          <div className="row gy-5 ">
            {allHotels.map((hotel) => (
              <div className="col">
                <RecipeReviewCard
                  hotel={hotel}
                  Img={hotel.image}
                  HotelTitle={hotel.title}
                  HotelPrice={hotel.price}
                  HotelCountry={hotel.country}
                  id={hotel._id}
                  page={hotel.page}
                  star={hotel.star}
                />
              </div>
            ))}
          </div>
        </Container>
        <Container className="mt-5">
          <h2 className="text-center title-destination">Popular Agences </h2>
          <div>
            <CarteAgence />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
