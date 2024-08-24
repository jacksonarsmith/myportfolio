import { useState } from 'react';
import { AppBar, Box, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
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
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navItems.map((item, index) => (
                    <ListItem button key={index} component="a" href={`#${item.toLowerCase()}`}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
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
        <AppBar position="static" sx={{ width: '100vw' }}>
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
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
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;