import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

type Skill = {
    name: string;
    image: string;
};


const Skills: React.FC = () => {
const skills: Skill[] = [
    {
        name: 'Javascript',
        image: 'string'
    },
    {
        name: 'ReactJs',
        image: 'string'
    },
]

return (
    <Grid container spacing={2}>
        {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{
                    "&:hover": { boxShadow: 4, border: "2px solid #FF9600" }, borderRadius: 1
                  }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            {skill.name}
                        </Typography>
                  <CardMedia
                    component="img"
                    image={skill.image}
                    alt="Skill Image"
                  />
                    </CardContent>
                </Card>
                <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
            </Grid>
        ))}
    </Grid>
);
};

export default Skills;
