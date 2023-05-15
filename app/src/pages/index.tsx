import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { ScrollContextProvider } from "@/Context/ScrollContext";
import { Box, Container } from "@mui/system";

export default function Home() {
  return (
    <Box>
     <ScrollContextProvider>
      <Header />
       <About />
       <Projects />
       <Contact />
       </ScrollContextProvider>
      </Box>
   
  )
}
