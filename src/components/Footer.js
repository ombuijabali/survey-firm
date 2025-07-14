import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' },
    { name: 'Get a Quote', path: '/get-quote' },
  ];

  const partnerLogos = [
      { src: '/images/high.jpg', alt: 'Highlands Logo' },
      { src: '/images/afri.jpg', alt: 'AfriMaps Logo' },
  ]

  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', position: 'relative' }}>
       <IconButton 
        onClick={scrollToTop}
        sx={{
          position: 'absolute',
          top: -28,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'secondary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'secondary.dark'
          }
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <Container maxWidth="xl" sx={{ pt: 8, pb: 4 }}>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img src="/images/logo.png" alt="Survey Co Logo" style={{ height: 40, marginRight: 12, filter: 'brightness(0) invert(1)' }} />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Geo-Shamba Surveys
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: 'grey.400', maxWidth: '300px' }}>
              Your trusted partner for professional surveying and mapping solutions. We deliver accuracy and reliability with every project.
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: 'white' }}><FacebookIcon /></IconButton>
              <IconButton href="#" sx={{ color: 'white' }}><TwitterIcon /></IconButton>
              <IconButton href="#" sx={{ color: 'white' }}><LinkedInIcon /></IconButton>
              <IconButton href="#" sx={{ color: 'white' }}><InstagramIcon /></IconButton>
            </Box>
          </Grid>

          {/* Links */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            {companyLinks.map(link => (
              <Link key={link.name} component={RouterLink} to={link.path} color="inherit" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'secondary.main' } }}>{link.name}</Link>
            ))}
          </Grid>
          
          {/* Contact Info */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
             <Typography variant="body2" sx={{ mb: 1, color: 'grey.400' }}>
             61774-00200 Fedha Road<br/>Embakasi Nairobi<br/>Kenya
            </Typography>
             <Typography variant="body2" sx={{ mb: 1, color: 'grey.400' }}>
              geo.surveyor.vokeli@gmail.com
            </Typography>
             <Typography variant="body2" sx={{ mb: 1, color: 'grey.400' }}>
              (+254) 727 404 605/ 753 626 813
            </Typography>
          </Grid>

          {/* Our Partners */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, textAlign: 'center' }}>
              Our Partners
            </Typography>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                {partnerLogos.map((logo, index) => (
                    <Grid item key={index}>
                        <img src={logo.src} alt={logo.alt} style={{ height: '40px' }} />
                    </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: 1, borderColor: 'grey.800', mt: 6, pt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            © {new Date().getFullYear()} Geo-Shamba Surveys. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.500', ml: 'auto' }}>
            <Link href="https://construmgis.site" target="_blank" rel="noopener" color="inherit" underline="hover" sx={{ fontWeight: 500 }}>
              Developed by Construm Geosystems
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 