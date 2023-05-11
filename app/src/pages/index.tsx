import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Box, Container } from "@mui/system";

export default function Home() {
  return (
    <Box sx={{bgcolor: 'secondary', width: "100%"}}>
      <Header />
      <Projects />
    </Box>
  )
}
