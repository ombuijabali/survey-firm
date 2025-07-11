import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const projects = [
  {
    title: 'Subdivision Survey',
    image: '/images/work.jpg',
    description: 'Boundary & property surveys for legal documentation and land registration.'
  },
  {
    title: 'Topographic Mapping',
    image: '/images/wk.jpg',
    description: 'Detailed topographic mapping for farming planning and design.'
  },
];

const OurWork = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="h1" sx={{ mb: 3, fontWeight: 700 }}>
          Our Work
        </Typography>
        <Typography variant="h5" color="white" sx={{ maxWidth: 800, mx: 'auto' }}>
          Explore some of our recent projects and see the quality of our surveying and mapping solutions
        </Typography>
      </Box>
      <Grid container spacing={6}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
          Want to see more?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Contact us for a full portfolio or to discuss your project needs
        </Typography>
        <Box>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/contact"
            sx={{
              display: 'inline-block',
              px: 4,
              py: 2,
              backgroundColor: 'primary.main',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 2,
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default OurWork; 