import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  Paper,
  Link,
  ListItemIcon,
  Collapse,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  Map as MapIcon,
  LocationOn as LocationIcon,
  Flight as DroneIcon,
  Web as WebIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const services = [
  { name: 'Land Surveying', icon: <LocationIcon />, description: 'Accurate land and boundary surveys.', path: '/services/land-surveying' },
  { name: 'Sub-divisions Mutations', icon: <AssessmentIcon />, description: 'Land sub-division and mutation services.', path: '/services/subdivisions-mutations' },
  { name: 'Beaconing/Boundary Delimitation', icon: <MapIcon />, description: 'Precise beaconing and boundary marking.', path: '/services/beaconing-boundary-delimitation' },
  { name: 'Cadastral Mapping', icon: <MapIcon />, description: 'Cadastral mapping for property and legal needs.', path: '/services/cadastral-mapping' },
  { name: 'Topographical Mapping', icon: <MapIcon />, description: 'Detailed topographical mapping services.', path: '/services/topographical-mapping' },
  { name: 'Title Deed Processing', icon: <WebIcon />, description: 'Title deed processing and documentation.', path: '/services/title-deed-processing' },
  { name: 'Lidar & Aerial Mapping', icon: <DroneIcon />, description: 'Lidar and drone-based aerial mapping.', path: '/services/lidar-aerial-mapping' },
];

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleServicesMenuToggle = (isOpen) => {
    setServicesMenuOpen(isOpen);
  };

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  // Group services for dropdown
  const leftColumn = services.slice(0, 4);
  const rightColumn = services.slice(4, 7);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Survey Co.
      </Typography>
      <List>
        {navItems.map((item) => (
          item.name === 'Services' ? (
            <React.Fragment key="services-mobile">
              <ListItem button onClick={handleMobileServicesToggle}>
                <ListItemText primary="Services" />
                {mobileServicesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </ListItem>
              <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {services.map((service) => (
                    <ListItem button component={RouterLink} to={service.path} sx={{ pl: 4 }}>
                      <ListItemIcon>
                        {service.icon}
                      </ListItemIcon>
                      <ListItemText primary={service.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
          <ListItem key={item.name} component={RouterLink} to={item.path}>
            <ListItemText primary={item.name} />
          </ListItem>
          )
        ))}
        <ListItem>
          <Button variant="contained" color="secondary" fullWidth component={RouterLink} to="/get-quote">
            Get a Quote
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, position: 'sticky', top: 0, zIndex: 1100 }}>
        {/* Top Bar */}
        <Collapse in={!scrolled && !isMobile}>
          <AppBar position="static" sx={{ backgroundColor: 'primary.main', py: 0.5 }}>
            <Container maxWidth="xl">
              <Toolbar variant="dense" disableGutters>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>
                    Follow Geo-Shamba Surveys on our social media pages.
                  </Typography>
                </Box>
                <Box>
                  <IconButton size="small" sx={{ color: 'primary.contrastText' }}><FacebookIcon fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ color: 'primary.contrastText' }}><TwitterIcon fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ color: 'primary.contrastText' }}><LinkedInIcon fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ color: 'primary.contrastText' }}><InstagramIcon fontSize="small" /></IconButton>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Collapse>

        {/* Main Navbar */}
        <AppBar 
          position="static" 
          elevation={scrolled ? 4 : 0} 
          sx={{ 
            backgroundColor: scrolled ? 'background.default' : 'rgb(255, 255, 255)',
            color: scrolled ? 'text.primary' : 'darkgreen',
            transition: 'all 0.3s ease-in-out',
            top: 0
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ minHeight: { md: 80 } }}>
              {/* Logo */}
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                <Link component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <img src="/images/logo.png" alt="GeoShambaSurveys Company Logo" style={{ height: 100, marginRight: 12 }} />
                  <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'inherit', display: { xs: 'none', sm: 'block' } }}>
                  
                  </Typography>
                </Link>
              </Box>

              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <Box 
                      key={item.name}
                      onMouseEnter={() => item.name === 'Services' && handleServicesMenuToggle(true)}
                      onMouseLeave={() => item.name === 'Services' && handleServicesMenuToggle(false)}
                    >
                      <Button
                        color="inherit"
                        component={RouterLink}
                        to={item.path}
                        endIcon={item.name === 'Services' && <KeyboardArrowDownIcon />}
                        sx={{ mx: 2, fontWeight: 500 }}
                      >
                        {item.name}
                      </Button>
                      {item.name === 'Services' && (
                        <Paper 
                          sx={{ 
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '800px',
                            p: 4,
                            mt: 1,
                            visibility: servicesMenuOpen ? 'visible' : 'hidden',
                            opacity: servicesMenuOpen ? 1 : 0,
                            transition: 'opacity 0.3s ease, visibility 0.3s ease',
                            borderTop: `3px solid ${theme.palette.primary.main}`,
                            boxShadow: theme.shadows[5]
                          }}
                        >
                          <Typography variant="h6" gutterBottom>Our Services</Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              {leftColumn.map((service) => (
                                <Link key={service.name} component={RouterLink} to={service.path} sx={{textDecoration: 'none'}}>
                                  <Box sx={{display: 'flex', alignItems: 'center', p:1, '&:hover': {backgroundColor: 'action.hover', borderRadius: 1}}}>
                                    <ListItemIcon sx={{color: 'primary.main', minWidth: 40}}>{service.icon}</ListItemIcon>
                                    <Box>
                                      <Typography variant="subtitle1" sx={{fontWeight: 600, color: 'text.primary'}}>{service.name}</Typography>
                                      <Typography variant="body2" color="text.secondary">{service.description}</Typography>
                                    </Box>
                                  </Box>
                                </Link>
                              ))}
                            </Grid>
                            <Grid item xs={6} sx={{display: 'flex', flexDirection: 'column'}}>
                              {rightColumn.map((service) => (
                                <Link key={service.name} component={RouterLink} to={service.path} sx={{textDecoration: 'none'}}>
                                  <Box sx={{display: 'flex', alignItems: 'center', p:1, '&:hover': {backgroundColor: 'action.hover', borderRadius: 1}}}>
                                    <ListItemIcon sx={{color: 'primary.main', minWidth: 40}}>{service.icon}</ListItemIcon>
                                    <Box>
                                      <Typography variant="subtitle1" sx={{fontWeight: 600, color: 'text.primary'}}>{service.name}</Typography>
                                      <Typography variant="body2" color="text.secondary">{service.description}</Typography>
                                    </Box>
                                  </Box>
                                </Link>
                              ))}
                            </Grid>
                            {/* CTA full width below, centered */}
                            <Grid item xs={12} sx={{mt: 3, display: 'flex', justifyContent: 'center'}}>
                              <Box sx={{backgroundColor: 'primary.main', color: 'white', p: 3, borderRadius: 2, minWidth: 320, maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <Typography variant="h6" sx={{fontWeight: 600, textAlign: 'center'}}>Not sure what you need?</Typography>
                                <Typography variant="body2" sx={{my: 2, textAlign: 'center'}}>Let our experts guide you to the right solution.</Typography>
                                <Button component={RouterLink} to="/contact" variant="contained" sx={{backgroundColor: 'white', color: 'primary.main', '&:hover': {backgroundColor: 'grey.200'}}}>Contact Us</Button>
                              </Box>
                            </Grid>
                          </Grid>
                        </Paper>
                      )}
                    </Box>
                  ))}
                </Box>
              )}

              {/* CTA and Mobile Menu */}
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                {!isMobile && (
                  <Button variant="contained" color="secondary" component={RouterLink} to="/get-quote" endIcon={<ArrowForwardIcon />}>
                    Get a Quote
                  </Button>
                )}
                {isMobile && (
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>

            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 