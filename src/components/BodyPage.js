import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import "../styles/Dashboard.css";
import UploadImg from "./UploadImg";
import DashBoard from "./DashBoard";
import CreateHotel from "./CreateHotel";
import CreateEvent from "./CreateEvent";
import CreatePack from "./CreatePack";
function BodyPage({ show, pageSelected }) {
  console.log(show);
  console.log("============");

  return (
    <div>
      <div className="style-dashboard">
        {true ? (
          <>
            <UploadImg edit={"edit"} />

            <div className="cardImg">
              <AddAPhotoIcon sx={{ height: "4rem", width: "4rem" }} />
              <div>
                <p className="title-cover">No cover photo</p>
              </div>
            </div>
          </>
        ) : (
          pageSelected.photo
        )}
      </div>
      <div className="style-body-dashboard">
        {show.dash ? <DashBoard /> : null}
        {show.creatHotel ? <CreateHotel /> : null}
        {show.creatPack ? <CreatePack  idPage = {pageSelected._id}/> : null}
        {show.creatEvent ? <CreateEvent /> : null}
      </div>
    </div>
  );
}

export default BodyPage;
