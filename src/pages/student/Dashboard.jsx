import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CheckIcon from '@mui/icons-material/Check';
import colors from '../../theme/colors';

const JOURNEY_NODES = [
  {
    icon: <LocationCityIcon sx={{ fontSize: 32 }} />,
    title: 'Greetings City',
    status: 'completed',
    label: 'Tamamlandı',
    color: colors.tertiary,
  },
  {
    icon: <FlightTakeoffIcon sx={{ fontSize: 40 }} />,
    title: 'Travel Airport',
    status: 'active',
    label: 'Şimdi: 12/15 Ders',
    color: colors.primary,
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 32 }} />,
    title: 'Foodie Forest',
    status: 'locked',
    label: 'Kilitli',
    color: colors.outlineVariant,
  },
  {
    icon: <ShoppingBagIcon sx={{ fontSize: 32 }} />,
    title: 'Market Plaza',
    status: 'locked',
    label: 'Kilitli',
    color: colors.outlineVariant,
  },
];

export default function Dashboard() {
  return (
    <>
      {/* Hero Row */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 4,
        }}
      >
        {/* Hero Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            background: `linear-gradient(135deg, ${colors.primary}, #0046b9)`,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 440 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                px: 1.5,
                py: 0.5,
                bgcolor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(8px)',
                borderRadius: 999,
                mb: 2,
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 12 }} />
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Yeni Nesil Öğrenme
              </Typography>
            </Box>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{ lineHeight: 1.15, mb: 2 }}
            >
              Dil Öğrenmeye <br />
              Kaldığın Yerden Devam Et
            </Typography>
            <Typography
              sx={{ opacity: 0.8, fontSize: 14, lineHeight: 1.6, mb: 3 }}
            >
              Bilişsel akış metodolojisiyle, yabancı dilleri tıpkı ana diliniz
              gibi doğal bir süreçle keşfedin.
            </Typography>
            <Button
              variant="contained"
              endIcon={<PlayArrowIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: '#fff',
                color: colors.primary,
                fontWeight: 700,
                px: 3,
                py: 1.5,
                borderRadius: 2.5,
                textTransform: 'none',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                '&:hover': {
                  bgcolor: '#f0f0ff',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s',
              }}
            >
              Derse Başla
            </Button>
          </Box>
        </Paper>

        {/* Level Card */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 4,
            bgcolor: '#fff',
            border: `1px solid ${colors.outlineVariant}20`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography fontWeight={700} sx={{ fontSize: 18, mb: 0.5 }}>
              Mevcut Seviye
            </Typography>
            <Typography sx={{ fontSize: 14, color: colors.onSurfaceVariant }}>
              Seviye 2: Orta Seviye İletişim
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                mb: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: 28, fontWeight: 900, color: colors.tertiary }}
              >
                65%
              </Typography>
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: colors.outlineVariant,
                  textTransform: 'uppercase',
                }}
              >
                320 XP Kaldı
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={65}
              sx={{
                height: 12,
                borderRadius: 999,
                bgcolor: `${colors.outlineVariant}22`,
                '& .MuiLinearProgress-bar': {
                  bgcolor: colors.tertiary,
                  borderRadius: 999,
                },
              }}
            />
          </Box>
        </Paper>
      </Box>

      {/* Learning Journey */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 5 },
          borderRadius: 4,
          bgcolor: '#fff',
          border: `1px solid ${colors.outlineVariant}20`,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 5,
          }}
        >
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ letterSpacing: '-0.02em' }}
          >
            Öğrenme Yolculuğun
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton
              size="small"
              sx={{
                border: `1px solid ${colors.outlineVariant}30`,
                '&:hover': { bgcolor: '#f3f2ff' },
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                border: `1px solid ${colors.outlineVariant}30`,
                '&:hover': { bgcolor: '#f3f2ff' },
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: { xs: 2, md: 8 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              height: 2,
              borderTop: `2px dashed ${colors.outlineVariant}30`,
              mx: { xs: 6, md: 12 },
            }}
          />

          {JOURNEY_NODES.map((node, idx) => {
            const isActive = node.status === 'active';
            const isCompleted = node.status === 'completed';
            const isLocked = node.status === 'locked';
            const size = isActive ? 96 : 80;

            return (
              <Box
                key={node.title}
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: idx === 3 ? { xs: 'none', xl: 'flex' } : 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  opacity: isLocked ? (idx === 3 ? 0.3 : 0.5) : 1,
                  filter: isLocked ? 'grayscale(1)' : 'none',
                }}
              >
                <Box
                  sx={{
                    width: size,
                    height: size,
                    borderRadius: '50%',
                    bgcolor: isLocked ? '#e4e8f1' : '#fff',
                    border: `4px solid ${isLocked ? `${colors.outlineVariant}30` : node.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isLocked ? colors.outlineVariant : node.color,
                    boxShadow: isActive
                      ? `0 16px 40px ${colors.primary}20, 0 0 0 8px ${colors.primary}08`
                      : '0 4px 16px rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.05)' },
                    position: 'relative',
                  }}
                >
                  {node.icon}
                  {isCompleted && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -2,
                        right: -2,
                        width: 24,
                        height: 24,
                        bgcolor: node.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                      }}
                    >
                      <CheckIcon sx={{ fontSize: 14 }} />
                    </Box>
                  )}
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                    {node.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: isLocked ? colors.outlineVariant : node.color,
                    }}
                  >
                    {node.label}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </>
  );
}
