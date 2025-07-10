import React from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
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
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                alert('Thank you for contacting us!');
                resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    margin="normal"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    name="message"
                    label="Message"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                    error={touched.message && Boolean(errors.message)}
                    helperText={touched.message && errors.message}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2, px: 4 }}
                  >
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
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