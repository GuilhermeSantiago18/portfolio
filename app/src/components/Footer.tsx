import React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "primary.main", p: 1, mt: 10 }}>
      <Stack
      alignItems="center"
        justifyContent="center"
      >
      <Stack flexDirection={isMobile ? "column": "row"} alignItems="center">
        <Stack flexDirection="row">
      <Typography variant="body2" color="secondary">
            <WhatsAppIcon /> 
          </Typography>
          <Typography variant="body2" color="secondary" ml={1}>
            {`+55 (084) 99618-7958`}
          </Typography>
          </Stack>
          <Stack flexDirection="row">
          <Typography variant="body2" color="secondary" ml={1}>
            <EmailIcon /> 
          </Typography>
           <Typography variant="body1" color="secondary" sx={{ml: 1}}>
           guilherme.limasantiago@gmail.com
         </Typography>
         </Stack>
         </Stack>
        <Typography variant="body2" color="secondary">Developed by Guilherme Santiago</Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
