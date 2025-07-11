import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';

const images = [
  '/images/rtk.jpg',
  '/images/base.jpg',
  '/images/tripod.jpg',
  '/images/logistics.jpg',
];

const IMAGE_CHANGE_INTERVAL = 3500;

const LandSurveying = () => {
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
        background: 'linear-gradient(rgba(9,46,39,0.7),rgba(9,46,39,0.7)), url(/images/hero3.jpg) center/cover',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mb: 6,
      }}>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Land Survey
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Accurate boundary, topographic, and construction surveys for every project.
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
                alt={`Land Survey ${current + 1}`}
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
              Professional Land Surveying
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: 15, md: 16 } }}>
              Our land surveying services provide precise measurements and mapping for property boundaries, construction, and development. We use advanced GPS and total station equipment to ensure accuracy and reliability for legal, engineering, and planning needs.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: 15, md: 16 } }}>
              <b>Our Land Surveying services include:</b>
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 20, marginBottom: 16 }}>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Boundary and property surveys</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Topographic and detail surveys</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Construction staking and layout</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Subdivision and consolidation surveys</Typography></li>
              <li><Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>Preparation of survey plans and reports</Typography></li>
            </ul>
            <Typography variant="body1" sx={{ fontSize: { xs: 15, md: 16 } }}>
              Trust our experienced team for accurate, reliable, and timely survey results for your next project.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandSurveying; 
