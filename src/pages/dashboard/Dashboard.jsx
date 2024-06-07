import React from "react";
import Box from "@mui/material/Box";
import Logo from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";
import "../../assets/styles/Dashboard.css";

function ResponsiveAppBar() {
  return (
    <Box>
      <Box className="containerSuperNamorado">
        <img src={Logo} alt="Logo" />
      </Box>
      <Outlet />
    </Box>
  );
}

export default ResponsiveAppBar;
