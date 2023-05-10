import React, { useRef } from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from "next/link";
import Contact from "./Contact";

const Header: React.FC = () => {
    const titleRef = useRef<null | HTMLDivElement>(null)


  function handleCrollClick() {
      titleRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "linear-gradient(45deg, #ffd700, #ff8c00)" }}>
        <Toolbar sx={{justifyContent: 'space-around'}}>
          <Typography variant="h5" component="div" sx={{ fontFamily: "Montserat"}}>
            Guilherme Santiago
          </Typography>
        <Stack sx={{flexDirection: "row"}}>
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
            <Button variant="contained" onClick={handleCrollClick}>
              <ContactMailIcon />
            </Button>
          </Stack>
          </Toolbar>
      </AppBar>
      <div ref={titleRef} /> {<Contact />}
    </Box>
  );
};

export default Header;
