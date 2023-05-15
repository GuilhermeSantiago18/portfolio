import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControlLabel,
  Grid,
  Grow,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import Link from "next/link";

type Project = {
  title: string;
  image: string;
  siteUrl: string;
  repositoryUrl: string;
  description: string;
};

const Projects: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  const projects: Project[] = [
    {
      title: "WebScrap",
      image: "/images/webscrap.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "WebScrap",
      image: "/images/webscrap.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "WebScrap",
      image: "/images/webscrap.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "WebScrap",
      image: "/images/webscrap.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "WebScrap",
      image: "/images/webscrap.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
  ];

  return (
    <Container>
      <Box textAlign="center" className="fade-in" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Grow in={true} timeout={3000}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          WORKS
        </Typography>
        </Grow>
     
      <Grow in={true} timeout={3000}>
      <FormControlLabel
        control={
          <Switch
            checked={showProjects}
            onChange={(e) => setShowProjects(e.target.checked)}
            color="primary"
            
          />
        }
        label="Show"
      />
       </Grow>
       </Box>
      {showProjects && (
        <Grid container justifyContent="flex-start" spacing={2}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Grow in={true} timeout={index * 2000}>
                <Card
                  sx={{
                    "&:hover": { boxShadow: 4, border: "2px solid #95D5B2" },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt="Project Image"
                  />
                  <CardContent sx={{ bgcolor: "#FFCD00" }}>
                    <Stack flexDirection="row" justifyContent="space-around">
                      <Link href={project.siteUrl} target="_blank">
                        <Typography variant="h6" gutterBottom>
                          Site
                        </Typography>
                      </Link>
                      <Link href={project.repositoryUrl} target="_blank">
                        <Typography variant="h6" gutterBottom>
                          Repository
                        </Typography>
                      </Link>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Projects;