import React from 'react';
import {
  Container,
  Typography,
  Card,
  Box,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  Map as MapIcon,
  LocationOn as LocationIcon,
  Flight as DroneIcon,
  Web as WebIcon,
  Assessment as AssessmentIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

const Services = () => {
  const services = [
    {
      id: 'land-surveying',
      title: 'Land Surveying',
      icon: <LocationIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Comprehensive land and boundary surveys for all property types.',
      features: [
        'Boundary surveys',
        'Topographic surveys',
        'Construction staking',
        'Subdivision surveys',
        'Legal documentation',
      ],
      longDescription: 'We provide professional land surveying services using advanced equipment for precise boundary, topographic, and construction surveys. Our team ensures legal compliance and reliable results for every project.',
    },
    {
      id: 'subdivisions-mutations',
      title: 'Sub-divisions Mutations',
      icon: <AssessmentIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Expert handling of land sub-division and mutation processes.',
      features: [
        'Subdivision planning',
        'Mutation applications',
        'Survey plan preparation',
        'Liaison with authorities',
        'Regulatory compliance',
      ],
      longDescription: 'Our team manages all aspects of land sub-division and mutation, from planning and documentation to approvals and technical surveys, ensuring a seamless process.',
    },
    {
      id: 'beaconing-boundary-delimitation',
      title: 'Beaconing/Boundary Delimitation',
      icon: <MapIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Precise beaconing and boundary marking for property security.',
      features: [
        'Beacon placement',
        'Legal boundary surveys',
        'Boundary reports',
        'Durable markers',
        'Survey documentation',
      ],
      longDescription: 'We offer accurate beaconing and boundary delimitation services to ensure your property boundaries are clearly marked and legally recognized.',
    },
    {
      id: 'cadastral-mapping',
      title: 'Cadastral Mapping',
      icon: <MapIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Cadastral mapping for property and legal needs.',
      features: [
        'Parcel mapping',
        'Land registration maps',
        'Legal boundary definition',
        'GIS data creation',
        'Survey plan integration',
      ],
      longDescription: 'Our cadastral mapping services support property registration, legal documentation, and land management with precise, up-to-date maps.',
    },
    {
      id: 'topographical-mapping',
      title: 'Topographical Mapping',
      icon: <MapIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Detailed topographical mapping for planning and design.',
      features: [
        'Contour mapping',
        'Elevation models',
        '3D terrain analysis',
        'Site planning maps',
        'GIS integration',
      ],
      longDescription: 'We deliver high-accuracy topographical maps for engineering, construction, and environmental projects, using the latest survey and GIS technology.',
    },
    {
      id: 'title-deed-processing',
      title: 'Title Deed Processing',
      icon: <WebIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Title deed processing and documentation services.',
      features: [
        'Title search',
        'Deed preparation',
        'Transfer documentation',
        'Legal compliance',
        'Liaison with registries',
      ],
      longDescription: 'We assist clients in processing and securing title deeds, handling all documentation and legal requirements for property ownership transfer.',
    },
    {
      id: 'lidar-aerial-mapping',
      title: 'Lidar & Aerial Mapping',
      icon: <DroneIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Lidar and drone-based aerial mapping for advanced data collection.',
      features: [
        'Lidar surveys',
        'Aerial imagery',
        '3D modeling',
        'Orthomosaic maps',
        'Volume calculations',
      ],
      longDescription: 'Our lidar and aerial mapping services use drones and advanced sensors to deliver high-resolution data for surveying, construction, and environmental monitoring.',
    },
    {
      id: 'succession-of-land',
      title: 'Succession of Land Process',
      icon: <AssessmentIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Guidance through the legal and administrative process of land succession.',
      features: [
        'Succession planning',
        'Legal documentation',
        'Liaison with authorities',
        'Technical surveys',
        'Title transfer',
      ],
      longDescription: 'We guide you through the succession of land process, ensuring all legal, administrative, and technical requirements are met for a smooth transfer of ownership.',
    },
    {
      id: 'land-searches',
      title: 'Land Searches',
      icon: <AssessmentIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Comprehensive land search and verification services.',
      features: [
        'Registry searches',
        'Title verification',
        'Encumbrance checks',
        'Due diligence',
        'Ownership confirmation',
      ],
      longDescription: 'We conduct thorough land searches to verify property ownership, check for encumbrances, and ensure compliance with legal requirements.',
    },
    {
      id: 'boundaries-determination',
      title: 'Boundaries Determination',
      icon: <MapIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Accurate determination and demarcation of property boundaries.',
      features: [
        'Boundary surveys',
        'Beacon placement',
        'Legal documentation',
        'Dispute resolution',
        'Survey reports',
      ],
      longDescription: 'We offer expert boundary determination services to resolve disputes, clarify property lines, and ensure legal compliance.',
    },
    {
      id: 'land-transfers-subdivisions',
      title: 'Land Transfers & Sub-divisions',
      icon: <AssessmentIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Professional handling of land transfer and sub-division processes.',
      features: [
        'Transfer documentation',
        'Subdivision planning',
        'Survey plan preparation',
        'Liaison with authorities',
        'Title updates',
      ],
      longDescription: 'We manage the entire process of land transfers and sub-divisions, from initial application to final registration, ensuring compliance with all legal and technical requirements.',
    },
    {
      id: 'georeferencing-navigations',
      title: 'Georeferencing & Navigations',
      icon: <MapIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Georeferencing and navigation solutions for mapping and planning.',
      features: [
        'GNSS data collection',
        'Map georeferencing',
        'Navigation planning',
        'GIS integration',
        'Field support',
      ],
      longDescription: 'We provide georeferencing and navigation services using the latest GNSS and GIS technologies for mapping, surveying, and asset management.',
    },
    {
      id: 'rtk-surveys',
      title: 'RTK (Real Time Kinematics Surveys)',
      icon: <AssessmentIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'High-precision RTK surveys for engineering and mapping.',
      features: [
        'RTK setup',
        'Field data collection',
        'High-precision mapping',
        'Reporting',
        'Construction support',
      ],
      longDescription: 'We offer Real Time Kinematics (RTK) surveys for centimeter-level accuracy in positioning and mapping, ideal for construction, engineering, and land development projects.',
    },
    {
      id: 'cartography',
      title: 'Cartography',
      icon: <MapIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      description: 'Professional map design and cartographic services.',
      features: [
        'Custom map design',
        'Thematic mapping',
        'Cartographic consulting',
        'GIS data visualization',
        'Educational maps',
      ],
      longDescription: 'We create visually compelling and accurate maps for a variety of applications, including urban planning, environmental management, and education.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h1" sx={{ mb: 3, fontWeight: 700 }}>
          Our Services
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Comprehensive surveying and mapping solutions tailored to your specific needs
        </Typography>
      </Box>

      {/* Services Grid */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr 1fr',
        },
        gap: 6,
      }}>
        {services.map((service, index) => (
          <Card
            key={service.id}
            id={service.id}
            sx={{
              p: 4,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
              },
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              {service.icon}
              <Typography variant="h4" sx={{ mt: 2, fontWeight: 600 }}>
                {service.title}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
              {service.description}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
              {service.longDescription}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {service.features.map((feature, featureIndex) => (
                <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'grey.100', borderRadius: 1, px: 1.5, py: 0.5, mb: 1 }}>
                  <CheckIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Card>
        ))}
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 8, p: 6, backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Contact us today to discuss your project requirements and get a customized quote
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/get-quote"
            sx={{ px: 6, py: 2, fontSize: '1.2rem' }}
          >
            Get a Quote
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Services; 