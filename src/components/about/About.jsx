import { Container, Grid, Typography, Button, Card, CardMedia, CardActions, IconButton, Divider, Tooltip } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import WorkIcon from '@mui/icons-material/Work'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { HashLink } from 'react-router-hash-link';

const About = ({ id }) => {
  return (
    <Container id={id}
        sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Grid container spacing={12}>
            <Grid item xs={12} md={6}>
            <Card variant='outlined'
                sx={{
                borderRadius: 2,
                boxShadow: 3,
                }}
            >
                <CardMedia 
                component='img'
                height='auto'
                image='/background-hero.png'
                alt='Jackson Smith'
                />
                <CardActions disableSpacing
                    sx={{
                        gap: 2,
                    }}
                >
                    <Tooltip title='LinkedIn' arrow>
                        <IconButton aria-label='LinkedIn'>
                            <Link to='https://www.linkedin.com/in/jacksonarsmith'>
                                <LinkedInIcon color='inherit' fontSize='large'/>
                            </Link>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='GitHub' arrow>
                        <IconButton aria-label='GitHub'>
                            <Link to='https://github.com/jacksonarsmith'>
                                <GitHubIcon color='inherit' fontSize='large'/>
                            </Link>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} md={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }}
            >
                <Typography variant='h3' sx={{ mb: 2 }}> 
                    About Me
                </Typography>
                <Divider sx={{ mb: 3, width: '100%' }} />
                <Typography variant='body1' align='left'>
                    I am a software engineer with a Bachelor degree in Computer Science with Honours from Carleton University.
                    I specialize in full-stack web development and have experience with a variety of technologies.
                </Typography>
                <Button component={HashLink} to="#experience" variant='contained' color='primary' size='large' sx={{ mt: 5 }}>
                    See Experience
                    <WorkIcon sx={{ ml: 1 }} fontSize='small'/>
                </Button>
            </Grid>
        </Grid>
    </Container>
  )
}

About.propTypes = {
  id: PropTypes.string.isRequired,
}

export default About