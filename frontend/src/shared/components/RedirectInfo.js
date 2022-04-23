import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const RedirectText = styled("span")({
  color: "#00Aff4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionaStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#72767d" }}
      style={additionaStyles ? additionaStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}> {redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
