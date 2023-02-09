import React from "react";
import { NavDropdown } from "react-bootstrap";
import { FaPager } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/NavBarStyle.css";

function NavMenuItem({ page, master,styleIcon }) {
  const { isAuth, info } = useSelector((state) => state.user);

  const userId = info && info._id;
  console.log(userId);
  console.log(master);

  return (
    <div>
      {isAuth && userId === master && (
        <NavDropdown.Item >
          <Link to = {`/pages/${page._id}`} className='nav-link-user' style={{color:'black'}}>
          <FaPager style={styleIcon}/> {page?.title}

          </Link>
        </NavDropdown.Item>
      )}
    </div>
  );
}

export default NavMenuItem;
