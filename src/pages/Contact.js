import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    let emailData = {
      title: formData.subject || 'Contact Form Submission',
      to_name: 'Geo Shamba Surveys',
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
    };
    console.log('Prepared emailData:', emailData);
    try {
      await emailjs.send(
        'service_dnvs6at',
        'template_3cd5bnh',
        emailData,
        'SBzCTODn0J3YU-df'
      );
      alert('Thank you for contacting us! Your message has been sent.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h1" align="center" sx={{ mb: 3, fontWeight: 700 }}>
        Contact Us
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Have a question or want to discuss your project? Fill out the form below or reach us directly.
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />
              <TextField
                name="subject"
                label="Subject"
                fullWidth
                margin="normal"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <TextField
                name="message"
                label="Message"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2, px: 4 }}
                fullWidth
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              Our Office
            </Typography>
            <Typography variant="body1" color="text.secondary">
              61774-00200 Fedha Road<br />
              Embakasi Nairobi<br />
              Kenya<br />
              <br />
              Email: geo.surveyor.vokeli@gmail.com<br />
              Phone: (+254) 727 404 605/ 753 626 813
            </Typography>
          </Box>
          <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315904!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sSurvey%20Company!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 
