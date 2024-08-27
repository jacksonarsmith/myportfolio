import { Box, Button, Typography } from '@mui/material';
import TypingAnimation from '../../utils/TypingAnimation';
import { HashLink as Link } from 'react-router-hash-link'; 
import { ArrowDownwardOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';

const Hero = ({ id }) => {
  return (
    <Box id={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
        height: '100vh'
      }}
    >
      <TypingAnimation text="I'm Jackson Smith"/>
      <Typography variant='h4' sx={{ mt: 2 }}>
        Software Engineer
      </Typography>
      <Button component={Link} to='#about' variant='contained' color='primary' size='large' sx={{ mt: 5 }}>
        Learn More
        <ArrowDownwardOutlined sx={{ ml: 1 }}/>
      </Button>
    </Box>
  );
}

Hero.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Hero;