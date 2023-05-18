import { Typography, Grow, Stack } from "@mui/material";

const About: React.FC = () => {
  return (
    <Stack flexDirection="column" alignItems="center" mt={15} mb={10} p={2}>
      <Grow in={true} timeout={2000}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            mb: 5,
            fontFamily: "Montserrat",
            color: "secondary.main",
          }}
        >
          About me
        </Typography>
      </Grow>
      <Grow in={true} timeout={3200}>
        <Typography
          variant="h6"
          sx={{
            maxWidth: 600,
            fontFamily: "Montserrat",
            color: "secondary.main",
          }}
        >
          {`I'm Guilherme Santiago, I live in Natal/RN, a coastal city in the northeast of Brazil.
           I worked for many years in the commercial area, which brought me good experience with teamwork, 
           understanding other people's difficulties, always focusing on the best solution. After making some investments,
            I deepened my studies in cryptocurrencies and blockchain, 
          which is an area that I really like and was the reason for me to start studying web development.
           Today I have some projects developed, putting into practice all the knowledge acquired.`}
        </Typography>
      </Grow>
    </Stack>
  );
};

export default About;
