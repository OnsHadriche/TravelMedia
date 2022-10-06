import React from "react";
import "../styles/Pub.css";
import SearchAndFilter from "./SearchBar";

function Pub() {
  return (
    <div className="container  body-container">
      <div className="container-pub-title">
        <h1>
          Every thing you need in <span className="logo">TravelMedia</span>
        </h1>
        <h4>Enjoy and discover</h4>
      </div>

      <SearchAndFilter  />
    </div>
  );
}

export default Pub;
