import { AppBar, Toolbar, Box, Grid, ButtonGroup, Button, Typography, IconButton, Tooltip } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { HashLink as Link } from 'react-router-hash-link'

const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Footer = () => {
  return (
    <AppBar position='static' 
        sx={{ 
            top: 'auto', 
            bottom: 0, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            boxShadow: 3
        }}
    >
        <Toolbar
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid container spacing={12}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 4
                }}
            >
                <Grid item xs={6} sm={6} md={4}>
                    <ButtonGroup color='inherit' variant='text' aria-label='Footer navigation button group' orientation='vertical'>
                        {navItems.slice(0,3).map((item, index) => (
                            <Button key={index} component={Link} to={`#${item.toLowerCase()}`} variant='text'
                                sx={{
                                    p: 2
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Grid>
                <Grid item xs={6} sm={6} md={4}> 
                    <ButtonGroup color='inherit' variant='text' aria-label='Footer navigation button group' orientation='vertical'
                    >
                        {navItems.slice(3).map((item, index) => (
                            <Button key={index} component={Link} to={`#${item.toLowerCase()}`} variant='text'
                                sx={{
                                    p: 2
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        <Tooltip title='LinkedIn' arrow>
                            <IconButton color="inherit" href="https://linkedin.com/in/jacksonarsmith/" target="_blank">
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='GitHub' arrow>
                        <IconButton color="inherit" href="https://github.com/jacksonarsmith/" target="_blank">
                            <GitHubIcon fontSize="large"/>
                        </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant='body1'>
                © {new Date().getFullYear()} Jackson Smith
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Footer