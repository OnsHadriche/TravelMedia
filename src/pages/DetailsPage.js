import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BodyPage from "../components/BodyPage";
import SideNavMenu from "../components/SideNavMenu";
import { getPageById } from "../redux/actions/pageActions";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pageSelected = useSelector((state) => state.pages.selected);
  const userId = useSelector((state) => state.user.info._id);
  const pageMaster = pageSelected?.master?._id;
  const [showChild, setShowChild] = useState({
    dash: true,
    creatHotel: false,
    creatEvent: false,
    creatPack: false,
  });
  // const handleClick = (data) => {
  //  setShowChild(data)
  // };

  const handleClickComponent = (data) => {
    if (data === "createHotel") {
      setShowChild({
        creatEvent: false,
        creatPack: false,
        creatHotel: true,
        dash: false,
      });
    } else if (data === "createEvent") {
      setShowChild({
        creatEvent: true,
        creatPack: false,
        creatHotel: false,
        dash: false,
      });
    } else if (data === "createPack") {
      setShowChild({
        creatEvent: false,
        creatPack: true,
        creatHotel: false,
        dash: false,
      });
    } else {
      setShowChild({
        dash: true,
        creatHotel: false,
        creatEvent: false,
        creatPack: false,
      });
    }
    return showChild;
  };
  useEffect(() => {
    dispatch(getPageById(id));
  }, [dispatch, id]);
  console.log(pageSelected);
  return (
    <>
      <div className="d-flex">
        {userId === pageMaster && (
          <div style={{ height: "100vh", position: "sticky" }}>
            <SideNavMenu
              page={pageSelected}
              handleClickComponent={handleClickComponent}
            />
          </div>
        )}
        <Container style={{ marginTop: "5vh", flex: 1 }}>
          <BodyPage show={showChild} pageSelected = {pageSelected}/>
        </Container>
      </div>
    </>
  );
}

export default DetailsPage;
