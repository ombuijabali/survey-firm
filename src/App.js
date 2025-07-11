import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import Footer from './components/Footer';
import LandSurveying from './pages/services/LandSurveying';
import SubdivisionsMutations from './pages/services/SubdivisionsMutations';
import BeaconingBoundaryDelimitation from './pages/services/BeaconingBoundaryDelimitation';
import CadastralMapping from './pages/services/CadastralMapping';
import TopographicalMapping from './pages/services/TopographicalMapping';
import TitleDeedProcessing from './pages/services/TitleDeedProcessing';
import LidarAerialMapping from './pages/services/LidarAerialMapping';
import SuccessionOfLand from './pages/services/SuccessionOfLand';
import LandSearches from './pages/services/LandSearches';
import BoundariesDetermination from './pages/services/BoundariesDetermination';
import LandTransfersSubdivisions from './pages/services/LandTransfersSubdivisions';
import GeoreferencingNavigations from './pages/services/GeoreferencingNavigations';
import RTKSurveys from './pages/services/RTKSurveys';
import Cartography from './pages/services/Cartography';

// Create a custom theme with survey industry colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#092E27',
      light: '#3A5A52',
      dark: '#001F1A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0D1A4F', // dark blue
      light: '#3A4B8A', // lighter blue
      dark: '#07103A', // even darker blue
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#092E27',
      secondary: '#546E7A',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    body1: {
      textAlign: 'justify',
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
        containedSecondary: {
            color: 'white',
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

// Custom hook to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/land-surveying" element={<LandSurveying />} />
            <Route path="/services/subdivisions-mutations" element={<SubdivisionsMutations />} />
            <Route path="/services/beaconing-boundary-delimitation" element={<BeaconingBoundaryDelimitation />} />
            <Route path="/services/cadastral-mapping" element={<CadastralMapping />} />
            <Route path="/services/topographical-mapping" element={<TopographicalMapping />} />
            <Route path="/services/title-deed-processing" element={<TitleDeedProcessing />} />
            <Route path="/services/lidar-aerial-mapping" element={<LidarAerialMapping />} />
            <Route path="/services/succession-of-land" element={<SuccessionOfLand />} />
            <Route path="/services/land-searches" element={<LandSearches />} />
            <Route path="/services/boundaries-determination" element={<BoundariesDetermination />} />
            <Route path="/services/land-transfers-subdivisions" element={<LandTransfersSubdivisions />} />
            <Route path="/services/georeferencing-navigations" element={<GeoreferencingNavigations />} />
            <Route path="/services/rtk-surveys" element={<RTKSurveys />} />
            <Route path="/services/cartography" element={<Cartography />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
