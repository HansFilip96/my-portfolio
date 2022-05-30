import React, { useState } from "react";
import { IconButton, Stack, Avatar } from "@mui/material";
import "./navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import image from "../../assets/EBM02070.jpg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="__navbar">
      <div className="__navbar-links">
        <Stack>
          <Avatar src={image} sx={{ width: 54, height: 54 }} />
        </Stack>

        <div className="__navbar-links_container">
          <p>
            <a href="#Home">Home</a>
          </p>
          <p>
            <a href="Portfolio">Portfolio</a>
          </p>
          <p>
            <a href="#Experience">Experience</a>
          </p>
          <p>
            <a href="#About">About</a>
          </p>
          <p>
            <a href="#Contact">Contact</a>
          </p>
        </div>
      </div>
      <IconButton href="https://www.linkedin.com/in/filip-samuelsson-95899b21b">
        <LinkedInIcon sx={{ color: "#fff" }} />
      </IconButton>
      <IconButton href="https://github.com/HansFilip96">
        <GitHubIcon sx={{ color: "#fff" }} />
      </IconButton>
    </div>
  );
};

export default Navbar;
