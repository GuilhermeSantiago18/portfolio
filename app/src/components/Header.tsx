import React, { useRef } from "react";
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Link from "next/link";
import Contact from "./Contact";
import Projects from "./Projects";

const Header: React.FC = () => {
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  function handleScrollToProjects() {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Box>
      <AppBar position="static" sx={{ background: "linear-gradient(45deg, #ffd700, #ff8c00)" }}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Stack sx={{ flexDirection: "row" }}>
            <Typography variant="h5" component="div" sx={{ fontFamily: "Montserrat" }}>
              Guilherme Santiago
            </Typography>
            <Button variant="contained" onClick={handleScrollToContact} sx={{ mx: 1 }}>
              <ContactMailIcon />
            </Button>
          </Stack>
          <Stack sx={{ flexDirection: "row" }}>
            <Button variant="contained" sx={{mx: 1}}>
          <Typography component="div" onClick={handleScrollToProjects} sx={{ fontFamily: "Montserrat", cursor: 'pointer'}}>
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
      <div ref={projectsRef} />
      {<Projects />}
      <div ref={contactRef} />
      {<Contact />}
    </Box>
  );
};

export default Header;
