import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const images = [
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/plan.jpg',
  '/images/plan38.jpg',
];

const IMAGE_CHANGE_INTERVAL = 3500;

const CadastralMapping = () => {
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
            Cadastral Mapping
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Comprehensive GIS and mapping solutions for every industry.
          </Typography>
          <Button variant="contained" color="secondary" href="/get-quote">Get a Quote</Button>
        </Container>
      </Box>
      {/* Content Section */}
      <Container maxWidth="xl" sx={{ mb: 8, px: { xs: 1, md: 2 } }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 2, md: 6 },
          alignItems: 'center',
        }}>
          <Box>
            <img
              src={images[current]}
              alt={`Mapping ${current + 1}`}
              style={{ width: '100%', borderRadius: 8, marginBottom: 24, maxHeight: 340, objectFit: 'cover' }}
            />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Cadastral Mapping Services
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We deliver detailed and visually compelling maps for urban planning, environmental management, and infrastructure development. Our team leverages the latest GIS technology to provide topographic, cadastral, and thematic mapping.
            </Typography>
            <Typography variant="body1">
              Services include GIS data creation, 3D terrain modeling, digital elevation models, and more. Let us help you visualize and manage your spatial data.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CadastralMapping; 