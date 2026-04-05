import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import colors from '../theme/colors';

const NAV_ITEMS = [
  { label: 'Dersler', to: null },
  { label: 'Metot', to: '/method' },
  { label: 'Topluluk', to: '/community' },
  { label: 'Hakkımızda', to: '/about' },
];

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        bgcolor: 'rgba(249,245,255,0.8)',
        color: colors.onSurface,
        backdropFilter: 'blur(12px)',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1120,
          mx: 'auto',
          width: '100%',
          px: { xs: 2, md: 4 },
          py: 2,
        }}
      >
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          fontWeight={800}
          sx={{ color: colors.primary, flexGrow: 1, textDecoration: 'none' }}
        >
          ENGAPP
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              {...(item.to ? { component: RouterLink, to: item.to } : {})}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
        <Button
          component={RouterLink}
          to="/login"
          variant="contained"
          sx={{
            ml: { xs: 2, md: 4 },
            px: 4,
            py: 1.25,
            borderRadius: 999,
            fontWeight: 800,
            bgcolor: colors.primary,
            boxShadow: '0 10px 25px rgba(5,70,237,0.2)',
            '&:hover': { bgcolor: '#003cd3' },
            textDecoration: 'none',
          }}
        >
          Giriş Yap
        </Button>
      </Toolbar>
      <Divider sx={{ bgcolor: '#f2efff' }} />
    </AppBar>
  );
}
