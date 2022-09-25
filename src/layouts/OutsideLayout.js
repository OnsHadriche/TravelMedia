import React from "react";
import NavBar from "../components/NavBar";

function OutsideLayout(props) {
  return (
    <div>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
}

export default OutsideLayout;
