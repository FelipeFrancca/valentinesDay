import { Box, Button } from "@mui/material";
import React from "react";
import "./homeButton.css";
import imgEnabled from "../../../../assets/images/marioSquareImage.png";
import imgDisabled from "../../../../assets/images/marioSquareImage2.png";

function ButtonItem(props) {
  const { sx, img, ...other } = props;

  return (
    <Button className="containerButton" variant="contained" {...other}>
      <img src={img} alt="Button Icon" />
      {props.children}
    </Button>
  );
}

const HomeButton = (props) => {
  const { ...other } = props;
  const img = props.disabled ? imgDisabled : imgEnabled;

  return (
    <Box>
      <ButtonItem img={img} {...other} disabled={props.disabled}>
      </ButtonItem>
    </Box>
  );
};

export default HomeButton;
