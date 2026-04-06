import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';
import VerifiedIcon from '@mui/icons-material/Verified';
import LanguageIcon from '@mui/icons-material/Language';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import colors from '../../theme/colors';

const NAV_ITEMS = [
  { icon: <DashboardIcon />, label: 'Dashboard', to: '/dashboard' },
  { icon: <MenuBookIcon />, label: 'Dersler', to: '/dashboard/lessons' },
  { icon: <PsychologyIcon />, label: 'Pratik', to: null },
  { icon: <GroupsIcon />, label: 'Topluluk', to: null },
];

export default function StudentLayout() {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        bgcolor: colors.surface,
        color: colors.onSurface,
        overflow: 'hidden',
      }}
    >
      {/* ─── Sidebar ─── */}
      <Box
        component="aside"
        sx={{
          width: { xs: 80, lg: 260 },
          bgcolor: '#fff',
          borderRight: `1px solid ${colors.outlineVariant}30`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', lg: 'stretch' },
          py: 4,
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <Box
          sx={{ px: 3, mb: 6, display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: colors.primary,
              borderRadius: 2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <LanguageIcon />
          </Box>
          <Typography
            component={RouterLink}
            to="/dashboard"
            sx={{
              fontSize: 18,
              fontWeight: 800,
              color: colors.primary,
              letterSpacing: '-0.03em',
              display: { xs: 'none', lg: 'block' },
              textDecoration: 'none',
            }}
          >
            ENGAPP
          </Typography>
        </Box>

        {/* Nav */}
        <Box
          component="nav"
          sx={{
            flex: 1,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 0.5,
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.to
              ? item.to === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(item.to)
              : false;

            const Component = item.to ? RouterLink : 'div';
            const linkProps = item.to ? { to: item.to } : {};

            return (
              <Box
                key={item.label}
                component={Component}
                {...linkProps}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: 2,
                  py: 1.5,
                  borderRadius: 2.5,
                  cursor: item.to ? 'pointer' : 'default',
                  fontWeight: isActive ? 700 : 500,
                  bgcolor: isActive ? `${colors.primary}14` : 'transparent',
                  color: isActive ? colors.primary : colors.onSurfaceVariant,
                  opacity: item.to ? 1 : 0.5,
                  textDecoration: 'none',
                  '&:hover': {
                    bgcolor: isActive
                      ? `${colors.primary}14`
                      : item.to
                        ? '#f3f2ff'
                        : 'transparent',
                  },
                  transition: 'all 0.15s',
                }}
              >
                {item.icon}
                <Typography
                  sx={{
                    display: { xs: 'none', lg: 'block' },
                    fontWeight: 'inherit',
                    fontSize: 14,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}

          <Box
            sx={{ display: { xs: 'none', lg: 'block' }, pt: 5, pb: 1, px: 2 }}
          >
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: colors.outlineVariant,
              }}
            >
              Ayarlar
            </Typography>
          </Box>
          <Box
            component={RouterLink}
            to="/dashboard/settings"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              px: 2,
              py: 1.5,
              borderRadius: 2.5,
              cursor: 'pointer',
              textDecoration: 'none',
              fontWeight: pathname.startsWith('/dashboard/settings')
                ? 700
                : 500,
              bgcolor: pathname.startsWith('/dashboard/settings')
                ? `${colors.primary}14`
                : 'transparent',
              color: pathname.startsWith('/dashboard/settings')
                ? colors.primary
                : colors.onSurfaceVariant,
              '&:hover': {
                bgcolor: pathname.startsWith('/dashboard/settings')
                  ? `${colors.primary}14`
                  : '#f3f2ff',
              },
              transition: 'all 0.15s',
            }}
          >
            <SettingsIcon />
            <Typography
              sx={{
                display: { xs: 'none', lg: 'block' },
                fontWeight: 'inherit',
                fontSize: 14,
              }}
            >
              Ayarlar
            </Typography>
          </Box>
        </Box>

        {/* Upgrade Card */}
        <Box sx={{ px: 2, mt: 'auto' }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
              color: '#fff',
              display: { xs: 'none', lg: 'block' },
              boxShadow: '0 8px 24px rgba(5,70,237,0.2)',
            }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 700, mb: 0.5 }}>
              Pro'ya Yükselt
            </Typography>
            <Typography sx={{ fontSize: 12, opacity: 0.8, mb: 2 }}>
              Gelişmiş AI pratik araçlarını aç
            </Typography>
            <Button
              fullWidth
              sx={{
                bgcolor: '#fff',
                color: colors.primary,
                fontWeight: 700,
                fontSize: 12,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': { bgcolor: '#f0f0ff' },
              }}
            >
              Premium Al
            </Button>
          </Paper>
          <Box
            sx={{
              display: { xs: 'flex', lg: 'none' },
              justifyContent: 'center',
              p: 1,
              bgcolor: colors.primary,
              borderRadius: 2.5,
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            <RocketLaunchIcon />
          </Box>
        </Box>
      </Box>

      {/* ─── Main Area ─── */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          component="header"
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 40,
            bgcolor: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(12px)',
            px: { xs: 3, md: 4 },
            py: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${colors.outlineVariant}20`,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={800}
            sx={{ letterSpacing: '-0.02em' }}
          >
            Hoş geldin, Can! 👋
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                display: { xs: 'none', xl: 'flex' },
                px: 3,
                py: 1,
                bgcolor: '#f3f2ff',
                borderRadius: 999,
                border: `1px solid ${colors.outlineVariant}10`,
              }}
            >
              <Stack direction="row" spacing={0.5} alignItems="center">
                <LocalFireDepartmentIcon
                  sx={{ fontSize: 18, color: '#f97316' }}
                />
                <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                  12 Gün
                </Typography>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: `${colors.outlineVariant}30` }}
              />
              <Stack direction="row" spacing={0.5} alignItems="center">
                <StarsIcon sx={{ fontSize: 18, color: '#3b82f6' }} />
                <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                  2,450 XP
                </Typography>
              </Stack>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: `${colors.outlineVariant}30` }}
              />
              <Stack direction="row" spacing={0.5} alignItems="center">
                <VerifiedIcon sx={{ fontSize: 18, color: '#22c55e' }} />
                <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                  %94
                </Typography>
              </Stack>
            </Stack>

            <IconButton
              sx={{ color: colors.onSurfaceVariant, position: 'relative' }}
            >
              <NotificationsIcon />
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  width: 8,
                  height: 8,
                  bgcolor: '#ef4444',
                  borderRadius: '50%',
                  border: '2px solid #fff',
                }}
              />
            </IconButton>
            <Avatar
              component={RouterLink}
              to="/dashboard/settings"
              sx={{
                width: 40,
                height: 40,
                bgcolor: colors.primaryContainer,
                color: '#fff',
                fontSize: 16,
                fontWeight: 800,
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              C
            </Avatar>
          </Stack>
        </Box>

        {/* Scrollable Content — child routes render here */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: { xs: 3, md: 4 },
            '&::-webkit-scrollbar': { width: 4 },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: '#e4e8f1',
              borderRadius: 10,
            },
          }}
        >
          <Box
            sx={{
              maxWidth: 1600,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Outlet />

            {/* Footer */}
            <Box
              component="footer"
              sx={{
                pt: 4,
                pb: 6,
                borderTop: `1px solid ${colors.outlineVariant}20`,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 900 }}>
                  ENGAPP
                </Typography>
                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: colors.outlineVariant,
                  }}
                >
                  © 2025 ENGAPP
                </Typography>
              </Box>
              <Stack direction="row" spacing={3}>
                {['Gizlilik', 'Koşullar', 'Destek', 'Metot'].map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: colors.outlineVariant,
                      textDecoration: 'none',
                      '&:hover': { color: colors.primary },
                      transition: 'color 0.15s',
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
