import React, { useState } from "react";
import { Typography, Box, Container, styled, Grow } from "@mui/material";



const ProfileContainer = styled(Container)`
  color: #68957C;
  background: #121212;
`;

const About: React.FC = () => {

  return (
    <ProfileContainer maxWidth="md">
      <Box>
      <Grow  in={true} timeout={1000}>
        <Typography variant="h4">
          About me
        </Typography>
          </Grow>
        <Grow  in={true} timeout={2000}>
        <Typography variant="h6" >
        {`I'm Guilherme Santiago, i live in Natal/RN, a coastal city in the northeast of Brazil. Welcome, meet some of my projects and feel free to leave your message!`}
        </Typography>
        </Grow>
      </Box>
    </ProfileContainer>
  );
};

export default About;
