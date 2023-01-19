
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

function CarteAgence() {
    const colorLocation = indigo["A700"];

    return (
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {/* <img src={Agence} alt="agence"/> */}R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
        />
        <CardMedia
          component="img"
          height="190"
          image={Agence}
          alt="Paella dish"
        />
        <CardContent>
          <div>
            <div className="d-flex justify-content-between align-items-center ">
              <h6>Name of Hotel</h6>
              <Rating name="read-only" readOnly value={5} size="small" />
            </div>
            <Typography variant="body2" color="text.secondary">
              <Typography gutterBottom variant="body2" component="div">
                <LocationOnOutlinedIcon
                  style={{ color: colorLocation, fontSize: "20px" }}
                />
                Tunisia
              </Typography>
            </Typography>
          </div>
        </CardContent>
        <CardActions className="justify-content-between align-items-center ms-2">
          
            <Button>Discover</Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
  
        </CardActions>
      </Card>
    );
  }

export default CarteAgence