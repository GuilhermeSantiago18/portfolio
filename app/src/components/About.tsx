import { Typography, Grow, Stack } from "@mui/material";

const About: React.FC = () => {
  return (
    <Stack flexDirection="column" alignItems="center" mt={15} mb={50} p={2}>
      <Grow in={true} timeout={2000}>
        <Typography variant="h4" sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", mb: 5, fontFamily: "Montserrat", color: "secondary.main" }}>About me</Typography>
      </Grow>
      <Grow in={true} timeout={3200}>
        <Typography variant="h6" sx={{maxWidth: 600, fontFamily: "Montserrat", color: "secondary.main"}}>
          {`I'm Guilherme Santiago, I live in Natal/RN, a coastal city in the northeast of Brazil.
          I worked for many years in the commercial area, which brought me good experience in teamwork,
          understand the difficulties of others, always focusing on the best solution. After making some investments
          I deepened my studies in cryptocurrencies and blockchain, which is an area that I really like and that's why I started my studies in web development.
           Today I have several projects developed, putting into practice all the knowledge acquired.`}
        </Typography>
      </Grow>
    </Stack>
  );
};

export default About;
