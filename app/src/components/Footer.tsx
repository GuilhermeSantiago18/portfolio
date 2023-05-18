import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{  background: "linear-gradient(180deg, #ffd700, #ff8c00)", p: "5px", mt: 10 }}>
      <Stack
        alignItems="center"
        justifyContent={"center"}
      >
            <Stack flexDirection="row">
          <Typography variant="body2">
            <EmailIcon /> 
          </Typography>
           <Typography variant="body2" sx={{ml: 1}}>
           guilherme.limasantiago@gmail.com
         </Typography>
         </Stack>
        <Typography variant="body2">Developed by Guilherme Santiago</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
