import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
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
  const { releaseDate, ...other } = props;
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const today = new Date();
    const release = new Date(releaseDate);
    if (today >= release) {
      setIsDisabled(false);
    }
  }, [releaseDate]);

  const img = isDisabled ? imgDisabled : imgEnabled;

  return (
    <Box>
      <ButtonItem img={img} {...other} disabled={isDisabled}>
      </ButtonItem>
    </Box>
  );
};

export default HomeButton;
