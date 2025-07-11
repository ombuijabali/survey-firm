import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';

const images = [
  '/images/plans.jpg',
  '/images/cadast.jpg',
  '/images/cadastral.jpg',
  '/images/plan.jpg',
];

const IMAGE_CHANGE_INTERVAL = 3500;

const Cartography = () => {
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
        background: 'linear-gradient(rgba(9,46,39,0.7),rgba(9,46,39,0.7)), url(/images/plans.jpg) center/cover',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mb: 6,
      }}>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Cartography
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Professional map design and cartographic visualization for all needs.
          </Typography>
          <Button variant="contained" color="secondary" component={RouterLink} to="/get-quote">Get a Quote</Button>
        </Container>
      </Box>
      {/* Content Section */}
      <Container maxWidth="xl">
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 2, md: 6 },
          alignItems: 'center',
        }}>
          <Box>
            <img
              src={images[current]}
              alt={`Cartography ${current + 1}`}
              style={{ width: '100%', borderRadius: 8, marginBottom: 24, maxHeight: 340, objectFit: 'cover' }}
            />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Cartography Services
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We create visually compelling and accurate maps for a variety of applications, including urban planning, environmental management, and education. Our cartographic expertise ensures your data is presented clearly and effectively.
            </Typography>
            <Typography variant="body1">
              Services include custom map design, thematic mapping, and cartographic consulting.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cartography; 
