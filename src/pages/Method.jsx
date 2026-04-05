import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import QuizIcon from '@mui/icons-material/Quiz';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TimelineIcon from '@mui/icons-material/Timeline';
import colors from '../theme/colors';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MODULES = [
  {
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 28 }} />,
    title: 'Öğretmen Paneli',
    description:
      'Öğretmenler soru, ödev, çalışma kağıdı ve konu başlıkları yükleyebilir; öğrenci ilerlemesini takip edebilir.',
    color: colors.primary,
    bg: '#f2efff',
  },
  {
    icon: <PersonIcon sx={{ fontSize: 28 }} />,
    title: 'Öğrenci Paneli',
    description:
      'Öğrenciler kendilerine tanımlanan içerikleri görüntüleyebilir, ödevlere erişebilir ve çalışma geçmişini takip edebilir.',
    color: colors.tertiary,
    bg: '#e8faf4',
  },
  {
    icon: <ChatIcon sx={{ fontSize: 28 }} />,
    title: 'AI Sohbet Asistanı',
    description:
      'LLM API destekli metin tabanlı asistan ile öğrenci anlık sorular sorabilir, konu anlatımı ve alıştırma desteği alabilir.',
    color: colors.secondary,
    bg: '#fff8ec',
  },
  {
    icon: <AssignmentIcon sx={{ fontSize: 28 }} />,
    title: 'Ödev & Soru Yönetimi',
    description:
      'Öğretmen tarafından oluşturulan ödevler ve sorular düzenli şekilde listelenir, öğrenci kolayca erişir.',
    color: colors.primary,
    bg: '#f2efff',
  },
];

const AI_FEATURES = [
  {
    icon: <SpellcheckIcon />,
    title: 'Dil Bilgisi Desteği',
    description:
      'Tense, grammar yapıları ve cümle kurma konusunda anlık açıklamalar.',
  },
  {
    icon: <AutoStoriesIcon />,
    title: 'Kelime Bilgisi',
    description:
      'Kelime anlamları, eş anlamlılar ve örnek cümlelerle zengin kelime çalışması.',
  },
  {
    icon: <QuizIcon />,
    title: 'Kısa Alıştırmalar',
    description:
      'Konuya özel mini quiz ve boşluk doldurma egzersizleri ile pekiştirme.',
  },
  {
    icon: <TimelineIcon />,
    title: 'Kişisel İlerleme',
    description:
      'Öğrencinin seviyesine uyum sağlayan adaptif içerik önerileri.',
  },
];

const STEPS = [
  {
    step: '01',
    title: 'Öğretmen İçerik Yükler',
    description:
      'Konu başlıkları, ödevler ve çalışma kağıtları sisteme eklenir.',
  },
  {
    step: '02',
    title: 'Öğrenci Erişir',
    description:
      'Öğrenci panelinden atanan içerikler görüntülenir ve çalışılır.',
  },
  {
    step: '03',
    title: 'AI Asistana Sor',
    description:
      'Takıldığın konuyu yapay zeka asistanına sor, anlık açıklama al.',
  },
  {
    step: '04',
    title: 'Pratik Yap & İlerle',
    description:
      'Alıştırmalar çöz, geri bildirim al ve öğrenme sürecini hızlandır.',
  },
];

export default function Method() {
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
              <SmartToyIcon sx={{ fontSize: 32 }} />
            </Box>
            <Chip
              label="LLM Destekli"
              sx={{
                bgcolor: '#f2efff',
                color: colors.primary,
                fontWeight: 700,
                mb: 3,
              }}
            />
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 36, md: 56 },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Web Tabanlı{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryContainer})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                İngilizce Eğitim Asistanı
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 20 },
                color: colors.onSurfaceVariant,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              İlkokul ve ortaokul öğrencilerine yönelik, yapay zeka destekli
              kişisel İngilizce eğitim asistanı. Öğretmen kontrollü, öğrenci
              dostu, tek ders odaklı web çözümü.
            </Typography>
          </Container>
        </Box>

        {/* Problem & Solution */}
        <Box sx={{ bgcolor: '#f2efff', py: { xs: 8, md: 10 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    height: '100%',
                    bgcolor: '#fff',
                    border: `2px solid ${colors.outlineVariant}33`,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={800}
                    sx={{ mb: 2, color: '#c62828' }}
                  >
                    Problem
                  </Typography>
                  <Typography
                    sx={{ color: colors.onSurfaceVariant, lineHeight: 1.8 }}
                  >
                    Öğrenciler okul dışında bireysel çalışırken İngilizce
                    dersinde anlık geri bildirim alma, anlamadıkları konuyu
                    tekrar ettirme ve ödevlere düzenli erişme konusunda
                    zorlanmaktadır. Öğretmenler ödev paylaşımını dağınık
                    platformlar üzerinden yapmakta, öğrenciler ise aynı yerde
                    hem konu desteği hem ödev takibi bulamamaktadır. Bu durum
                    öğrenme sürekliliğini azaltmakta ve motivasyonu
                    düşürmektedir.
                  </Typography>
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    height: '100%',
                    bgcolor: '#fff',
                    border: `2px solid ${colors.primary}33`,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={800}
                    sx={{ mb: 2, color: colors.primary }}
                  >
                    Çözümümüz
                  </Typography>
                  <Typography
                    sx={{ color: colors.onSurfaceVariant, lineHeight: 1.8 }}
                  >
                    Web tabanlı bir AI Destekli İngilizce Eğitim Asistanı.
                    Öğretmenler soru, ödev ve çalışma kağıdı yükleyebilir;
                    öğrenciler içerikleri görüntüleyebilir. Metin tabanlı yapay
                    zeka asistanı sayesinde öğrenci; kelime, dil bilgisi, cümle
                    kurma ve alıştırma konusunda anlık destek alabilir. Tek ders
                    odaklı, sade ve öğretmen kontrollü bir platform.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* How It Works */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
              Nasıl Çalışır?
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
          <Grid container spacing={3}>
            {STEPS.map((item) => (
              <Grid key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: 48,
                      fontWeight: 900,
                      color: `${colors.primary}22`,
                      lineHeight: 1,
                      mb: 2,
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: colors.onSurfaceVariant, lineHeight: 1.6 }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* System Modules */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
              Sistem Modülleri
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
            {MODULES.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
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
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ color: colors.onSurfaceVariant, lineHeight: 1.7 }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* AI Features */}
        <Box sx={{ bgcolor: '#f2efff', py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                AI Asistan Yetenekleri
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
            <Grid container spacing={3}>
              {AI_FEATURES.map((item) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: '#fff',
                      height: '100%',
                      textAlign: 'center',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: `${colors.primary}1A`,
                        color: colors.primary,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography fontWeight={800} sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: colors.onSurfaceVariant, lineHeight: 1.6 }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Target Audience */}
        <Container
          maxWidth="md"
          sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}
        >
          <Typography variant="h4" fontWeight={800} sx={{ mb: 4 }}>
            Hedef Kitle
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
          >
            {[
              { icon: <SchoolIcon />, label: 'İlkokul & Ortaokul Öğrencileri' },
              {
                icon: <AdminPanelSettingsIcon />,
                label: 'İngilizce Öğretmenleri',
              },
              { icon: <SmartToyIcon />, label: 'Okul Yönetimi' },
            ].map((item) => (
              <Paper
                key={item.label}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: '#f2efff',
                  border: `1px solid ${colors.outlineVariant}33`,
                  flex: 1,
                  textAlign: 'center',
                }}
              >
                <Box sx={{ color: colors.primary, mb: 1 }}>{item.icon}</Box>
                <Typography fontWeight={700} variant="body2">
                  {item.label}
                </Typography>
              </Paper>
            ))}
          </Stack>
          <Typography
            sx={{
              mt: 4,
              color: colors.onSurfaceVariant,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Paydaş Kurum: BİLSEM
          </Typography>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
