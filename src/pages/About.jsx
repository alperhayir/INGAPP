import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import colors from '../theme/colors';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VALUES = [
  {
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    title: 'Sezgisel Öğrenme',
    description:
      'Kalıpları ezberlemek yerine, beynin doğal öğrenme mekanizmalarını harekete geçiren adaptif bir müfredat sunuyoruz.',
    color: colors.primary,
    bg: '#f2efff',
  },
  {
    icon: <Diversity3Icon sx={{ fontSize: 32 }} />,
    title: 'Kültürler Arası Bağ',
    description:
      'Dil sadece kelimeler değil, kültürdür. Dünyanın dört bir yanından insanlarla bağ kurmanızı sağlıyoruz.',
    color: colors.tertiary,
    bg: '#e8faf4',
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    title: 'Yapay Zeka Desteği',
    description:
      'İleri düzey yapay zeka teknolojimiz, öğrenme hızınıza ve tarzınıza uyum sağlayarak kişisel bir deneyim sunar.',
    color: colors.secondary,
    bg: '#fff8ec',
  },
];

const TEAM = [
  {
    name: 'Erdem Taha SOKULLU',
    role: 'Product Owner',
  },
  {
    name: 'Zeynep Gülbahar FERHATLAR',
    role: 'Scrum Master',
  },
  {
    name: 'Alper HAYIR',
    role: 'Geliştirme Takımı',
  },
  {
    name: 'Enes Taha KILINÇ',
    role: 'Geliştirme Takımı',
  },
  {
    name: 'Emirhan GÖREN',
    role: 'Geliştirme Takımı',
  },
];

const STATS = [
  { value: '5', label: 'Ekip Üyesi' },
  { value: 'Agile', label: 'Çalışma Metodu' },
  { value: 'AI', label: 'LLM Destekli' },
  { value: 'BİLSEM', label: 'Paydaş Kurum' },
];

export default function About() {
  return (
    <Box sx={{ bgcolor: colors.surface, color: colors.onSurface }}>
      <Navbar />
      <Box component="main" sx={{ pt: '96px' }}>
        {/* Hero */}
        <Box sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
                bgcolor: '#f2efff',
                color: colors.primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3,
              }}
            >
              <SchoolIcon sx={{ fontSize: 32 }} />
            </Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 36, md: 56 },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              İngilizce Eğitimini{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryContainer})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Yapay Zeka ile Dönüştürüyoruz
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: colors.onSurfaceVariant,
                maxWidth: 640,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              ENGAPP olarak, LLM destekli web tabanlı bir İngilizce eğitim
              asistanı geliştiriyoruz. İlkokul ve ortaokul öğrencilerine
              yönelik, öğretmen kontrollü ve yapay zeka destekli bir platform.
            </Typography>
          </Container>
        </Box>

        {/* Stats */}
        <Box sx={{ bgcolor: '#f2efff', py: 6 }}>
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: `${colors.outlineVariant}4D` }}
                />
              }
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              {STATS.map((stat) => (
                <Box key={stat.label} sx={{ textAlign: 'center', px: 4 }}>
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ color: colors.primary }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.onSurfaceVariant,
                      fontWeight: 600,
                      mt: 0.5,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* Mission */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                alt="Misyonumuz"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNOmbgbFbtP7K91i2p_BoZdk2qt7PzOygB2kHEiC2B_ByKryf9m_Mo8ZpiSNl69IVRxxSrxwCH8f6GR5tXp198dF1y7F20FFTzwSnwsS_tDCanzs93FE1uUpyBPC_tbhWdd5oh-oLptFifUCDEu7FmdRprZr7PKvjeSWSKgkbQL67pcg5p9Y7v2zeSZzt9eMODaUJJA5Lj2AqxNai3Gdrr3UB3qbZ2pfDwaotq_aG7A44gzvR6cRqUvHWFhzHRyPCZH3MyUVIHKBqx"
                sx={{
                  width: '100%',
                  borderRadius: 3,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
                Misyonumuz
              </Typography>
              <Typography
                sx={{
                  color: colors.onSurfaceVariant,
                  lineHeight: 1.8,
                  fontSize: 16,
                  mb: 3,
                }}
              >
                Öğrencilerin okul dışında bireysel çalışırken İngilizce dersinde
                anlık geri bildirim almasını, anlamadıkları konuyu tekrar
                etmesini ve ödevlere düzenli erişmesini sağlamak. Öğretmenlerin
                ödev paylaşımını tek bir merkezden yönetmesine olanak tanıyoruz.
              </Typography>
              <Typography
                sx={{
                  color: colors.onSurfaceVariant,
                  lineHeight: 1.8,
                  fontSize: 16,
                }}
              >
                ENGAPP, Agile (Scrum) metodolojisiyle geliştirilen, BİLSEM
                paydaşlığında ilerleyen bir ekip projesidir. LLM API desteğiyle
                öğrencilere kelime, dil bilgisi ve cümle kurma konularında anlık
                yardım sunan bir web tabanlı İngilizce eğitim asistanı
                geliştiriyoruz.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* Values */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
              Değerlerimiz
            </Typography>
            <Box
              sx={{
                width: 96,
                height: 6,
                bgcolor: colors.primary,
                mx: 'auto',
                borderRadius: 999,
              }}
            />
          </Box>
          <Grid container spacing={4}>
            {VALUES.map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 3,
                    bgcolor: item.bg,
                    border: `1px solid ${colors.outlineVariant}33`,
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      bgcolor: `${item.color}1A`,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.onSurfaceVariant,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Team */}
        <Box sx={{ bgcolor: '#f2efff', py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                Ekibimiz
              </Typography>
              <Box
                sx={{
                  width: 96,
                  height: 6,
                  bgcolor: colors.primary,
                  mx: 'auto',
                  borderRadius: 999,
                }}
              />
            </Box>
            <Grid container spacing={4} justifyContent="center">
              {TEAM.map((member) => (
                <Grid key={member.name} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 3,
                      bgcolor: '#fff',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 96,
                        height: 96,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: colors.primaryContainer,
                        color: '#fff',
                        fontSize: 32,
                        fontWeight: 800,
                        border: `4px solid ${colors.primaryContainer}`,
                      }}
                    >
                      {member.name
                        .split(' ')
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join('')}
                    </Avatar>
                    <Typography variant="h6" fontWeight={800}>
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.primary,
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {member.role}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
