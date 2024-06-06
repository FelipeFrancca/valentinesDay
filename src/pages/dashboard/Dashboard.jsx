import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Logo from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";
import Zoom from "@mui/material/Zoom";
import { Typography } from "@mui/material";
import "../../assets/styles/Dashboard.css";

function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {[
          { text: "Home", href: "#home" },
          { text: "Sobre", href: "#sobre" },
          { text: "Destaques", href: "#destaques" },
          { text: "Produtos", href: "#produtos" },
          { text: "Contato", href: "#contato" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton href={item.href}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar id="appBar">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                img: { width: "100px" },
              }}
            >
              <Tooltip
                title="Voltar para o início"
                placement="bottom"
                TransitionComponent={Zoom}
                sx={{ borderRadius: "50px", padding: "5px" }}
              >
                <IconButton href="/valentinesDay">
                  <img src={Logo} alt="Logo" />
                </IconButton>
              </Tooltip>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
              className="navButtons"
            >
              {[
                { text: "Home", href: "#home" },
                { text: "Sobre", href: "#sobre" },
                { text: "Destaques", href: "#destaques" },
                { text: "Produtos", href: "#produtos" },
                { text: "Contato", href: "#contato" },
              ].map((item) => (
                <Box key={item.text} sx={{ display: "flex", alignItems: "center" }}>
                  <Tooltip
                    title={item.text}
                    placement="bottom"
                    TransitionComponent={Zoom}
                    sx={{ borderRadius: "50px", padding: "5px" }}
                  >
                    <IconButton href={item.href}>
                      <Typography color="#fff" fontSize={20} fontWeight={900}>
                        {item.text}
                      </Typography>
                    </IconButton>
                  </Tooltip>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Outlet />
    </Box>
  );
}

export default ResponsiveAppBar;
