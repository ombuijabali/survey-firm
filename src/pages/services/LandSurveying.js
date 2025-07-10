import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const images = [
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/plan.jpg',
  '/images/plan38.jpg',
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
    <Box>
      {/* Hero Section */}
      <Box sx={{
        height: { xs: 300, md: 400 },
        background: 'linear-gradient(rgba(9,46,39,0.7),rgba(9,46,39,0.7)), url(/images/hero2.jpg) center/cover',
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
          <Button variant="contained" color="secondary" href="/get-quote">Get a Quote</Button>
        </Container>
      </Box>
      {/* Content Section */}
      <Container maxWidth="xl" sx={{ mb: 8, px: { xs: 1, md: 6 } }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 2, md: 6 },
          alignItems: 'center',
        }}>
          <Box>
            <img
              src={images[current]}
              alt={`Land Survey ${current + 1}`}
              style={{ width: '100%', borderRadius: 8, marginBottom: 24, maxHeight: 340, objectFit: 'cover' }}
            />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Professional Land Surveying
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our land surveying services provide precise measurements and mapping for property boundaries, construction, and development. We use advanced GPS and total station equipment to ensure accuracy and reliability for legal, engineering, and planning needs.
            </Typography>
            <Typography variant="body1">
              Services include boundary surveys, topographic surveys, construction staking, ALTA/NSPS surveys, and more. Trust our experienced team for your next project.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandSurveying; 