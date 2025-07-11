import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  CheckCircle as CheckIcon,
  Person as PersonIcon,
  EmojiEvents as AwardIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

const aboutImages = [
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/plan.jpg',
  '/images/plan38.jpg',
];
const IMAGE_CHANGE_INTERVAL = 3500;

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutImages.length);
    }, IMAGE_CHANGE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      title: 'Accuracy',
      description: 'We maintain the highest standards of precision in all our surveying and mapping work.',
      icon: <CheckIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
    },
    {
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, dependable results on every project.',
      icon: <SecurityIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology to provide the most advanced surveying solutions.',
      icon: <SpeedIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work and client relationships.',
      icon: <AwardIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main' }} />,
    },
  ];

  const team = [
    {
      name: 'Joel Vokeli',
      position: 'CEO & Principal Surveyor',
      experience: '15+ years',
      avatar: <PersonIcon sx={{ fontSize: { xs: 50, md: 60 }, color: 'primary.main' }} />,
    },
    {
      name: 'Sarah',
      position: 'GIS Specialist',
      experience: '10+ years',
      avatar: <PersonIcon sx={{ fontSize: { xs: 50, md: 60 }, color: 'primary.main' }} />,
    },
    {
      name: 'Michael',
      position: 'Drone Pilot',
      experience: '8+ years',
      avatar: <PersonIcon sx={{ fontSize: { xs: 50, md: 60 }, color: 'primary.main' }} />,
    },
    {
      name: 'Emily',
      position: 'Cartographer',
      experience: '12+ years',
      avatar: <PersonIcon sx={{ fontSize: { xs: 50, md: 60 }, color: 'primary.main' }} />,
    },
  ];

  const achievements = [
    'We are so efficient and effective',    
    'ISO 9001:2015 Quality Management certified',
    'Member of professional surveying associations',
    'We are mobile. We come to you',
    'Trusted by government and private sector clients',
    'Our prices are affordable',
    'We offer more related services such as land search, title deed verification',
    'We work within given timeliness',
  ];

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
            About Us
          </Typography>
          <Typography variant="h5" sx={{ 
            mb: 3,
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
          }}>
            Leading the way in professional surveying and mapping solutions
          </Typography>
          <Button variant="contained" color="secondary" component={RouterLink} to="/contact">Contact Us</Button>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="xl" sx={{ mb: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
        {/* Our Story Section */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 3, md: 6 },
          alignItems: 'center',
          mb: { xs: 4, md: 8 },
        }}>
          <Box sx={{ height: { md: '100%' }, display: 'flex', alignItems: 'stretch' }}>
            <img
              src={aboutImages[current]}
              alt={`About ${current + 1}`}
              style={{ 
                width: '100%', 
                borderRadius: 8, 
                maxHeight: '100%',
                height: '100%',
                objectFit: 'cover',
                minHeight: 250
              }}
            />
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              About us
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1.1rem' }, lineHeight: 1.7 }}>
              <b>Geo-Shamba Surveys</b> is a company fully integrated to offer services since its establishment in August 2022 and is well aimed at meeting the land surveying needs of various clients, with accuracy and satisfaction.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '0.9rem', md: '1.1rem' }, lineHeight: 1.7 }}>
              We employ the use of the latest land surveying equipment and RTK/GNSS receivers, the application of our vast experience in the use of survey application softwares, GIS softwares and Cartographic softwares.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, lineHeight: 1.7 }}>
              We are fully equipped with GIS technicians, Surveyors and Cartographers whose input makes us the most outstanding entity.
            </Typography>
          </Box>
        </Box>

        {/* Mission and Vision Section */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 3, md: 6 },
          alignItems: 'stretch',
          mb: { xs: 4, md: 8 },
        }}>
          <Card sx={{ p: { xs: 3, md: 4 }, boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'primary.main', fontSize: { xs: '1.25rem', md: '2rem' } }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, lineHeight: 1.6 }}>
              To provide all round surveying inputs and solution in a simpler way
            </Typography>
          </Card>
          <Card sx={{ p: { xs: 3, md: 4 }, boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'primary.main', fontSize: { xs: '1.25rem', md: '2rem' } }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, lineHeight: 1.6 }}>
              To be a honest partner in geospatial steps
            </Typography>
          </Card>
        </Box>

        {/* Core Values Section */}
        <Box sx={{ width: '100vw', position: 'relative', left: '50%', right: '50%', ml: '-50vw', mr: '-90vw', backgroundColor: 'primary.main', borderRadius: 0, mb: { xs: 4, md: 8 } }}>
          <Box sx={{ ml: { xs: 0, md: 10 }, mr: { xs: 0, md: 5 }, py: { xs: 2, md: 4 } }}>
            <Typography variant="h3" align="center" sx={{ mb: { xs: 3, md: 6 }, fontWeight: 600, fontSize: { xs: '1.75rem', md: '2.5rem' }, color: 'white' }}>
              Our Core Values
            </Typography>
            <Grid container spacing={{ xs: 2, md: 4 }}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <Card sx={{ height: '100%', textAlign: 'center', p: { xs: 2, md: 3 }, boxShadow: 3, backgroundColor: 'transparent', color: 'white' }}>
                    <Box sx={{ mb: 2 }}>
                      {React.cloneElement(value.icon, { sx: { ...value.icon.props.sx, color: 'white' } })}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' }, color: 'white' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' }, color: 'white' }}>
                      {value.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: { xs: 4, md: 8 }, ml: { xs: 0, md: 30 }, mr: { xs: 0, md: 30 } }}>
          <Typography variant="h3" align="center" sx={{ 
            mb: { xs: 3, md: 6 }, 
            fontWeight: 600,
            fontSize: { xs: '1.75rem', md: '2.5rem' }
          }}>
            Our Team
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" sx={{ 
            mb: { xs: 3, md: 6 },
            fontSize: { xs: '0.9rem', md: '1.25rem' }
          }}>
            Meet our experienced professionals dedicated to delivering exceptional results
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card sx={{ 
                  textAlign: 'center', 
                  p: { xs: 2, md: 3 }, 
                  boxShadow: 3 
                }}>
                  <Box sx={{ mb: 2 }}>
                    {member.avatar}
                  </Box>
                  <Typography variant="h6" sx={{ 
                    mb: 1, 
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', md: '1.25rem' }
                  }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="primary.main" sx={{ 
                    mb: 1, 
                    fontWeight: 500,
                    fontSize: { xs: '0.8rem', md: '0.875rem' }
                  }}>
                    {member.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    fontSize: { xs: '0.8rem', md: '0.875rem' }
                  }}>
                    {member.experience} experience
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Achievements Section */}
        <Box sx={{ 
          backgroundColor: 'grey.50', 
          p: { xs: 3, md: 6 }, 
          borderRadius: 2, 
          boxShadow: 3, 
          mb: { xs: 4, md: 8 }, 
          ml: { xs: 0, md: 10 }, 
          mr: { xs: 0, md: 10 } 
        }}>
          <Typography variant="h3" align="center" sx={{ 
            mb: { xs: 3, md: 4 }, 
            fontWeight: 600,
            fontSize: { xs: '1.75rem', md: '2.5rem' }
          }}>
            Why Choose Us
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
            <Grid item xs={12} lg={6}>
              <List>
                {achievements.slice(0, 5).map((achievement, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={achievement} 
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} lg={6}>
              <List>
                {achievements.slice(3).map((achievement, index) => (
                  <ListItem key={index + 3} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={achievement} 
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: { xs: '0.9rem', md: '1rem' }
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Call to Action - Full Width */}
      <Box sx={{ 
        backgroundColor: 'primary.main', 
        color: 'white', 
        py: { xs: 4, md: 8 }, 
        mt: { xs: 4, md: 8 },
        width: '100%',
        textAlign: 'center'
      }}>
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ 
            mb: 3, 
            fontWeight: 600, 
            color: 'white',
            fontSize: { xs: '1.75rem', md: '2.5rem' }
          }}>
            Ready to Work With Us?
          </Typography>
          <Typography variant="h6" sx={{ 
            mb: 4, 
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: '0.9rem', md: '1.25rem' }
          }}>
            Let's discuss your project and see how we can help you achieve your goals
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'center', 
            gap: { xs: 2, sm: 0 } 
          }}>
            <Button
              variant="contained"
              sx={{ 
                mr: { xs: 0, sm: 2 }, 
                px: 4, 
                py: 2, 
                backgroundColor: 'white', 
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
              component={RouterLink}
              to="/contact"
            >
              Contact Us
            </Button>
            <Button
              variant="outlined"
              sx={{ 
                px: 4, 
                py: 2, 
                borderColor: 'white', 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white'
                }
              }}
              component={RouterLink}
              to="/get-quote"
            >
              Get a Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 