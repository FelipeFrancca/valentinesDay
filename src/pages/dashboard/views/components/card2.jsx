import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./cardStyles.css";
import { Box, Button, Typography } from "@mui/material";
import Swal from "sweetalert2";
import imgsrc from "../../../../assets/images/sushi.jpg";

const TiltBox = ({ name, imgSrc, imgAlt }) => {
  const tiltRef = useRef(null);
  const handleVoteClick = (event) => {
    event.preventDefault();
    Swal.fire(
      "Uhuuul! Espero que esteja com fome, porquê você ganhou uma noite especial para comer um nhami-nhami gotoso de sushi 🍣 com seu mozão"
    );
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
      <Button className="backpageButton" variant="contained">
        <a href="./../valentinesDay">Voltar</a>
      </Button>
      <Box className="container containerCardPresente">
        <TiltBox
          name="Noite do Sushi"
          imgSrc={imgsrc}
          imgAlt="Image não encontrada"
        />
      </Box>
    </Box>
  );
};

export default App;
