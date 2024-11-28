import { Box, Container, Grid, Card, CardHeader, CardMedia, CardActions, IconButton, Typography, CardContent, Divider, Skeleton, Chip, Tooltip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import { motion as m } from 'framer-motion';

const projects = [
    {
        title: "Imperial Contracting Ottawa",
        description: "Developed the Imperial Contracting Ottawa local business website to showcase our their full home renovation expertise. The dynamic platform features a curated portfolio, captivating before-and-after gallery, and detailed service offerings, highlighting our commitment to quality craftsmanship. Priority for this project was to increase online visibility and user engagement through a responsive design and allowing users to easily get in touch with the business.",
        image: "/ico-website.png",
        code: "https://github.com/jacksonarsmith/imperialcontractingottawa",
        url : "https://imperialcontractingottawa.ca",
        technologies: ["React.js", "Material-UI", "Node.js", "Express.js"]
    },
    {
        title: "Movie Ranking Platform",
        description: "A movie platform that scrapes live data from IMDb to provide real-time movie rankings. Users can search for movies, view their ratings, and add them to their watchlist. The platform also features a user authentication system, allowing users to create accounts, log in, and save their watchlist. ",
        image: '/movie-ranking-platform.png',
        code: "https://github.com/jacksonarsmith/realtime-movie-ranking-platform",
        url : "none",
        technologies: ["React.js", "Material-UI", "Golang", "PostgreSQL"]
    },
]

const cardVariants = {
    offscreen: {
        opacity: 0,
        filter: "blur(10px)",
        y: 50
    },
    onscreen: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Projects = ({ id }) => {
  return (
    <Container id={id}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
            mb: 4,
        }}
    >
        <Typography variant="h2">
            Projects
        </Typography>
        <Divider sx={{ mt: 2, mb: 5, width: '100%' }} />
        <Grid container spacing={12} sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
            {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }} component={m.div}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={cardVariants}
                >
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            borderRadius: 2,
                            boxShadow: 3,
                            '&:hover': {
                                boxShadow: 5,
                                transform: 'scale(1.02)',
                                transition: '0.3s'
                            }
                        }}
                    >
                        <CardHeader title={project.title} />
                        {project.image ? (
                            <CardMedia 
                                component='img'
                                height='auto'
                                image={project.image}
                                alt={project.title}
                            />
                        ) : (
                            <Skeleton variant="rectangular" height={200} />
                        )}
                        <CardContent sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Divider sx={{ mb: 2 }}/>
                            <Box sx={{ mt: 2 }}>
                                {project.technologies.map((tech, index) => (
                                    <Chip key={index} label={tech} sx={{ mr: 1, mb: 1 }} />
                                ))}
                            </Box>
                            <Typography variant="body1">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Tooltip title="View Code" arrow>
                                <IconButton aria-label='' href={project.code} target="_blank">
                                    <CodeIcon />
                                </IconButton>
                            </Tooltip>
                            {project.url !== "none" && (
                                <Tooltip title="Website" arrow>
                                    <IconButton aria-label='Website' href={project.url} target="_blank">
                                        <LinkIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

Projects.propTypes = {
    id: PropTypes.string.isRequired
}

export default Projects