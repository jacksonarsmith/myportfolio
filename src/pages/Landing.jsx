import { Box } from '@mui/material'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Experience from '../components/experience/Experience'
import Skills from '../components/skills/Skills'

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
        <Navbar />
        <Hero />
        <Experience />
        <Skills iconSlugs={iconSlugs}/>
    </Box>
  )
}

export default Landing