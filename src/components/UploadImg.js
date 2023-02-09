import React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import { Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

function UploadImg({ edit }) {
  const Input = styled("input")({
    display: "none",
  });


  return (
    <div>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          color="primary"
          className={edit}
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}

export default UploadImg;
