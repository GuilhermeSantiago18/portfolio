import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="60%"
          image="/images/webscrap.png"
          alt="Project Image"
        />
        <CardContent>
            <Link target="_blank" href="https://lexart-app.up.railway.app/" passHref>
          <Typography gutterBottom variant="h6" sx={{alignSelf: "center"}}>
          Acessar site
          </Typography>
          </Link>
          <Typography variant="body2" color="text.secondary">
            Esse projeto realiza webscrap buscando informações em tempo real do Mercado Livre e Buscapé, podendo escolher por categorias e filtros
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Projects;
