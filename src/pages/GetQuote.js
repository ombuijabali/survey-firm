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
});

const GetQuote = () => {
  const fileInputRef = useRef();

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
                  file: null,
                }}
                validationSchema={QuoteSchema}
                onSubmit={(values, { resetForm }) => {
                  alert('Thank you for your quote request! We will review your project and get back to you within 24 hours.');
                  resetForm();
                  if (fileInputRef.current) fileInputRef.current.value = '';
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
                        <Box sx={{ 
                          my: 2, 
                          p: 3, 
                          border: '2px dashed', 
                          borderColor: 'grey.300', 
                          borderRadius: 2,
                          textAlign: 'center',
                          backgroundColor: 'grey.50'
                        }}>
                          <input
                            ref={fileInputRef}
                            id="file"
                            name="file"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={event => setFieldValue('file', event.currentTarget.files[0])}
                          />
                          <label htmlFor="file">
                            <Button 
                              variant="outlined" 
                              component="span"
                              startIcon={<FileIcon />}
                              sx={{ mb: 2 }}
                            >
                              Upload Project Files
                            </Button>
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0]
                                  ? `Selected: ${fileInputRef.current.files[0].name}`
                                  : 'No file selected (optional)'}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                              </Typography>
                            </Box>
                          </label>
                        </Box>
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