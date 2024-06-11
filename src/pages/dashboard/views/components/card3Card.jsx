import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./cardStyles.css";
import { Box, Typography } from "@mui/material";
import Swal from "sweetalert2";
import imgsrc from "../../../../assets/images/movieTheater.png";

const TiltBox = ({ name, imgSrc, imgAlt }) => {
  const tiltRef = useRef(null);
  const handleVoteClick = (event) => {
    event.preventDefault();
    Swal.fire("Partiu assistir Divertidamente 2!? Vamo simbora mulheeeerr!!");
  };

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
    });
  }, []);

  return (
    <Box className="box" ref={tiltRef}>
      <Typography fontWeight={900} className="name">
        {name}
      </Typography>
      <p className="vote" onClick={handleVoteClick}>
        Detalhes
      </p>
      <img src={imgSrc} className="product" alt={imgAlt} />
    </Box>
  );
};

const App = () => {
  return (
    <Box className="containerFather">
      <Box className="container containerCardPresente">
          <TiltBox
            name="Cineminha da JóJó"
            imgSrc={imgsrc}
            imgAlt="Image não encontrada"
          />
        </Box>
      </Box>
  );
};

export default App;
