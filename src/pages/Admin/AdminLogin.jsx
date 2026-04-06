import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useState } from 'react';
import colors from '../../theme/colors';

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/admin/panel');
    } else {
      setError('Geçersiz kullanıcı adı veya şifre. (admin / admin)');
    }
  };

  return (
    <Box
      sx={{
        bgcolor: colors.surface,
        color: colors.onSurface,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 460,
          width: '100%',
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          boxShadow: '0 25px 60px rgba(0,0,0,0.06)',
          border: `1px solid ${colors.outlineVariant}33`,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 5 }}>
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
            <AdminPanelSettingsIcon sx={{ fontSize: 32 }} />
          </Box>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ mb: 1, letterSpacing: '-0.02em' }}
          >
            Eğitmen Girişi
          </Typography>
          <Typography
            sx={{
              color: colors.onSurfaceVariant,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Yönetim paneline erişmek için bilgilerinizi girin.
          </Typography>
        </Box>

        {error && (
          <Typography
            sx={{
              color: '#c62828',
              bgcolor: '#ffebee',
              px: 2,
              py: 1.5,
              borderRadius: 2,
              fontSize: 13,
              fontWeight: 600,
              mb: 3,
            }}
          >
            {error}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: colors.onSurfaceVariant,
                mb: 1,
                pl: 0.5,
              }}
            >
              Kullanıcı Adı
            </Typography>
            <TextField
              fullWidth
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              placeholder="admin"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon
                      sx={{ color: colors.onSurfaceVariant, fontSize: 20 }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 999,
                  height: 56,
                  bgcolor: '#fff',
                  '& fieldset': {
                    borderColor: `${colors.outlineVariant}66`,
                  },
                  '&:hover fieldset': {
                    borderColor: colors.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.primary,
                    borderWidth: 2,
                  },
                },
              }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: colors.onSurfaceVariant,
                mb: 1,
                pl: 0.5,
              }}
            >
              Şifre
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="admin"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon
                      sx={{ color: colors.onSurfaceVariant, fontSize: 20 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((v) => !v)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon sx={{ fontSize: 20 }} />
                      ) : (
                        <VisibilityIcon sx={{ fontSize: 20 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 999,
                  height: 56,
                  bgcolor: '#fff',
                  '& fieldset': {
                    borderColor: `${colors.outlineVariant}66`,
                  },
                  '&:hover fieldset': {
                    borderColor: colors.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.primary,
                    borderWidth: 2,
                  },
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              height: 56,
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 16,
              textTransform: 'none',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
              boxShadow: '0 12px 30px rgba(5,70,237,0.3)',
              '&:hover': {
                boxShadow: '0 16px 40px rgba(5,70,237,0.4)',
              },
            }}
          >
            Giriş Yap
          </Button>
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          sx={{ mt: 4 }}
        >
          <Link
            component={RouterLink}
            to="/login"
            underline="hover"
            sx={{ fontSize: 14, fontWeight: 700, color: colors.primary }}
          >
            ← Öğrenci Girişine Dön
          </Link>
        </Stack>
      </Paper>
    </Box>
  );
}
