import React, { useState } from "react";
import { TextField, Typography, Box, Container, styled } from "@mui/material";



const ProfileContainer = styled(Container)`
  background: linear-gradient(45deg, #ffd700, #ff8c00);
  padding: 24px;
  border-radius: 8px;
  color: white;
`;

const About: React.FC = () => {

  return (
    <ProfileContainer maxWidth="md">
      <Box>
        <Typography variant="h4">
          About me
        </Typography>
        <Typography variant="h6" >
          About:
        </Typography>
      </Box>
    </ProfileContainer>
  );
};

export default About;
