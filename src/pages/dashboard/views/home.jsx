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
          <HomeButton component={Link} to="fase2" />
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
          <HomeButton component={Link} to="fase2" disabled />
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
          <HomeButton component={Link} to="fase2" disabled />
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
          <HomeButton component={Link} to="fase2" disabled />
        </Tooltip>
      </Box>
    </Box>
  );
}
