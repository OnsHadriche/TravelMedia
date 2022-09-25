import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import BNavbar from "react-bootstrap/Navbar";
import "../styles/NavBarStyle.scss";
import "../styles/NavBarStyle.css";

function Navbar() {
  return (
    <BNavbar collapseOnSelect expand="lg" className="navbar-bg-light  ">
      <div className="container-fluid">
        <BNavbar.Brand to="#home">TravelMedia</BNavbar.Brand>
        <BNavbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ms-auto"
        />
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <BNavbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="ms-auto">
            <NavLink to="#features" className="nav-link">
              Home
            </NavLink>
            <NavLink to="#deets" className="nav-link">
              Hotels
            </NavLink>
            <NavLink to="#pricing" className="nav-link">
              Agency
            </NavLink>
            {/* <NavDropdow title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}

       
            <NavLink to="#deets" className="nav-link">
              Packges
            </NavLink>
            <NavLink  to="#memes" className="nav-link">
              Events
            </NavLink>
            <Nav  to="#memes" className="nav-link btn-nav">
              <div>
              Sign In
              </div>
           
            </Nav>
          </Nav>
          <Nav className="ms-auto">
            <div>
              <button class="button-28">Sign In</button>
            </div>
          </Nav>
        </BNavbar.Collapse>
      </div>
    </BNavbar>
  );
}

export default Navbar;
