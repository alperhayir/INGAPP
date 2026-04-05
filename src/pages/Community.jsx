import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ForumIcon from '@mui/icons-material/Forum';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import colors from '../theme/colors';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const COMMUNITY_STATS = [
  { icon: <GroupsIcon />, value: '12,000+', label: 'Aktif Üye' },
  { icon: <ForumIcon />, value: '850+', label: 'Günlük Mesaj' },
  {
    icon: <RecordVoiceOverIcon />,
    value: '120+',
    label: 'Pratik Odası / Hafta',
  },
  { icon: <EmojiEventsIcon />, value: '3,200+', label: 'Rozet Kazanıldı' },
];

const HIGHLIGHTS = [
  {
    title: 'Canlı Pratik Odaları',
    description:
      'Her gün farklı dillerde açılan sesli odalarda anadili konuşanlarla gerçek zamanlı pratik yapın.',
    icon: <RecordVoiceOverIcon sx={{ fontSize: 28 }} />,
    color: colors.primary,
    bg: '#f2efff',
    members: 48,
  },
  {
    title: 'Haftalık Yarışmalar',
    description:
      'Kelime bilgisi, dinleme ve gramer kategorilerindeki haftalık yarışmalarla öğrenmeyi eğlenceye dönüştürün.',
    icon: <EmojiEventsIcon sx={{ fontSize: 28 }} />,
    color: colors.secondary,
    bg: '#fff8ec',
    members: 124,
  },
  {
    title: 'Çalışma Grupları',
    description:
      'Aynı seviyedeki öğrencilerle küçük gruplar oluşturun, birlikte hedef belirleyin ve ilerlemenizi takip edin.',
    icon: <GroupsIcon sx={{ fontSize: 28 }} />,
    color: colors.tertiary,
    bg: '#e8faf4',
    members: 36,
  },
];

const EVENTS = [
  {
    title: 'İspanyolca Konuşma Kulübü',
    date: 'Her Salı, 20:00',
    level: 'B1-B2',
    participants: 32,
  },
  {
    title: 'Almanca Gramer Atölyesi',
    date: 'Her Çarşamba, 19:00',
    level: 'A2-B1',
    participants: 18,
  },
  {
    title: 'İngilizce Film Tartışması',
    date: 'Her Cuma, 21:00',
    level: 'B2-C1',
    participants: 45,
  },
  {
    title: 'Fransızca Başlangıç Sohbeti',
    date: 'Her Pazartesi, 18:30',
    level: 'A1-A2',
    participants: 22,
  },
];

const TESTIMONIALS = [
  {
    name: 'Mert Aydın',
    text: 'Pratik odalarında tanıştığım insanlarla artık gerçek arkadaşız. Dil öğrenmeyi sosyalleşerek yapmak harika.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3DLeBe6ATvCypd3TGPCSLG8PAgCHOWKOm3IZCKoACXskqYJEijdGJY0DhNQZzkvaIYl0FdWp8SB1aNE7bhEjQ8dU5_R10OhLXzIdjkBVgy1OrCUk_dYOEQS4FkU-CHcDKSPAk23U7u_Opk_4cJo0M85fhhRBRcYWglNCT8hVaxb586YMCsq6orIsboSScy_ewMWbfrfC-Mh7QL-xzs5BsOkbhhCbr721y-ct6vsW6WywOLB7MIJcaa0lfsgTdBPGbeLLlP86mO-wy',
  },
  {
    name: 'Zeynep Koç',
    text: 'Haftalık yarışmalar sayesinde motivasyonum hiç düşmedi. 3 aydır kesintisiz devam ediyorum!',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBiLRVTcO5NoSchmPZn1C_Hgmrjm3DspxaZP2-O5UWvkfhOqAWdiYdKczeBf8gPPeVJAjcMwFruAsIr71DLEtFgCkqu-d7GNHMmLQbm_er4eEh6Szqv8nOn--0_arwAJjXkK7oJz7ytzuzesQ1POoCWOGmXO_ZORTM5GUAzRCfM8OvVas2AW5sHbn51bDxQPjOU3J1awH0nDnCdyftZ81JcLPDfmZ_5xqcCV1swL2i018OupN8-yLo-2UOB6L6NUrFi0SVrygC5AOpS',
  },
  {
    name: 'Barış Kaya',
    text: 'Çalışma grubumuzla birlikte B2 seviyesine ulaştık. Birlikte öğrenmek her şeyi değiştiriyor.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTeqss3VUXk4A9ST71ofcyckVQrnJNEvo3HRuAhTPuLee4Z3qFnOq8FnVZzMRZhCk_JyQxqOLHL5-l6XP9A_mfG5zPpFEMqH0iGcJIIYLCsBVy44G6JyShmbzoHBO6Fek6oXINChe6dHXJmJxzwYuLkqERw1_9t73MGVg4CPZ4gKyJBv43unWisDlQEW8Ihukk4-EJ9nE3dj6kKmeDD4E868t76tVeIgp68YxVUgNA43adHnVrx1MpHVXvYYZck5cfcEJF_xcX2JEt',
  },
];

export default function Community() {
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
              <GroupsIcon sx={{ fontSize: 32 }} />
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
              Birlikte{' '}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryContainer})`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Öğreniyoruz
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
              12.000'den fazla dil tutkunu ile tanışın, pratik yapın ve birlikte
              büyüyün. Topluluğumuz öğrenmenin en keyifli hali.
            </Typography>
          </Container>
        </Box>

        {/* Stats */}
        <Box sx={{ bgcolor: '#f2efff', py: 6 }}>
          <Container maxWidth="lg">
            <Grid container spacing={3} justifyContent="center">
              {COMMUNITY_STATS.map((stat) => (
                <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        color: colors.primary,
                        mb: 1,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={800}>
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{ color: colors.onSurfaceVariant, fontWeight: 600 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Highlights */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
              Topluluk Özellikleri
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
            {HIGHLIGHTS.map((item) => (
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
                      mb: 2,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TrendingUpIcon
                      sx={{ fontSize: 16, color: colors.tertiary }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, color: colors.tertiary }}
                    >
                      {item.members} aktif katılımcı
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Upcoming Events */}
        <Box sx={{ bgcolor: '#f2efff', py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                Yaklaşan Etkinlikler
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
              {EVENTS.map((event) => (
                <Grid key={event.title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: '#fff',
                      height: '100%',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <CalendarMonthIcon
                        sx={{ fontSize: 18, color: colors.primary }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: colors.primary }}
                      >
                        {event.date}
                      </Typography>
                    </Stack>
                    <Typography fontWeight={800} sx={{ mb: 1 }}>
                      {event.title}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Chip
                        label={event.level}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: 12,
                          bgcolor: '#f2efff',
                          color: colors.primary,
                        }}
                      />
                      <Typography
                        variant="caption"
                        sx={{ color: colors.onSurfaceVariant, fontWeight: 600 }}
                      >
                        {event.participants} kişi
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Testimonials */}
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
              Üyelerimiz Ne Diyor?
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
            {TESTIMONIALS.map((t) => (
              <Grid key={t.name} size={{ xs: 12, md: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    height: '100%',
                    border: `1px solid ${colors.outlineVariant}33`,
                  }}
                >
                  <Typography
                    fontStyle="italic"
                    sx={{
                      color: colors.onSurfaceVariant,
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    "{t.text}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={t.avatar} sx={{ width: 40, height: 40 }} />
                    <Typography fontWeight={800} variant="body2">
                      {t.name}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CTA */}
        <Container maxWidth="sm" sx={{ pb: 12, textAlign: 'center' }}>
          <Paper
            sx={{
              p: { xs: 5, md: 8 },
              bgcolor: colors.primary,
              color: '#fff',
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 48px rgba(5,70,237,0.35)',
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
              <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
                Topluluğa Katılın
              </Typography>
              <Typography
                sx={{ color: colors.primaryContainer, opacity: 0.9, mb: 4 }}
              >
                Binlerce dil tutkunu sizi bekliyor. Hemen ücretsiz katılın!
              </Typography>
              <Button
                size="large"
                sx={{
                  bgcolor: '#fff',
                  color: colors.primary,
                  px: 5,
                  py: 2,
                  fontWeight: 800,
                  borderRadius: 3,
                  boxShadow: 4,
                  '&:hover': { bgcolor: '#f7f7ff' },
                }}
              >
                Şimdi Kaydol
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
