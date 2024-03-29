import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CardPack from "../components/CardPack";

import Login from "../components/ModalLogin";
import SearchBarPack from "../components/SearchBarPack";
import { getAllPack } from "../redux/actions/packageActionCreators";
import "../styles/hotelStyle.css";

function Package() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState();
  const allPacks = useSelector((state) => state.packs.all);
  const [valueInput, setValueInput] = useState();
  const [filtredData, setDataFiltered] = useState(allPacks);

  const { isAuth, info } = useSelector((state) => state.user);

  const userId = info && info._id;
  const [modalShowLogin, setModalShowLogin] = useState(false);

  useEffect(() => {
    if (allPacks) {
      dispatch(getAllPack());
    }
  }, []);
  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleClicDetails = (id) => {
    if (isAuth) {
      return history.push(`/package/${id}`);
    } else {
      return setModalShowLogin(true);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // let valueKey = inputRef.current.value.toLowerCase();
    // let valueKey = inputRefKey.current.toLowerCase()
    console.log("==========================");

    let resultHotel = allPacks.filter((data) =>
      data.country.toLowerCase().includes(valueInput.toLowerCase())
    );

    console.log("=====================================");
    console.log(resultHotel);
    setDataFiltered(resultHotel);
  };
  const styleHotel = {
    marginTop: "-6rem",
  };
  const styleHotelCard = {
    marginTop: "3rem",
  };
  return (
    <>
      <Container style={{ height: "100%" , marginBottom: "2rem"}}>
        <div>
          <SearchBarPack handleSearch={handleSearch} handleChange={handleChange} valueInput={valueInput} />

          <div style={styleHotelCard}>
            <Container>
              <div className="row gy-2">
                {filtredData?.map((pack) => (
                  <div className="col-4 col-sm-6 col-md-4">
                    <CardPack
                      isAuth={isAuth}
                      userId={userId}
                      Img={pack.image}
                      page={pack.page}
                      packTitle={pack.title}
                      packPrice={pack.price}
                      id={pack._id}
                      packCountry={pack.country}
                      packDate = {pack.expiredAt}
                      handleClicDetails={handleClicDetails}
                      // isLiked={favColor}
                      value={value}
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

export default Package;
