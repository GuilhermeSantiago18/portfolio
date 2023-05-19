import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Container } from "@mui/material";


export default function Home() {
  return (
    <>
    <Container>
      <Header />
       <About />
       <Skills />
       <Projects />
       <Contact />
    </Container>
       <Footer />
       </>
  )
}
