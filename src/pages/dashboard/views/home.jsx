import React from "react";
import { Box, Button, Tooltip, Typography, Zoom } from "@mui/material";
import "../../../assets/styles/home.css";
import HomeButton from "./components/homeButton";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const handleVoteClick = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Bem vinda ao game Super Namorado!",
      text: "O game funcionará de uma forma bem simples. Para poder se preparar, você terá acesso aos cards de forma automatica 1 dia antes da data individual do rodapé. Basta acessa-los que saberá o que fazer 🤫.",
    });
  };

  return (
    <Box className="container">
      <Box className="containerCards">
        <Box>
          <Tooltip
            title="Acesso a próxima fase"
            placement="bottom"
            TransitionComponent={Zoom}
            className="marioSquare"
          >
            <Typography
              id="faseText"
              color="#fff"
              fontSize={20}
              fontWeight={900}
            >
              1ª FASE
            </Typography>
            <HomeButton
              component={Link}
              to="./card1"
              releaseDate="2024-06-10"
            />
            <br />
            <Typography
              id="faseText"
              color="#fff"
              fontSize={15}
              fontWeight={900}
            >
              12-06-2024
            </Typography>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip
            title="Acesso a próxima fase"
            placement="bottom"
            TransitionComponent={Zoom}
            className="marioSquare"
          >
            <Typography
              id="faseText"
              color="#fff"
              fontSize={20}
              fontWeight={900}
            >
              2ª FASE
            </Typography>
            <HomeButton
              component={Link}
              to="./card2"
              releaseDate="2024-06-14"
            />
            <br />
            <Typography
              id="faseText"
              color="#fff"
              fontSize={15}
              fontWeight={900}
            >
              15-06-2024
            </Typography>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip
            title="Acesso a próxima fase"
            placement="bottom"
            TransitionComponent={Zoom}
            className="marioSquare"
          >
            <Typography
              id="faseText"
              color="#fff"
              fontSize={20}
              fontWeight={900}
            >
              3ª FASE
            </Typography>
            <HomeButton
              component={Link}
              to="./card3"
              releaseDate="2024-06-19"
            />
            <br />
            <Typography
              id="faseText"
              color="#fff"
              fontSize={15}
              fontWeight={900}
            >
              20-06-2024
            </Typography>
          </Tooltip>
        </Box>
      </Box>
      <Button
        className="backpageButton"
        variant="contained"
        onClick={handleVoteClick}
      >
        <Typography>Regras para receber as reconpensas</Typography>
      </Button>
    </Box>
  );
}
