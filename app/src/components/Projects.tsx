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
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

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
      title: "Portfolio",
      image: "/images/portfolio.png",
      siteUrl: "https://guilhermesantiago.vercel.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/portfolio",
      description:
        "Personal portfolio so you can get to know me more and get to know about my skills.",
    },
    {
      title: "Webscrap",
      image: "/images/webscrap.png",
      siteUrl: "https://lexart-app.up.railway.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/FullStackProject",
      description:
        "Performs webscrap searching for real time information from Mercado Livre and Buscapé, being able to choose by categories and filters.",
    },
    {
      title: "Trivia",
      image: "/images/triviagame.png",
      siteUrl: "https://guilhermesantiago18.github.io/TriviaGame",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/TriviaGame",
      description:
        "Trivia game by making calls to the Trivia API. Excellent game to test your general knowledge and play with friends.",
    },
    {
      title: "GuilhermeFC",
      image: "/images/guilhermefc.png",
      siteUrl: "https://github.com/GuilhermeSantiago18/GuilhermeFutebolClub",
      repositoryUrl:
        "https://github.com/GuilhermeSantiago18/GuilhermeFutebolClub",
      description:
        "Fullstack application where you make requests from the backend to the frontend about data from a football championship.",
    },
    {
      title: "Dashboard",
      image: "/images/dashboard.png",
      siteUrl: "https://velty-dashboard-guilhermesantiago18.vercel.app/",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/Velty-Dashboard",
      description:
        "Static sales panel based on figma, to improve visualization for companies, can be improved and become functional.",
    },
    {
      title: "Weather",
      image: "/images/weather.png",
      siteUrl: "https://weather-project-tawny.vercel.app",
      repositoryUrl: "https://github.com/GuilhermeSantiago18/Weather-Project",
      description:
        "Simple application, which makes calls to the Weather API, created to show the temperature of all cities in the world.",
    },
 
 
  ];

  return (
    <div id="projectsSection">
      {(showProjects || showButton) && (
        <Container sx={{ minHeight: "100vh" }}>
          <Box
            textAlign="center"
            className="fade-in"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Grow in={true} timeout={3000}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 5,
                  mt: 8,
                  color: "secondary.main",
                  fontFamily: "Montserrat",
                }}
              >
                Works
              </Typography>
            </Grow>
          </Box>
          <Grid container justifyContent="flex-start" spacing={1}>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Grow in={true} timeout={index * 2000}>
                  <Card
                    sx={{
                      "&:hover": { boxShadow: 4, border: "2px solid #E1E2E2" },
                      borderRadius: 1,
                    }}
                  >
                    <CardMedia
                      sx={{ maxHeight: "180px" }}
                      component="img"
                      image={project.image}
                      alt="Project Image"
                    />
                    <CardContent
                      sx={{ bgcolor: "#E1E2E2", minHeight: "180px" }}
                    >
                      <Stack flexDirection="row" justifyContent="space-around">
                        <Link href={project.siteUrl} target="_blank">
                          <Typography variant="h6">
                            <LanguageIcon color="primary" />
                          </Typography>
                        </Link>
                        <Link href={project.repositoryUrl} target="_blank">
                          <Typography variant="h6">
                            <GitHubIcon color="primary" />
                          </Typography>
                        </Link>
                      </Stack>
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{ mt: 2 }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default Projects;
