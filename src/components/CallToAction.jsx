import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import colors from '../theme/colors';

export default function CallToAction() {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Paper
        sx={{
          p: { xs: 6, md: 10 },
          textAlign: 'center',
          color: '#fff',
          bgcolor: colors.primary,
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(5,70,237,0.4)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 50%, rgba(132,154,255,0.4), transparent)',
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" fontWeight={900} sx={{ mb: 2 }}>
            Dil Öğrenme Serüveniniz Bugün Başlıyor
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              color: colors.primaryContainer,
              opacity: 0.9,
              mb: 4,
              maxWidth: 680,
              mx: 'auto',
            }}
          >
            Dünyanın en gelişmiş dil platformuna bugün ücretsiz olarak katılın
            ve ilk dersinizi tamamlayın.
          </Typography>
          <Button
            size="large"
            sx={{
              bgcolor: '#fff',
              color: colors.primary,
              px: 6,
              py: 2.5,
              fontWeight: 900,
              borderRadius: 3,
              boxShadow: 6,
              '&:hover': { bgcolor: '#f7f7ff' },
            }}
          >
            Şimdi Kaydol
          </Button>
          <Typography
            variant="caption"
            sx={{ display: 'block', mt: 3, opacity: 0.7 }}
          >
            Kredi kartı gerekmez. İptal etmek kolaydır.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
