import { Box } from '@mui/material'
import Hero from '../components/hero/Hero'
import Experience from '../components/experience/Experience'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import About from '../components/about/About'

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
    <Box sx={{ width: '100vw' }}>
        <Hero id="home"/>
        <About id="about"/>
        <Experience id="experience"/>
        <Skills id="skills" iconSlugs={iconSlugs}/>
        <Projects id="projects"/>
    </Box>
  )
}

export default Landing