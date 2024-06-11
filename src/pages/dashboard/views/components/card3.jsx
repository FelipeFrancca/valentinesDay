import React from "react";
import { Box, Button } from "@mui/material";
import "../../../../assets/styles/card3.css";
import Card3Card from "./card3Card";

export default function Card3() {
  return (
    <Box>
      <Button className="backpageButton" variant="contained">
        <a href="./../valentinesDay">Voltar</a>
      </Button>
      <Card3Card />
    </Box>
  );
}
