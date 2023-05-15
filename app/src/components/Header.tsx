import React, { useRef, useState } from "react";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Link from "next/link";
import { ScrollContextProvider, useScrollContext } from "@/Context/ScrollContext";

const Header: React.FC = () => {
  const { scrollToRef } = useScrollContext();
  const contactRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef<null | HTMLDivElement>(null);

  function handleScrollToContact() {
    scrollToRef(contactRef);
  }

  function handleScrollToProjects() {
    scrollToRef(projectsRef);
  }

  return (
    <Box>
      <AppBar position="static" sx={{ background: "linear-gradient(45deg, #ffd700, #ff8c00)" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Stack sx={{ flexDirection: "row" }}>
            <Typography variant="h5" component="div" sx={{ fontFamily: "Montserrat" }}>
             Send me a message
            </Typography>
            <Button variant="contained" onClick={handleScrollToContact} sx={{ mx: 1 }}>
              <ContactMailIcon />
            </Button>
          </Stack>
          <Stack sx={{ flexDirection: "row" }}>
            <Button variant="contained" sx={{ mx: 1 }} onClick={handleScrollToProjects}>
              <Typography component="div" sx={{ fontFamily: "Montserrat", cursor: 'pointer'}}>
                Works
              </Typography>
            </Button>
            <Link target="_blank" href="https://www.linkedin.com/in/guilherme-santiago-dev/" passHref>
              <Button variant="contained">
                <LinkedInIcon fontSize="medium" />
              </Button>
            </Link>
            <Link target="_blank" href="https://github.com/GuilhermeSantiago18" passHref>
              <Button variant="contained" sx={{ mx: 1 }}>
                <GitHubIcon fontSize="medium" />
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};



export default Header;
