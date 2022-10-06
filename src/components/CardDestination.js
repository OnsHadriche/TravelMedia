import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";


import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Paris from "../images/paris.jpg";
import Greece from "../images/greece.jpg";
import Istanbul from "../images/istanbul.jpg";
import Tunisia from "../images/tunisia.jpg";
import Bali from "../images/bali.jpg";
import Moroco from "../images/morroco.jpg";
import Maldive from "../images/maldive.jpg";
import "../styles/CardDestination.css";


function CardDestination() {
  const ImageTable = [
    { image: Paris, title: "Paris" },
    { image: Greece, title: "Greece" },
    { image: Istanbul, title: "Istanbul" },
    { image: Tunisia, title: "Tunisia" },
    { image: Bali, title: "Bali" },
    { image: Maldive, title: "Maldive" },
    { image: Moroco, title: "Moroco" },
  ];
  const [show, setShow] = useState(-1);

  return (
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    // autoplay={false}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
      {ImageTable.map((item, key) => (
        <SwiperSlide>
          <div
            style={{ width: "100%", height: "20rem" }}
            onMouseOver={() => setShow(key)}
            onMouseOut={() => setShow(-1)}
        
          >
            <img
              variant="top"
              src={item.image}
              style={{ height: "20rem", width:'100%'}}
              alt="destination"
            />
            <Card.ImgOverlay
              className={show === key ? "title-card" : "disabled-title"}
            >
              <Card.Title className="sub-title-card">{item.title}</Card.Title>

              <Button className="btn-card">Show more</Button>
            </Card.ImgOverlay>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  );
}

export default CardDestination;
