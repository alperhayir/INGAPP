import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import PublicIcon from '@mui/icons-material/Public';
import colors from '../theme/colors';

const FOOTER_LINKS = [
  'Kullanım Koşulları',
  'Gizlilik Politikası',
  'Çerez Tercihleri',
  'İletişim',
];

const SOCIAL_ICONS = [
  { icon: <ShareIcon fontSize="small" />, label: 'Share' },
  { icon: <PublicIcon fontSize="small" />, label: 'Website' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: '#f2efff', borderTop: '4px solid #f9f5ff' }}
    >
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid size={{ xs: 12, md: 'auto' }}>
            <Box sx={{ mb: { xs: 2, md: 0 } }}>
              <Typography
                variant="h6"
                fontWeight={800}
                sx={{ color: colors.onSurface, mb: 0.5 }}
              >
                The Fluid Polyglot
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: `${colors.onSurface}b3` }}
              >
                © 2024 The Fluid Polyglot. Tüm hakları saklıdır.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 'auto' }}>
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              flexWrap="wrap"
            >
              {FOOTER_LINKS.map((text) => (
                <Button
                  key={text}
                  color="inherit"
                  sx={{
                    textTransform: 'none',
                    fontSize: 14,
                    color: `${colors.onSurface}99`,
                    '&:hover': { color: colors.primary },
                    px: 0,
                  }}
                >
                  {text}
                </Button>
              ))}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 'auto' }}>
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: { xs: 2, md: 0 } }}
            >
              {SOCIAL_ICONS.map(({ icon, label }) => (
                <Box
                  key={label}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#e2dfff',
                    color: colors.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                  }}
                >
                  {icon}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
