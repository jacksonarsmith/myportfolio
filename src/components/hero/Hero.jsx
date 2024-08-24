import { Box, Button, Typography} from '@mui/material'

const Hero = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 5
        }}
    >
        <Typography variant="h1">
            Jackson Smith
        </Typography>
        <Typography variant="h3">
            Full Stack Developer
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
            Contact Me
        </Button>
    </Box>
  )
}

export default Hero