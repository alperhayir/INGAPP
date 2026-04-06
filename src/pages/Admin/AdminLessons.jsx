import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import colors from '../../theme/colors';

const COURSES = [
  {
    icon: <AutoStoriesIcon sx={{ fontSize: 32 }} />,
    title: 'Okuma',
    subtitle: 'Reading',
    description:
      'Okuma dersleri oluşturun: metinler, hikayeler ve makaleler ekleyin.',
    progress: 0,
    lessons: '0 / 0 Ders',
    color: colors.primary,
    bgLight: `${colors.primary}12`,
  },
  {
    icon: <EditNoteIcon sx={{ fontSize: 32 }} />,
    title: 'Yazma',
    subtitle: 'Writing',
    description:
      'Yazma pratikleri hazırlayın: paragraf, e-posta ve kompozisyon görevleri ekleyin.',
    progress: 0,
    lessons: '0 / 0 Ders',
    color: colors.tertiary,
    bgLight: `${colors.tertiary}12`,
  },
  {
    icon: <HeadphonesIcon sx={{ fontSize: 32 }} />,
    title: 'Dinleme',
    subtitle: 'Listening',
    description:
      'Dinleme dersleri oluşturun: diyalog, podcast ve konuşma içerikleri ekleyin.',
    progress: 0,
    lessons: '0 / 0 Ders',
    color: '#f97316',
    bgLight: '#f9731612',
  },
];

export default function AdminLessons() {
  return (
    <>
      {/* Page Header */}
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="h5"
          fontWeight={800}
          sx={{ letterSpacing: '-0.02em', mb: 0.5 }}
        >
          Dersler
        </Typography>
        <Typography sx={{ fontSize: 14, color: colors.onSurfaceVariant }}>
          Beceri alanını seç ve dersleri yönet.
        </Typography>
      </Box>

      {/* Course Cards Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: 3,
        }}
      >
        {COURSES.map((course) => (
          <Paper
            key={course.title}
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: '#fff',
              border: `1px solid ${colors.outlineVariant}20`,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              cursor: 'pointer',
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: `0 12px 32px ${course.color}15`,
                borderColor: `${course.color}40`,
              },
            }}
          >
            {/* Icon + Arrow */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 3,
                  bgcolor: course.bgLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: course.color,
                }}
              >
                {course.icon}
              </Box>
              <IconButton
                size="small"
                sx={{
                  color: colors.onSurfaceVariant,
                  border: `1px solid ${colors.outlineVariant}30`,
                  '&:hover': { bgcolor: course.bgLight, color: course.color },
                }}
              >
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Title */}
            <Box>
              <Typography fontWeight={700} sx={{ fontSize: 18, mb: 0.25 }}>
                {course.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: course.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {course.subtitle}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                fontSize: 13,
                color: colors.onSurfaceVariant,
                lineHeight: 1.6,
              }}
            >
              {course.description}
            </Typography>

            {/* Progress */}
            <Box sx={{ mt: 'auto' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                  {course.lessons}
                </Typography>
                <Typography
                  sx={{ fontSize: 12, fontWeight: 800, color: course.color }}
                >
                  {course.progress}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={course.progress}
                sx={{
                  height: 8,
                  borderRadius: 999,
                  bgcolor: `${course.color}15`,
                  '& .MuiLinearProgress-bar': {
                    bgcolor: course.color,
                    borderRadius: 999,
                  },
                }}
              />
            </Box>
          </Paper>
        ))}
      </Box>
    </>
  );
}
