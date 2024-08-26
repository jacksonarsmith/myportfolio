import { Container, Grid, Card, CardHeader, CardMedia, CardActions, IconButton, Typography, CardContent } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';

const projects = [
    {
        title: "Imperial Contracting Ottawa",
        description: "Developed the Imperial Contracting Ottawa [ICO] Home Renovations website using the MERN stack to showcase our Ottawa-based full home renovation expertise. The dynamic platform features a curated portfolio, captivating before-and-after gallery, and detailed service offerings, highlighting our commitment to quality craftsmanship. Leveraged modern web technologies for optimal performance and a seamless user experience. The inclusion of client testimonials and a user-friendly contact form underscores our dedication to client satisfaction.",
        image: "/src/assets/ico-website.png",
        code: "https://github.com/jacksonarsmith/imperialcontractingottawa",
        url : "https://imperialcontractingottawa.com"
    },

    {
        title: "Movie Ranking Platform",
        description: "Description 2",
        image: "https://via.placeholder.com/300",
        code: "https://github.com/jacksonarsmith/realtime-movie-ranking-platform",
        url : "none"
    },
]

const Projects = ({ id }) => {
  return (
    <Container id={id}>
        <Grid container spacing={12} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
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
                        <CardMedia 
                            component='img'
                            height='auto'
                            image={project.image}
                            alt={project.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="body1">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label='Code' href={project.code} target="_blank">
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