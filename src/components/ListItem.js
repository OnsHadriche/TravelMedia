import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";

import dateFormat from "dateformat";
import { Link, useHistory, useParams } from "react-router-dom";
import RemoveModal from "./RemoveModal";

function ListItem({
  title,
  date,
  photo,
  linkUpdate,
  handleClose,
  handleShow,
  requestRemove,
  show,
}) {
  const history = useHistory()
  const dateCreate = dateFormat(date, "mmmm dS, yyyy");
  const {id} = useParams()
  return (
    <>
      <Card sx={{ display: "flex", width: 300, height: 200 }}>
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={photo}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {dateCreate}
            </Typography>
          </CardContent>
          {
            
          }
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Link to={linkUpdate}>
            <Button size="small" >
              Edit
            </Button>

            </Link>

            {/* <Button size="small">Delete</Button> */}
            <RemoveModal
              handleClose={handleClose}
              handleShow={handleShow}
              requestRemove={requestRemove}
              show={show}
            />
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default ListItem;
