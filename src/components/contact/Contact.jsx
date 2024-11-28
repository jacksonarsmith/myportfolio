import { Container, TextField, Button, Typography, Box, Divider } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = formData;
    const mailtoLink = `mailto:jackson16smith@gmail.com?subject=Contact from ${email}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <Container id={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 4,
        width: '90vw',
        mt: 8
      }}
    >
      <Typography variant="h2" gutterBottom>
        Contact Me
      </Typography>
      <Divider sx={{ mb: 3, maxWidth: '65vw', width: '100%' }} />
      <Typography variant="body1" gutterBottom sx={{ maxWidth: '65vw', width: '100%' }}>
        Want to get in touch? Fill out the form below to send me an email or follow me on {" "}
        <Link to="https://www.linkedin.com/in/jacksonarsmith" target="_blank" rel="noopener noreferrer">
            LinkedIn
        </Link>
        {" "}and send me direct message through there. Thank you!
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '65vw'
        }}
        onSubmit={handleSubmit}
      >
        <TextField
            variant="filled"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField

            variant="filled"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Contact;