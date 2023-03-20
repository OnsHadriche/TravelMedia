import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsFillTelephoneFill } from "react-icons/bs";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red, indigo } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import Login from "./ModalLogin";

export default function CardPage(props) {
  console.log(typeof props.star);
  const colorLocation = indigo["A700"];
  const history = useHistory()
  const [modalShowLogin, setModalShowLogin] = useState(false);

  const handleClicDetails = (id) => {
    if (props.isAuth) {
        return history.push(`/page/${id}`);
    } else {
      return setModalShowLogin(true);
    }
};

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[400] }} aria-label="recipe">
              {props.PageTitle[1]}
            </Avatar>
          }
          title={props.PageTitle}
        />
        <CardMedia
          component="img"
          height="190"
          image={props.Img}
          alt="Paella dish"
        />
        <CardContent>
          <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="d-flex justify-content-between align-items-center ">
            <Typography variant="body2" color="text.secondary">
              <Typography gutterBottom variant="body2" component="div">
                <BsFillTelephoneFill
                  style={{ color: colorLocation, fontSize: 20 }}
                  className="me-3"
                />
                {props.PageContact}
              </Typography>
            </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              <Typography gutterBottom variant="body2" component="div">
                <LocationOnOutlinedIcon
                  style={{ color: colorLocation, fontSize: "20px" }}
                />
                {props.PageCountry}
              </Typography>
            </Typography>
          </div>
           
          </div>
        </CardContent>
        <CardActions className="justify-content-between ms-2">
          <div>
            <Button onClick={()=>handleClicDetails(props.id)}>
              Details
            </Button>
            <IconButton aria-label="add to favorites" className="me-4">
              <FavoriteIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
      {/* <h1>{hotel.title}</h1> */}
    <Login show={modalShowLogin} onHide={() => setModalShowLogin(false)} />

    </>
  );
}
