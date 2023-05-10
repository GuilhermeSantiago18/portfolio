import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#333333" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guilherme Santiago
          </Typography>
          <Link target="_blank" href="https://www.linkedin.com/in/guilherme-santiago-dev/" passHref>
            <Button variant="contained" sx={{ mx: 1 }}>
              <LinkedInIcon fontSize="medium" />
            </Button>
          </Link>
          <Link target="_blank" href="https://github.com/GuilhermeSantiago18" passHref>
            <Button variant="contained" sx={{ mx: 1 }}>
              <GitHubIcon fontSize="medium" />
            </Button>
          </Link>
          <Link href="/projects" passHref>
            <Button variant="contained" sx={{ mx: 1 }}>
              Projects
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
