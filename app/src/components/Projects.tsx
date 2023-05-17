import { MyContext } from "@/Context/AppContext";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

type Project = {
  title: string;
  image: string;
  siteUrl: string;
  repositoryUrl: string;
  description: string;
};

const Projects: React.FC = () => {
  const { showProjects, showButton } = useContext(MyContext);

  const projects: Project[] = [
    {
      title: "WebScrap",
      image: "/images/dashboard.png",
      siteUrl: "https://velty-dashboard-guilhermesantiago18.vercel.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/Velty-Dashboard",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "DashBoard",
      image: "/images/webscrap.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "WebScrap",
      image: "/images/trivia.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "This project performs webscrap searching for real-time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "WebScrap",
      image: "/images/weather.png",
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
    <div id="projectsSection">
      { (showProjects || showButton) &&
    <Container sx={{minHeight: '100vh'}}>
      <Box textAlign="center" className="fade-in" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Grow in={true} timeout={3000}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Works
        </Typography>
        </Grow>
       </Box>
        <Grid container justifyContent="flex-start" spacing={2} mt={1}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Grow in={true} timeout={index * 2000}>
                <Card
                  sx={{
                    "&:hover": { boxShadow: 4, border: "2px solid #FF9600" }, borderRadius: 1
                  }}
                >
                  <CardMedia
                    sx={{minHeight: '220px'}}
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
    </Container>
}
    </div>
  );
};

export default Projects;