import Box from '@mui/material/Box';
import colors from '../theme/colors';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Box sx={{ bgcolor: colors.surface, color: colors.onSurface }}>
      <Navbar />
      <Box component="main" sx={{ pt: '96px' }}>
        <Hero />
        <Features />
        <Metrics />
        <CallToAction />
      </Box>
      <Footer />
    </Box>
  );
}
