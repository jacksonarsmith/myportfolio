import { Box } from '@mui/material';
import Hero from '../components/hero/Hero';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';
import ParticleBackground from '../utils/ParticlesBackground';
import Contact from '../components/contact/Contact';

const iconSlugs = [
  "react",
  "javascript",
  "nodedotjs",
  "express",
  "html5",
  "css3",
  "mysql",
  "postgresql",
  "mongodb",
  "java",
  "go",
  "cplusplus",
  "python",
  "git",
  "docker",
];

const Landing = () => {
  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ParticleBackground />
      <Box sx={{ position: 'relative', zIndex: 1, height: '100%', overflowY: 'auto' }}>
        <Hero id="home"/>
        <About id="about"/>
        <Experience id="experience"/>
        <Skills id="skills" iconSlugs={iconSlugs}/>
        <Projects id="projects"/>
        <Contact id="contact"/>
        <Footer/>
      </Box>
    </Box>
  );
}

export default Landing;