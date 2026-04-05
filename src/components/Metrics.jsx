import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import GroupsIcon from '@mui/icons-material/Groups';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import colors from '../theme/colors';

const METRICS = [
  {
    icon: <DoneAllIcon />,
    color: colors.tertiary,
    title: '3.5 Kat Daha Hızlı',
    description:
      'Geleneksel kurslara oranla akıcılığa ulaşma süreniz %350 oranında kısalır.',
  },
  {
    icon: <GroupsIcon />,
    color: colors.primary,
    title: '%94 Memnuniyet',
    description:
      'Öğrencilerimizin büyük çoğunluğu ilk 30 gün içinde somut ilerleme kaydediyor.',
  },
  {
    icon: <LanguageIcon />,
    color: colors.secondary,
    title: '45+ Dil Seçeneği',
    description:
      'En popüler Avrupa dillerinden, egzotik Uzak Doğu lehçelerine kadar geniş yelpaze.',
  },
];

export default function Metrics() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f2efff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }} sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                transform: 'rotate(-6deg) scale(1.1)',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                bgcolor: 'rgba(132,154,255,0.3)',
              }}
            />
            <Box
              component="img"
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNOmbgbFbtP7K91i2p_BoZdk2qt7PzOygB2kHEiC2B_ByKryf9m_Mo8ZpiSNl69IVRxxSrxwCH8f6GR5tXp198dF1y7F20FFTzwSnwsS_tDCanzs93FE1uUpyBPC_tbhWdd5oh-oLptFifUCDEu7FmdRprZr7PKvjeSWSKgkbQL67pcg5p9Y7v2zeSZzt9eMODaUJJA5Lj2AqxNai3Gdrr3UB3qbZ2pfDwaotq_aG7A44gzvR6cRqUvHWFhzHRyPCZH3MyUVIHKBqx"
              sx={{
                position: 'relative',
                borderRadius: 2,
                boxShadow: 6,
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover',
              }}
            />
            <Card
              sx={{
                position: 'absolute',
                right: -32,
                bottom: -32,
                maxWidth: 320,
                borderRadius: 2,
                boxShadow: 8,
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={0.5} sx={{ mb: 1 }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} sx={{ color: colors.secondary }} />
                  ))}
                </Stack>
                <Typography
                  fontStyle="italic"
                  sx={{ color: colors.onSurface, fontWeight: 600, mb: 1.5 }}
                >
                  "Üç ayda İspanyolca konuşmaya başlayacağımı hayal bile
                  edemezdim. Metot gerçekten işe yarıyor."
                </Typography>
                <Typography variant="body2" fontWeight={800}>
                  — Selin Yılmaz, Berlin
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ pl: { lg: 4 } }}>
              <Typography
                variant="h4"
                fontWeight={900}
                sx={{ mb: 3, lineHeight: 1.2 }}
              >
                Hızlandırılmış <br />
                <Box component="span" sx={{ color: colors.primary }}>
                  Başarı Metrikleri
                </Box>
              </Typography>
              <Stack spacing={3}>
                {METRICS.map((metric) => (
                  <Stack key={metric.title} direction="row" spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: `${metric.color}1A`,
                        color: metric.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {metric.icon}
                    </Box>
                    <Box>
                      <Typography fontWeight={800}>{metric.title}</Typography>
                      <Typography sx={{ color: colors.onSurfaceVariant }}>
                        {metric.description}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
