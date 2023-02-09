import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import ChangePassword from "../components/ChangePassword";
import PersonInfo from "../components/PersonInfo";
import "../styles/Profile.css";
function Profile() {
  const userInfo = useSelector((state) => state.user.info);
  const [show, setShow] = useState({
    showComponent1: true,
    showComponent2: false,
    showComponent3: false,
  });
  const handleClick = (name) => {
    switch (name) {
      case "showComponent1":
        return setShow({ showComponent1: true });
      case "showComponent2":
        return setShow({ showComponent2: !show.showComponent2 });
      case "showComponent3":
        return setShow({ showComponent3: !show.showComponent3 });
      default:
        return null;
    }
  };
  return (
    <Container className="bg-light d-flex-row justify-content-center mb-5">
      <div className="p-1  text-xs-left ">
        <h3
          className="pageTitle "
          style={{ marginTop: "90px", marginLeft: "60px" }}
        >
          {" "}
          User Profile
        </h3>
      </div>
      <div className="d-flex flex-wrap justify-content-around  align-items-center ">
        <div className="align-items-center ">
          <div className="col-lg-4 mt-3">
            <div
              className="card  mb-2 pt-2  shadow-sm  bg-body borderCard  "
              style={{ width: "50vh" }}
            >
              <div className="card-body text-center">
                <div className="mb-2 mt-2 border-bottom mx-auto">
                  <img
                    className="rounded-circle"
                    src={userInfo.image}
                    alt="User Avatar"
                    style={{ width: 120, height: 120 }}
                  />
                  <div className="my-2">
                    <h5>
                      {userInfo.firstName} {userInfo.lastName}
                    </h5>
                  </div>
                </div>
                <ul className="list-group list-group-flush ">
                  <li
                    className="list-group-item p-4 select-box"
                    onClick={() => handleClick("showComponent1")}
                  >
                    <strong className="text-blue d-block my-2">
                      Profile Information
                    </strong>
                  </li>
                  <li
                    className="list-group-item select-box p-4"
                    onClick={() => handleClick("showComponent2")}
                  >
                    <strong className=" text-blue d-block my-2 ">
                      Change Password
                    </strong>
                  </li>
                  <li
                    className="list-group-item select-box p-4"
                    onClick={() => handleClick("showComponent3")}
                  >
                    <strong className="text-blue d-block my-2">
                      Account Management
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-8 shadow-sm borderCard mx-5 "
          style={{ width: "100vh", padding: 10, backgroundColor: "white" }}
        >
          {show.showComponent1 && <PersonInfo />}
          {show.showComponent2 && <ChangePassword />}
       
        </div>
      </div>
    </Container>
  );
}

export default Profile;
