import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Button,
  Grow,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { MyContext } from "@/Context/AppContext";
import ScrollButton from "./ScrollButton";

const Header: React.FC = () => {
  const { showProjects, setShowProjects } = useContext(MyContext);

  const handleClickProjects = () => {
    setShowProjects(!showProjects);
  };

  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <Grow in={true} timeout={1500}>
        <AppBar position="fixed" sx={{ background: "linear-gradient(180deg, #ffd700, #ff8c00)" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box display="flex" alignItems="center">
              {!isMobile && 
              <Typography
                variant="h6"
                component="div"
                sx={{ fontFamily: "Montserrat", mx: 1, paddingLeft: 5, color: 'primary.main' }}
              >
                Send me a message
              </Typography>
}
              <ScrollLink to="contactSection" smooth={true} offset={100} duration={2500}>
                <Button variant="contained" sx={{ mx: 1.5 }} onClick={handleClickProjects}>
                  <ContactMailIcon />
                </Button>
              </ScrollLink>
            </Box>
            {!isMobile && 
              <Typography
                variant="h4"
                component="div"
                sx={{ fontFamily: "Montserrat", mx: 1, alignSelf: "center",  fontStyle: "italic", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: 'primary.main' }}
              >
               Guilherme Santiago
              </Typography>
}
            <Box display="flex" alignItems="center" p={2}>
              <ScrollLink to="projectsSection" smooth={true} offset={-80} duration={1500}>
                <Button variant="contained" sx={{ mx: 1 }} onClick={handleClickProjects}>
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
            </Box>
          </Toolbar>
        </AppBar>
      </Grow>
      <ScrollButton />
    </Box>
  );
};

export default Header;
