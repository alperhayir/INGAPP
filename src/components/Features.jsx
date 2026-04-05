import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InsightsIcon from '@mui/icons-material/Insights';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import BoltIcon from '@mui/icons-material/Bolt';
import TuneIcon from '@mui/icons-material/Tune';
import colors from '../theme/colors';

const FEATURES = [
  {
    icon: <InsightsIcon sx={{ transform: 'scale(1.3)' }} />,
    title: 'Sezgisel İlerleme',
    description:
      'Kalıpları ezberlemek yerine, dilin yapısını doğal bir akış içinde, bağlamsal olarak kavramanızı sağlayan adaptif müfredat.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV1jfZihyJgNvQwyYM8uqpSZLAvH5Tr2Iy2jV-RoIe1T4WcFCzCV7gwnfteruisAENxZzId36uHHAo58j9589YSe9Qie20J0ffqyBW3Zsg_ZKT79bUXUuYV2mPpJRu-BaQ7W9ouUtLTO-QGQOIiw4a6-8TvvWsfoFegYlgVLDiHqvjZnIX0tuCaCh1YyuBncti33GO8vEv_A_I7SnYSyNgW-N6mM9AUrYzJaezgQD_sJ-QWs7Ov-yK2fHl9olE9x797PVqI7p-yxJh',
  },
  {
    icon: <MilitaryTechIcon sx={{ transform: 'scale(1.2)' }} />,
    title: 'Ödül Sistemi',
    description:
      'Başarılarınız sadece rakamlardan ibaret değil. Her dönüm noktasında kazandığınız dijital koleksiyonlarla öğrenme motivasyonunuzu zirvede tutun.',
  },
  {
    icon: <TuneIcon sx={{ transform: 'scale(1.2)' }} />,
    title: 'Hassas Ayar',
    description:
      'Yapay zeka asistanınız telaffuzunuzu ve tonlamanızı milimetrik hassasiyetle analiz ederek size özel geri bildirimler sunar.',
  },
];

function MainFeatureCard({ feature }) {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: '#f2efff',
        borderRadius: 2,
        p: 4,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box>
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: 4,
            bgcolor: colors.primaryContainer,
            color: colors.primary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          {feature.icon}
        </Box>
        <Typography variant="h5" fontWeight={800} sx={{ mb: 1 }}>
          {feature.title}
        </Typography>
        <Typography sx={{ color: colors.onSurfaceVariant, maxWidth: 520 }}>
          {feature.description}
        </Typography>
      </Box>
      {feature.image && (
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '50%',
            transform: 'translate(40px, 40px)',
          }}
        >
          <Box
            component="img"
            alt=""
            src={feature.image}
            sx={{
              borderTopLeftRadius: 16,
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              width: '100%',
            }}
          />
        </Box>
      )}
    </Paper>
  );
}

function RewardCard({ feature }) {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: '#ffc96533',
        borderTop: `4px solid ${colors.secondary}`,
        borderRadius: 2,
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          bgcolor: colors.secondaryContainer,
          color: '#463000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        {feature.icon}
      </Box>
      <Typography
        variant="h6"
        fontWeight={800}
        sx={{ color: '#463000', mb: 1 }}
      >
        {feature.title}
      </Typography>
      <Typography sx={{ color: '#6b4b00' }}>{feature.description}</Typography>
      <Box sx={{ mt: 'auto', pt: 3 }}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              p: 1,
              borderRadius: 1.5,
              bgcolor: '#58fdc8',
              color: '#005d46',
              display: 'flex',
            }}
          >
            <BoltIcon />
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={800}>
              Günlük Seri
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: colors.onSurfaceVariant }}
            >
              15 Gün Kesintisiz!
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
}

function SmallFeatureCard({ feature }) {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 2,
        p: 4,
        height: '100%',
        boxShadow: '0 10px 30px rgba(5,70,237,0.05)',
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: 2,
          bgcolor: '#718bff',
          color: '#00207d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        {feature.icon}
      </Box>
      <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
        {feature.title}
      </Typography>
      <Typography sx={{ color: colors.onSurfaceVariant }}>
        {feature.description}
      </Typography>
    </Paper>
  );
}

export default function Features() {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
          Metodolojimiz
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

      <Grid container spacing={3} sx={{ minHeight: { md: 600 } }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <MainFeatureCard feature={FEATURES[0]} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <RewardCard feature={FEATURES[1]} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SmallFeatureCard feature={FEATURES[2]} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            sx={{
              bgcolor: '#0a082f',
              color: '#fff',
              borderRadius: 2,
              p: 4,
              position: 'relative',
              overflow: 'hidden',
              minHeight: 220,
            }}
          >
            <Box
              sx={{
                zIndex: 1,
                position: 'relative',
                width: { xs: '100%', md: '50%' },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={800}
                sx={{ color: colors.primaryContainer, mb: 1 }}
              >
                Global Bağlantı
              </Typography>
              <Typography sx={{ color: '#dcd9ff' }}>
                Dünyanın dört bir yanındaki öğrencilerle gerçek zamanlı pratik
                odalarında buluşun ve kültürler arası köprüler kurun.
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: { xs: '100%', md: '50%' },
                height: '100%',
                opacity: 0.6,
              }}
            >
              <Box
                component="img"
                alt=""
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu3dQN6vmiTXuLXK3Tlz4MJKGdITgyhCJsXXBERFAl3IzCBZk2vZAEuSVUPmy5pqzayQqP199ne8DUJZ2M5WUBE2miBGyrRCxoYDx05sTua25zR83AB5PACYsYuHSszGBqvgJPWdpraoy6dpFMjNGarmz02hkZR0IPDJh2vCNfSWljRUeDWQvbhCpmhBO4sbvDozfrii-gbgEiCW3LdvC_dxddIM_JImr8xUHS4SKN9NX2Nk7w_92l8dEPYROphJq_C9MINsaS_euM"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
