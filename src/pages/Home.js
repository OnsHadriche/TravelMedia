import React from "react";
import Navbar from "../components/Navbar";
import Pub from "../components/Pub";
import "../styles/HomeStyle.css";

function Home() {
  return (
    <div>
      <div className="bg-home">
        <Navbar />
        <div className="mt-5 mt-5" style={{height:"100%"}}>
          <Pub />
        </div>
      </div>
      <div className="text container">
        
      </div>
    </div>
  );
}

export default Home;
