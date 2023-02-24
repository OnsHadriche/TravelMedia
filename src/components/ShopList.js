import React from "react";
import { Offcanvas } from "react-bootstrap";
import TableShop from "./TableShopListe";

function ShopList({show, handleClose}) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <TableShop/>
      
    </Offcanvas.Body>
  </Offcanvas>
  
  );
}

export default ShopList;
