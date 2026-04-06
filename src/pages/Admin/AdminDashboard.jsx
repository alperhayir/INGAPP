import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import colors from '../../theme/colors';

const STAT_CARDS = [
  {
    title: 'Toplam Öğrenci',
    value: '1,248',
    change: '+12%',
    icon: <PeopleIcon />,
    color: colors.primary,
    bg: '#f2efff',
  },
  {
    title: 'Aktif Dersler',
    value: '36',
    change: '+3',
    icon: <MenuBookIcon />,
    color: colors.tertiary,
    bg: '#e8faf4',
  },
  {
    title: 'Haftalık İlerleme',
    value: '%87',
    change: '+5%',
    icon: <TrendingUpIcon />,
    color: '#f97316',
    bg: '#fff7ed',
  },
  {
    title: 'Tamamlanan Ders',
    value: '824',
    change: '+48',
    icon: <BarChartIcon />,
    color: colors.secondary,
    bg: '#fff8ec',
  },
];

const RECENT_STUDENTS = [
  { name: 'Mert Aydın', level: 'B2', xp: 2450, streak: 12 },
  { name: 'Zeynep Koç', level: 'A2', xp: 1120, streak: 8 },
  { name: 'Barış Kaya', level: 'B1', xp: 1890, streak: 21 },
  { name: 'Elif Demir', level: 'C1', xp: 3200, streak: 34 },
  { name: 'Can Yılmaz', level: 'A1', xp: 540, streak: 3 },
];

export default function AdminDashboard() {
  return (
    <>
      {/* Stat Cards */}
      <Grid container spacing={3}>
        {STAT_CARDS.map((card) => (
          <Grid key={card.title} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${colors.outlineVariant}20`,
                bgcolor: '#fff',
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: colors.onSurfaceVariant,
                      mb: 1,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="h4" fontWeight={800}>
                    {card.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: colors.tertiary,
                      mt: 0.5,
                    }}
                  >
                    {card.change}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2.5,
                    bgcolor: card.bg,
                    color: card.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {card.icon}
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Recent Students */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 3,
          border: `1px solid ${colors.outlineVariant}20`,
          bgcolor: '#fff',
        }}
      >
        <Typography variant="h6" fontWeight={800} sx={{ mb: 3 }}>
          Son Aktif Öğrenciler
        </Typography>
        <Stack divider={<Divider />} spacing={0}>
          {RECENT_STUDENTS.map((student) => (
            <Stack
              key={student.name}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ py: 2 }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: `${colors.primary}14`,
                    color: colors.primary,
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  {student.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                    {student.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: colors.onSurfaceVariant }}
                  >
                    Seviye: {student.level}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: colors.primary,
                  }}
                >
                  {student.xp} XP
                </Typography>
                <Typography
                  sx={{ fontSize: 13, fontWeight: 700, color: '#f97316' }}
                >
                  🔥 {student.streak} gün
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Paper>
    </>
  );
}
