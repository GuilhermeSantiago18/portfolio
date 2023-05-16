import React, { useContext } from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { MyContext } from "@/Context/AppContext";
import ScrollButton from "./ScrollButton";


const Header: React.FC = () => {

  const { isDisabled, setIsDisabled } = useContext(MyContext);

  const handleButtonClick = () => {
    setIsDisabled(!isDisabled);
  };


  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Stack flexDirection="row">
          <Typography variant="h5" component="div" sx={{ fontFamily: "Montserrat" }}>
            Send me a message
          </Typography>
          <ScrollLink to="contactSection" smooth={true} offset={100} duration={1500}>
            <Button variant="contained" sx={{ mx: 1 }} onClick={handleButtonClick}>
              <ContactMailIcon />
            </Button>
          </ScrollLink>
          </Stack>
          <Stack flexDirection="row" p={2}>
          <ScrollLink to="projectsSection" smooth={true} offset={100} duration={1500}>
          <Button variant="contained" sx={{ mx: 1 }} onClick={handleButtonClick}>
            <Typography component="div" sx={{ fontFamily: "Montserrat", cursor: "pointer" }}>
              Works
            </Typography>
          </Button>
          </ScrollLink>
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
      <ScrollButton />
    </Box>
  );
};

export default Header;





