import React, { useRef } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Box,
  Card,
  InputLabel,
  FormControl,
  Select,
} from '@mui/material';
import {
  Description as FileIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const services = [
  'Land Surveying',
  'Sub-divisions Mutations',
  'Beaconing/Boundary Delimitation',
  'Cadastral Mapping',
  'Topographical Mapping',
  'Title Deed Processing',
  'Lidar & Aerial Mapping',
  'Succession of Land Process',
  'Land Searches',
  'Boundaries Determination',
  'Land Transfers & Sub-divisions',
  'Georeferencing & Navigations',
  'RTK (Real Time Kinematics Surveys)',
  'Cartography',
];

const QuoteSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  company: Yup.string().required('Company name is required'),
  service: Yup.string().required('Please select a service'),
  description: Yup.string().required('Project description is required'),
  document_link: Yup.string().url('Must be a valid URL').required('Document link is required'),
});

const GetQuote = () => {
  const fileInputRef = useRef();

  const handleEmailJSSend = async (values, resetForm) => {
    let emailData = {
      to_name: 'Geo Shamba Surveys',
      from_name: values.name,
      reply_to: values.email,
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company,
      service: values.service,
      description: values.description,
      document_link: values.document_link,
    };
    try {
      await emailjs.send(
        'service_dnvs6at',
        'template_hwdo74p',
        emailData,
        'SBzCTODnz0J3YU-df'
      );
      alert('Thank you for your quote request! We will review your project and get back to you within 24 hours.');
      resetForm();
    } catch (error) {
      alert('Sorry, there was an error sending your quote request. Please try again later.');
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        height: { xs: 250, sm: 300, md: 400 },
        background: 'linear-gradient(rgba(9,46,39,0.7),rgba(9,46,39,0.7)), url(/images/hero2.jpg) center/cover',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mb: { xs: 4, md: 6 },
      }}>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ 
            fontWeight: 700, 
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }
          }}>
            Get a Quote
          </Typography>
          <Typography variant="h5" sx={{ 
            mb: 3,
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
          }}>
            Fill out the form below to request a detailed quote for your project
          </Typography>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Card sx={{ p: { xs: 3, md: 4 }, boxShadow: 3 }}>
              <Typography variant="h4" sx={{ 
                mb: 3, 
                fontWeight: 600,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}>
                Request Your Quote
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ 
                mb: 4,
                fontSize: { xs: '0.9rem', md: '1rem' }
              }}>
                Please provide us with the details of your project so we can give you an accurate quote.
              </Typography>
              
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  service: '',
                  description: '',
                  document_link: '',
                }}
                validationSchema={QuoteSchema}
                onSubmit={(values, { resetForm }) => {
                  handleEmailJSSend(values, resetForm);
                }}
              >
                {({ errors, touched, setFieldValue }) => (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="name"
                          label="Full Name"
                          fullWidth
                          margin="normal"
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="email"
                          label="Email Address"
                          fullWidth
                          margin="normal"
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="phone"
                          label="Phone Number"
                          fullWidth
                          margin="normal"
                          error={touched.phone && Boolean(errors.phone)}
                          helperText={touched.phone && errors.phone}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          name="company"
                          label="Company Name"
                          fullWidth
                          margin="normal"
                          error={touched.company && Boolean(errors.company)}
                          helperText={touched.company && errors.company}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth margin="normal">
                          <InputLabel id="service-label">Service Type</InputLabel>
                          <Field
                            as={Select}
                            labelId="service-label"
                            name="service"
                            label="Service Type"
                            error={touched.service && Boolean(errors.service)}
                            value={undefined}
                            onChange={e => setFieldValue('service', e.target.value)}
                            sx={{
                              borderRadius: 2,
                            }}
                          >
                            {services.map((service) => (
                              <MenuItem value={service} key={service}>
                                {service}
                              </MenuItem>
                            ))}
                          </Field>
                          {touched.service && errors.service && (
                            <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>
                              {errors.service}
                            </Typography>
                          )}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          name="description"
                          label="Project Description"
                          fullWidth
                          margin="normal"
                          multiline
                          rows={4}
                          placeholder="Describe your project, site location, goals, timeline, and any special requirements for your selected service(s)..."
                          error={touched.description && Boolean(errors.description)}
                          helperText={touched.description && errors.description}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          name="document_link"
                          label="Document Link (Google Drive, Dropbox, etc.)"
                          fullWidth
                          margin="normal"
                          placeholder="Paste a shareable link to your project document"
                          error={touched.document_link && Boolean(errors.document_link)}
                          helperText={touched.document_link && errors.document_link}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          startIcon={<SendIcon />}
                          sx={{ 
                            mt: 2, 
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: { xs: '0.9rem', md: '1rem' }
                          }}
                        >
                          Request Quote
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetQuote; 
