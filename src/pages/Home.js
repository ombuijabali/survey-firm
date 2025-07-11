import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  Map as MapIcon,
  SatelliteAlt as SatelliteAltIcon,
  Code as CodeIcon,
  CheckCircleOutline as CheckIcon,
  PeopleAlt as PeopleIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Land Surveying',
      description: 'Our Land Surveying services provide comprehensive spatial analysis and mapping solutions. We use advanced GIS technology to create accurate and visually compelling maps, enhancing decision-making across various industries.',
      icon: <MapIcon sx={{ color: '#1976d2', fontSize: 48 }} />,
    },
    {
      title: 'Title Deed Processing',
      description: 'We offer comprehensive title deed processing services, assisting clients with land registration, property ownership transfer, legal documentation, and liaison with authorities to ensure a smooth and secure process.',
      icon: <SatelliteAltIcon sx={{ color: '#2e7d32', fontSize: 48 }} />,
    },
    {
      title: 'Lidar & Aerial Mapping',
      description: 'Our Lidar & Aerial Mapping services provide high-resolution data collection and advanced mapping solutions using drone and Lidar technology. Ideal for surveying, construction monitoring, and environmental analysis.',
      icon: <CodeIcon sx={{ color: '#6a1b9a', fontSize: 48 }} />,
    },
  ];

  const benefits = [
    {
      title: 'Unmatched Accuracy',
      description: 'We deliver survey-grade accuracy using state-of-the-art equipment and methodologies, ensuring your projects are built on reliable data.',
      icon: <CheckIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    },
    {
      title: 'Experienced Team',
      description: 'Our team consists of certified professionals with decades of combined experience in geospatial sciences and project management.',
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    },
    {
      title: 'Efficient & Reliable',
      description: 'We pride ourselves on completing projects on time and within budget, fostering long-term partnerships built on trust and reliability.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={(theme) => ({
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/hero3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -2,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.palette.primary.main,
            opacity: 0.5,
            zIndex: -1,
          }
        })}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Professional Surveying & Mapping Solutions
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 500,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            ~Clear steps~
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={scrollToContact}
            sx={{
              px: 4,
              py: 2,
              fontSize: '1.2rem',
            }}
          >
            Get a Quote
          </Button>
        </Container>
      </Box>

      {/* Services Preview Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Our Services
          </Typography>
        </Box>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}>
          {services.map((service) => (
              <Card key={service.title} sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  }
              }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 0 }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'primary.dark' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {service.description}
                  </Typography>
                </CardContent>
                            <Button component={RouterLink} to="/services" color="primary" sx={{ mt: 3, fontWeight: 500, textTransform: 'none', fontSize: '1rem' }}>
                Learn More
            </Button>
              </Card>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button variant="contained" color="secondary" component={RouterLink} to="/services" size="large">
                Explore All Services
            </Button>
        </Box>
      </Container>

      {/* About Preview Section */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
           <Box sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 8,
            alignItems: 'center',
          }}>
            <Box>
              <Box
                component="img"
                src="/images/flight.jpg"
                alt="About us"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: (theme) => theme.shadows[10],
                }}
              />
            </Box>
            <Box>
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
                About Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8, color: 'grey.300' }}>
                Geo-Shamba Surveys is a Kenya-based geospatial consultancy firm, dedicated to providing top-tier land survey services to clients worldwide. Our team of experts combines cutting-edge technology with innovative methodologies to deliver solutions that are accurate, reliable, and tailored to meet your unique needs.
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={RouterLink}
                to="/about"
                sx={{ px: 4, py: 1.5 }}
              >
                Read More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Why Choose Us?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', margin: 'auto' }}>
            We combine technology, expertise, and a client-first approach to deliver exceptional results every time.
          </Typography>
        </Box>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
        }}>
          {benefits.map((benefit) => (
            <Card key={benefit.title} sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                borderRadius: 3,
            }}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  {benefit.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" sx={{ mb: 3, fontWeight: 700 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 4, color: 'grey.300' }}>
            Contact us today for a free consultation and quote
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/get-quote"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                mr: 2,
                mb: 2,
              }}
            >
              Get a Quote
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.2rem',
                mb: 2,
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 