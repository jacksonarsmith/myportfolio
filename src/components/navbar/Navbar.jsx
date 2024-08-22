import { AppBar, Box, Toolbar, Button, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact']

const Navbar = () => {

    return (
        <AppBar position="static" sx={{ width: '100vw' }}>
            <Toolbar 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Typography variant="h6" component="div">
                        Jackson Smith
                    </Typography>
                </IconButton>
                <Box 
                    sx={{
                        display: 'flex',
                        gap: 5,
                    }}
                >
                    {navItems.map((item, index) => (
                        <Button key={index} color="inherit" href={`#${item.toLowerCase()}`}
                            sx={{
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '5px'
                                }
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1
                    }}
                >
                    <IconButton color="inherit" href="https://linkedin.com/in/jacksonarsmith/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://github.com/jacksonarsmith/" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar