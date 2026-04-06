import {
  Link as RouterLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LanguageIcon from '@mui/icons-material/Language';
import colors from '../../theme/colors';

const NAV_ITEMS = [
  { icon: <BarChartIcon />, label: 'Dashboard', to: '/admin/panel' },
  { icon: <MenuBookIcon />, label: 'Dersler', to: '/admin/panel/lessons' },
  { icon: <PeopleIcon />, label: 'Topluluk', to: '/admin/panel/community' },
  { icon: <PeopleIcon />, label: 'Öğrenciler', to: null },
];

export default function AdminPanel() {
  const navigate = useNavigate();
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
      {/* Sidebar */}
      <Box
        component="aside"
        sx={{
          width: 260,
          bgcolor: '#fff',
          borderRight: `1px solid ${colors.outlineVariant}30`,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          py: 4,
          flexShrink: 0,
        }}
      >
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
            sx={{
              fontSize: 18,
              fontWeight: 800,
              color: colors.primary,
              letterSpacing: '-0.03em',
            }}
          >
            ENGAPP
          </Typography>
        </Box>

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
              ? item.to === '/admin/panel'
                ? pathname === '/admin/panel'
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
                  textDecoration: 'none',
                  cursor: item.to ? 'pointer' : 'default',
                  fontWeight: isActive ? 700 : 500,
                  bgcolor: isActive ? `${colors.primary}14` : 'transparent',
                  color: isActive ? colors.primary : colors.onSurfaceVariant,
                  opacity: item.to ? 1 : 0.5,
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
                <Typography sx={{ fontWeight: 'inherit', fontSize: 14 }}>
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box sx={{ px: 2, mt: 'auto' }}>
          <Button
            fullWidth
            startIcon={<LogoutIcon />}
            onClick={() => navigate('/')}
            sx={{
              justifyContent: 'flex-start',
              px: 2,
              py: 1.5,
              borderRadius: 2.5,
              color: '#ef4444',
              fontWeight: 600,
              fontSize: 14,
              textTransform: 'none',
              '&:hover': { bgcolor: '#fef2f2' },
            }}
          >
            Çıkış Yap
          </Button>
        </Box>
      </Box>

      {/* Main */}
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
          <Stack direction="row" spacing={1.5} alignItems="center">
            <AdminPanelSettingsIcon sx={{ color: colors.primary }} />
            <Typography
              variant="h5"
              fontWeight={800}
              sx={{ letterSpacing: '-0.02em' }}
            >
              Yönetim Paneli
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
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
              sx={{
                width: 40,
                height: 40,
                bgcolor: colors.primaryContainer,
                color: '#fff',
                fontSize: 16,
                fontWeight: 800,
              }}
            >
              A
            </Avatar>
          </Stack>
        </Box>

        {/* Content */}
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
              maxWidth: 1400,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
