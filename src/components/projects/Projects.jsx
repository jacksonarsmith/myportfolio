import { Container, Grid, Card, CardHeader, CardMedia, CardActions, IconButton, Typography, CardContent, Divider, Skeleton } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import { motion as m } from 'framer-motion';

const projects = [
    {
        title: "Imperial Contracting Ottawa",
        description: "Developed the Imperial Contracting Ottawa [ICO] Home Renovations website using the MERN stack to showcase our Ottawa-based full home renovation expertise. The dynamic platform features a curated portfolio, captivating before-and-after gallery, and detailed service offerings, highlighting our commitment to quality craftsmanship. Leveraged modern web technologies for optimal performance and a seamless user experience. The inclusion of client testimonials and a user-friendly contact form underscores our dedication to client satisfaction.",
        image: "/ico-website.png",
        code: "https://github.com/jacksonarsmith/imperialcontractingottawa",
        url : "https://imperialcontractingottawa.ca"
    },
    {
        title: "Movie Ranking Platform",
        description: "Description 2",
        image: null,
        code: "https://github.com/jacksonarsmith/realtime-movie-ranking-platform",
        url : "none"
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
            height: '100vh'
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
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Divider sx={{ mb: 2 }}/>
                            <Typography variant="body1">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label='' href={project.code} target="_blank">
                                <CodeIcon />
                            </IconButton>
                            {project.url !== "none" && (
                                <IconButton aria-label='Website' href={project.url} target="_blank">
                                    <LinkIcon />
                                </IconButton>
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