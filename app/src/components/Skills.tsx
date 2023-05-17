import React from "react";
import {
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

type Skill = {
  name: string;
  image: string;
};

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "NodeJS",
      image:
        "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      name: "Mysql",
      image:
        "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "ReactJS",
      image:
        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    },
    {
      name: "Javascript",
      image:
        "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
    },
    {
      name: "Typescript",
      image:
        "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "Redux",
      image:
        "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
    },
    {
      name: "ReactJs",
      image:
        "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "ReactJs",
      image:
        "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    },
  ];
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={isMobile ? "column" : "row"}
      justifyContent="space-around"
      mb={10}
      sx={{
        paddingLeft: isMobile ? "16px" : 0,
        paddingRight: isMobile ? "16px" : 0,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", marginBottom: isMobile ? 3 : 0}}
          align={isMobile ? "center": "left"}
        >
          Skills
        </Typography>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        spacing={2}
        sx={{ width: "fit-content" }}
      >
        {skills.map((skill, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} spacing={1}>
            <Card
              sx={{
                "&:hover": { boxShadow: 4, border: "2px solid #FF9600" },
                borderRadius: 1,
              }}
            >
              <CardMedia
                component="img"
                image={skill.image}
                alt="Skill Image"
                style={{
                  height: "30px",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
