import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red, indigo } from "@mui/material/colors";
import Agence from "../images/agence-voyage.jpg";


export default function CardHotel(props) {
console.log(typeof(props.star))
  const colorLocation = indigo["A700"];

  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: indigo[600] }} aria-label="recipe">
              {props.page?.title[1]}
            </Avatar>
          }
          title={props.page?.title}
        />
        <CardMedia
          component="img"
          height="190"
          image={props.Img}
          alt="Paella dish"
        />
        <CardContent>
          <div>
            <div className="d-flex justify-content-between align-items-center ">
              <h6>{props.HotelTitle}</h6>
              <Rating name="read-only" readOnly value={props.star} size="small" />
            </div>
            <Typography variant="body2" color="text.secondary">
              <Typography gutterBottom variant="body2" component="div">
                <LocationOnOutlinedIcon
                  style={{ color: colorLocation, fontSize: "20px" }}
                />
                {props.HotelCountry}
              </Typography>
            </Typography>
          </div>
        </CardContent>
        <CardActions className="justify-content-between align-items-center ms-2">
          <Typography>{props.HotelPrice} TND</Typography>
          <div>
            <Button onClick={()=>props.handleClickBook(props.id)}>Book</Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
      {/* <h1>{hotel.title}</h1> */}
    </>
  );
}
