import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const images = [
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/plan.jpg',
  '/images/plan38.jpg',
];

const IMAGE_CHANGE_INTERVAL = 3500;

const TopographicalMapping = () => {
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
            Topographical Mapping
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Custom map design and visualization for your needs.
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
              alt={`Cartography ${current + 1}`}
              style={{ width: '100%', borderRadius: 8, marginBottom: 24, maxHeight: 340, objectFit: 'cover' }}
            />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Topographical Mapping Services
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We transform spatial data into beautiful, informative maps for reports, presentations, and publications. Our cartography services include custom map design, data visualization, and thematic cartography.
            </Typography>
            <Typography variant="body1">
              We specialize in interactive maps, print-ready maps, and map styling for a variety of applications. Let us bring your data to life.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopographicalMapping; 