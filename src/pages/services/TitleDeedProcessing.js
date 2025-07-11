import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';

const images = [
  '/images/title.jpg',
  '/images/titlee.jpg',
  '/images/plan.jpg',
  '/images/plan38.jpg',
];

const IMAGE_CHANGE_INTERVAL = 3500;

const TitleDeedProcessing = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, IMAGE_CHANGE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ mb: 6 }}>
      {/* Hero Section */}
      <Box sx={{
        height: { xs: 300, md: 400 },
        background: 'linear-gradient(rgba(9,46,39,0.7),rgba(9,46,39,0.7)), url(/images/title.jpg) center/cover',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mb: 6,
      }}>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Title Deed Processing
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Modern web and GIS applications for spatial data management.
          </Typography>
          <Button variant="contained" color="secondary" component={RouterLink} to="/get-quote">Get a Quote</Button>
        </Container>
      </Box>
      {/* Content Section */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: 6 },
            alignItems: 'stretch',
            height: { xs: 'auto', md: 400 },
            minHeight: { xs: 200, md: 300 },
            pb: { xs: 2, md: 0 },
          }}
        >
          {/* Image Section */}
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'stretch', minHeight: { xs: 180, md: 'unset' }, mb: { xs: 2, md: 0 } }}>
            <Box
              sx={{
                width: '100%',
                height: { xs: 200, md: '100%' },
                backgroundColor: 'secondary.main',
                borderRadius: 2,
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={images[current]}
                alt={`Title Deed Processing ${current + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: 2,
                  display: 'block',
                  maxHeight: { xs: 220, md: '100%' },
                }}
              />
            </Box>
          </Box>
          {/* Content Section */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', py: { xs: 2, md: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, fontSize: { xs: 22, md: 28 } }}>
              Title Deed Processing Services
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: 15, md: 16 } }}>
              We offer efficient processing and documentation of title deeds, ensuring legal ownership and smooth property transactions. Our team manages all paperwork, verification, and liaison with authorities for a hassle-free experience.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: 15, md: 16 } }}>
              <b>Our Title Deed Processing services include:</b>
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20, marginBottom: 16 }}>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Title deed application and follow-up</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Verification of ownership and encumbrances</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Preparation and submission of legal documents</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Liaison with land offices and registries</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Final registration and delivery of title deeds</Typography></li>
            </ul>
            <Typography variant="body1" sx={{ fontSize: { xs: 15, md: 16 } }}>
              Trust us to handle your title deed processing with professionalism, accuracy, and transparency.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TitleDeedProcessing; 
