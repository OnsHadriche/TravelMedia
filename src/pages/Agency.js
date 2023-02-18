

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardPage from "../components/CardPage";
import Login from "../components/ModalLogin";
import SearchBarPage from "../components/SearchBarPage";
import { fetchAllPages } from "../redux/actions/pageActions";
import "../styles/hotelStyle.css";

function Agency() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue]= useState()

  const allAgency =  useSelector((state) => state.pages.all);
 

  const { isAuth, info } = useSelector((state) => state.user);

  const userId = info && info._id;
  const [modalShowLogin, setModalShowLogin] = useState(false);
  
  useEffect(() => {
      if (allAgency) {
      dispatch(fetchAllPages());
    }
},[]);


const handleClicDetails = (id) => {
    if (isAuth) {
        return navigate(`/page/${id}`);
    } else {
      return setModalShowLogin(true);
    }
};

console.log(allAgency);

const styleHotel = {
    marginTop: "-6rem",
};
const styleHotelCard = {
    marginTop: "3rem",
};
return (
    <>
    <Container className="bg-hotel ">
      <div>
        <div
      
        
        >
          <SearchBarPage/>
        </div>
        <div
          style={styleHotelCard}
        >
          <Container >
            <div className="row gy-2">
              {allAgency?.map((page) => (
                  <div className="col-4  col-sm-4 col-md-4" >
                  <CardPage
                  isAuth = {isAuth}
                  userId ={userId}
                  Img={page.image}
                  PageTitle={page.title}
                  PageContact={page.contact}
                  id ={page._id}
                  PageCountry = {page.country}
                  handleClicDetails={handleClicDetails}
                  // isLiked={favColor}
                  value ={value}
                  
                  />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </Container>
    <Login show={modalShowLogin} onHide={() => setModalShowLogin(false)} />

    </>
  );
}

export default Agency