import React, { useState } from "react";
import { TextField, Typography, Box, Container, styled } from "@mui/material";



const ProfileContainer = styled(Container)`
  padding: 24px;
  border-radius: 8px;
  color: #251D00;
`;

const About: React.FC = () => {

  return (
    <ProfileContainer maxWidth="md">
      <Box>
        <Typography variant="h4">
          About me
        </Typography>
        <Typography variant="h6" >
         I'm Guilherme Santiago
        </Typography>
      </Box>
    </ProfileContainer>
  );
};

export default About;
