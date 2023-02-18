import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActionCreators";

import Login from "./ModalLogin";
import ProfilePicture from "./ProfilePicture";

import "../styles/StyleCustome.scss";
import "../styles/NavBarStyle.css";

import Nav from "react-bootstrap/Nav";
import BNavbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { IoIosBusiness } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { fetchAllPages } from "../redux/actions/pageActions";
import NavMenuItem from "./NavMenuItem";

function Navbar() {
  const dispatch = useDispatch();
  const [modalShowLogin, setModalShowLogin] = useState(false);
  const { isAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const allPages = useSelector((state) => state.pages.all);

  useEffect(() => {
    if (allPages.length === 0) {
      dispatch(fetchAllPages());
    }
  }, []);

  const styleIcon = {
    color: "rgba(0, 0, 0, 0.54)",
    display: "inline-flex",
    minWidth: "56px",
    flexShrink: 0,
    width: 56,
    height: 22,
  };
  const linksNav = [
    {
      title: "Profile",
      link: "/profile",
      icon: <CgProfile style={styleIcon} />,
    },
    {
      title: "Create page",
      link: "/create-page",
      icon: <IoIosBusiness style={styleIcon} />,
    },
    {
      title: "Bag Shop",
      link: "/my-list-shop",
      icon: <BsShop style={styleIcon} />,
    },
   
  ];
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <BNavbar collapseOnSelect expand="lg" className="navbar-bg-light  ">
        <div className="container-fluid">
          <BNavbar.Brand to="/">TravelMedia</BNavbar.Brand>
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
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/Hotels" className="nav-link">
                Hotels
              </NavLink>
              <NavLink to="/agency" className="nav-link">
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

              <NavLink to="/packges" className="nav-link">
                Packges
              </NavLink>
              <NavLink to="/events" className="nav-link">
                Events
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <div>
                {isAuth ? (
                  <>
                    <Nav>
                      <NavDropdown
                        title={
                          <IconButton>
                            <ProfilePicture size={40} />
                          </IconButton>
                        }
                        drop={"start"}
                        // direction = {"drop start"}
                      
                      >
                        {linksNav.map((item, index) => (
                          <>
                            <NavDropdown.Item key={index} >
                              <Link
                                to={item.link}
                                className="nav-link-user"
                                style={{ color: "black" }}
                              >
                                {item.icon}
                                {item.title}
                              </Link>
                            </NavDropdown.Item>
                          </>
                        ))}
                        <NavDropdown.Divider />
                        {allPages.map((page) => (
                            <div>
                              <NavMenuItem
                                page={page}
                                master={page.master}
                                key={page.id}
                                styleIcon={styleIcon}
                              />
                            </div>
                          ))}
                          
                        <NavDropdown.Divider />

                        <NavDropdown.Item onClick={handleLogOut}>
                          <div className=" d-flex align-items-center justify-content-between">
                            <FiLogOut style={styleIcon} />
                            <span className="nav-link-user-sign-out ms-3"> Log Out</span>

                          </div>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </>
                ) : (
                  <button
                    class="button-28"
                    onClick={() => setModalShowLogin(true)}
                  >
                    Sign in
                  </button>
                )}
              </div>
            </Nav>
          </BNavbar.Collapse>
        </div>
      </BNavbar>
      <Login show={modalShowLogin} onHide={() => setModalShowLogin(false)} />
    </>
  );
}

export default Navbar;
