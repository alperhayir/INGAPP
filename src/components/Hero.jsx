import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import colors from '../theme/colors';

const AVATARS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB3DLeBe6ATvCypd3TGPCSLG8PAgCHOWKOm3IZCKoACXskqYJEijdGJY0DhNQZzkvaIYl0FdWp8SB1aNE7bhEjQ8dU5_R10OhLXzIdjkBVgy1OrCUk_dYOEQS4FkU-CHcDKSPAk23U7u_Opk_4cJo0M85fhhRBRcYWglNCT8hVaxb586YMCsq6orIsboSScy_ewMWbfrfC-Mh7QL-xzs5BsOkbhhCbr721y-ct6vsW6WywOLB7MIJcaa0lfsgTdBPGbeLLlP86mO-wy',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBiLRVTcO5NoSchmPZn1C_Hgmrjm3DspxaZP2-O5UWvkfhOqAWdiYdKczeBf8gPPeVJAjcMwFruAsIr71DLEtFgCkqu-d7GNHMmLQbm_er4eEh6Szqv8nOn--0_arwAJjXkK7oJz7ytzuzesQ1POoCWOGmXO_ZORTM5GUAzRCfM8OvVas2AW5sHbn51bDxQPjOU3J1awH0nDnCdyftZ81JcLPDfmZ_5xqcCV1swL2i018OupN8-yLo-2UOB6L6NUrFi0SVrygC5AOpS',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDTeqss3VUXk4A9ST71ofcyckVQrnJNEvo3HRuAhTPuLee4Z3qFnOq8FnVZzMRZhCk_JyQxqOLHL5-l6XP9A_mfG5zPpFEMqH0iGcJIIYLCsBVy44G6JyShmbzoHBO6Fek6oXINChe6dHXJmJxzwYuLkqERw1_9t73MGVg4CPZ4gKyJBv43unWisDlQEW8Ihukk4-EJ9nE3dj6kKmeDD4E868t76tVeIgp68YxVUgNA43adHnVrx1MpHVXvYYZck5cfcEJF_xcX2JEt',
];

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 870,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -120,
          left: -120,
          width: 384,
          height: 384,
          bgcolor: 'rgba(5,70,237,0.05)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: -200,
          width: 500,
          height: 500,
          bgcolor: 'rgba(120,85,0,0.05)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}
      />

      <Container maxWidth="lg" sx={{ textAlign: 'center', zIndex: 1 }}>
        <Chip
          icon={<AutoAwesomeIcon sx={{ color: colors.primary }} />}
          label="DİL ÖĞRENİMİNİN GELECEĞİ"
          sx={{
            bgcolor: '#f2efff',
            color: colors.primary,
            fontWeight: 800,
            mb: 4,
            px: 2,
            py: 1,
            '& .MuiChip-label': { px: 1 },
          }}
        />

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 40, md: 72 },
            fontWeight: 900,
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          The Luminous Mentor ile
          <br />
          <Box
            component="span"
            sx={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryContainer})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Kalıcı Akıcılığa Ulaşın
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 18, md: 22 },
            color: colors.onSurfaceVariant,
            maxWidth: 820,
            mx: 'auto',
            mb: 6,
          }}
        >
          Sıradan uygulamaları unutun. Kişiselleştirilmiş yapay zeka
          rehberliğinde, sezgisel bir yolculukla yeni dilleri doğal bir şekilde
          keşfedin.
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            component={RouterLink}
            to="/login"
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2.5,
              fontSize: 18,
              fontWeight: 800,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
              boxShadow: '0 20px 50px rgba(5,70,237,0.3)',
              textDecoration: 'none',
            }}
          >
            Giriş Yap
          </Button>
          <Button
            startIcon={<PlayCircleIcon />}
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 700,
              bgcolor: '#f2efff',
              color: colors.onSurface,
              borderRadius: 3,
              '&:hover': { bgcolor: '#e9e5ff' },
            }}
          >
            Deneyimleyin
          </Button>
        </Stack>

        <Stack
          direction="row"
          spacing={6}
          alignItems="center"
          justifyContent="center"
          sx={{
            mt: 10,
            pt: 6,
            borderTop: `1px solid ${colors.outlineVariant}33`,
            flexWrap: 'wrap',
            rowGap: 3,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" fontWeight={800}>
              12,000+
            </Typography>
            <Typography
              sx={{ color: colors.onSurfaceVariant, fontWeight: 600 }}
            >
              aktif poliglota katılın
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: 'none', md: 'block' },
              bgcolor: `${colors.outlineVariant}4D`,
              height: 32,
            }}
          />
          <Stack direction="row" spacing={-1.5} alignItems="center">
            {AVATARS.map((src, i) => (
              <Avatar
                key={i}
                src={src}
                sx={{
                  width: 48,
                  height: 48,
                  border: '4px solid #fff',
                  boxShadow: 1,
                }}
              />
            ))}
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: colors.primaryContainer,
                border: '4px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: -1.5,
              }}
            >
              <Typography
                sx={{ color: '#001967', fontSize: 12, fontWeight: 800 }}
              >
                +8k
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
