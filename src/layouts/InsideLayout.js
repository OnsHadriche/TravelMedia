import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function InsideLayout(props) {
  return (
    <>
      <div>
        <Navbar />
        <div>{props.children}</div>
      </div>
    </>
  );
}
