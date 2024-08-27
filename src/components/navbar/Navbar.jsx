import { useState } from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Drawer, ButtonGroup } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Navbar = ({ toggleTheme, isDarkMode }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawer = (
        <Box
            sx={{ 
                width: "45vw",
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <Button variant='contained' onClick={toggleDrawer(false)}>
                    <ArrowBackIosIcon />
                    Close
                </Button>
                <ButtonGroup color='inherit' orientation="vertical" variant='text' aria-label='Vertical navigation button group' 
                    sx={{
                        gap: 2
                    }}
                >
                {navItems.map((item, index) => (
                    <Button component={Link} key={index} color="inherit" to={`#${item.toLowerCase()}`}
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
                </ButtonGroup>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 2
                }}
            >
                <IconButton color="inherit" href="https://linkedin.com/in/jacksonarsmith/" target="_blank">
                    <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" href="https://github.com/jacksonarsmith/" target="_blank">
                    <GitHubIcon />
                </IconButton>
            </Box>
        </Box>
    );

    return (
        <AppBar position="fixed" sx={{ width: '100vw' }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {isMobile ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={toggleTheme}>
                            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                ) : (
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Button color="inherit" href="#home" sx={{ gap: 1 }}>
                            SWE Smith
                            <CodeIcon />
                        </Button>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 5,
                            }}
                        >
                            {navItems.map((item, index) => (
                                <Button component={Link} key={index} color="inherit" to={`#${item.toLowerCase()}`}
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
                                gap: 1,
                                alignItems: 'center'
                            }}
                        >
                            <IconButton color="inherit" onClick={toggleTheme}>
                                {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
                            </IconButton>
                        </Box>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

Navbar.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired
};

export default Navbar;