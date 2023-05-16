import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Box>
      <Header />
       <About />
       <Projects />
       <Contact />
    </Box>
   
  )
}
