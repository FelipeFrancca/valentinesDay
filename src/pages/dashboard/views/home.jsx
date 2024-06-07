import React from "react";
import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import "../../../assets/styles/home.css";
import HomeButton from "./components/homeButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box className="container">
      <Box>
        <Tooltip
          title="Acesso a próxima fase"
          placement="bottom"
          TransitionComponent={Zoom}
          className="marioSquare"
        >
          <Typography id="faseText" color="#fff" fontSize={20} fontWeight={900}>
            1ª FASE
          </Typography>
          <HomeButton component={Link} to="./card1" releaseDate="2024-06-07" /><br />
          <Typography id="faseText" color="#fff" fontSize={15} fontWeight={900}>
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
          <Typography id="faseText" color="#fff" fontSize={20} fontWeight={900}>
            2ª FASE
          </Typography>
          <HomeButton component={Link} to="fase2" releaseDate="2024-06-15" />
          <br />
          <Typography id="faseText" color="#fff" fontSize={15} fontWeight={900}>
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
          <Typography id="faseText" color="#fff" fontSize={20} fontWeight={900}>
            3ª FASE
          </Typography>
          <HomeButton component={Link} to="fase2" releaseDate="2024-06-19" /><br />
          <Typography id="faseText" color="#fff" fontSize={15} fontWeight={900}>
            19-06-2024
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
          <Typography id="faseText" color="#fff" fontSize={20} fontWeight={900}>
            4ª FASE
          </Typography>
          <HomeButton component={Link} to="fase2" releaseDate="2024-06-22" /><br />
          <Typography id="faseText" color="#fff" fontSize={15} fontWeight={900}>
            22-06-2024
          </Typography>
        </Tooltip>
      </Box>
    </Box>
  );
}
