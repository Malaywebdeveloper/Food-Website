import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
// import Navbar from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 1 }}
      >
        <FastfoodIcon />
        MY RESTURENT
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "blue" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drwaer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            
            >
              <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
                <FastfoodIcon />
                MY RESTURENT
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/About"}>About</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
