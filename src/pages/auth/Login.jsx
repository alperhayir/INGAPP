import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import colors from '../../theme/colors';

const LOGIN_IMAGE =
  'https://lh3.googleusercontent.com/aida/ADBb0ujx2EitUmxIAl8eRDZvFULiwnw5uyDhUbi_iHKdCMrVLm_gP02QBGS5aNhdYIwtw08yqPwQnIR-zFT1F0ibdzezPDBMvKSaKZ9PGmYqn8aXruCewOV8VM4NdgIQORFjYIZtsrg1fIh8PyY-mYR28oadO6Upq2U7-M9gsZh09XFg0EAxgw8lfGGhlL0k3oHjnwFG2qPqB6_rCKJ6Bxn5CYheD4UVC4704-iq7NsMbAABmLUqFNne3DY8_4Mgn4Q0H2li2Wwkaz-oJio';

const FOOTER_LINKS = [
  'Gizlilik Politikası',
  'Kullanım Koşulları',
  'Çerez Ayarları',
];

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'user' && password === 'user') {
      navigate('/dashboard');
    } else {
      setError('Geçersiz kullanıcı adı veya şifre. (user / user)');
    }
  };

  return (
    <Box
      sx={{
        bgcolor: colors.surface,
        color: colors.onSurface,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Nav */}
      <Box
        component="nav"
        sx={{
          height: 80,
          px: { xs: 3, md: 8 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          maxWidth: 1280,
          mx: 'auto',
          width: '100%',
          borderBottom: `1px solid ${colors.outlineVariant}33`,
        }}
      >
        <Stack direction="row" spacing={4} alignItems="center">
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: `${colors.onSurface}99`,
              '&:hover': { color: colors.primary },
            }}
          >
            Ana Sayfa
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: `${colors.onSurface}99`,
              '&:hover': { color: colors.primary },
            }}
          >
            Destek
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: `${colors.onSurface}99`,
              '&:hover': { color: colors.primary },
            }}
          >
            İletişim
          </Link>
        </Stack>
      </Box>

      {/* Main */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          py: { xs: 4, md: 8 },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            maxWidth: 1000,
            width: '100%',
            display: 'flex',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0,0,0,0.06)',
            border: `1px solid ${colors.outlineVariant}33`,
          }}
        >
          {/* Left: Image */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              width: '50%',
              position: 'relative',
              minHeight: 650,
            }}
          >
            <Box
              component="img"
              src={LOGIN_IMAGE}
              alt="İngilizce Öğrenme Platformu"
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 48,
                left: 48,
                right: 48,
                color: '#fff',
              }}
            >
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{ mb: 2, lineHeight: 1.2 }}
              >
                Geleceğini İngilizce ile Şekillendir.
              </Typography>
              <Typography sx={{ fontSize: 18, opacity: 0.9, fontWeight: 500 }}>
                Yapay zeka destekli eğitmenlerimizle dil öğrenme yolculuğuna
                başla.
              </Typography>
            </Box>
          </Box>

          {/* Right: Form */}
          <Box
            sx={{
              width: { xs: '100%', lg: '50%' },
              p: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{ mb: 1, letterSpacing: '-0.02em' }}
              >
                Hoş Geldiniz
              </Typography>
              <Typography
                sx={{
                  color: colors.onSurfaceVariant,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                Atölyenize erişmek için lütfen bilgilerinizi girin.
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
                  mb: 1,
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
              {/* Email */}
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
                  E-posta Adresi
                </Typography>
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="user"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon
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

              {/* Password */}
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                    pl: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: colors.onSurfaceVariant,
                    }}
                  >
                    Şifre
                  </Typography>
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: colors.primary,
                    }}
                  >
                    Şifremi Unuttum?
                  </Link>
                </Box>
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="user"
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

              {/* Submit */}
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

            {/* Divider */}
            <Divider
              sx={{
                my: 4,
                '&::before, &::after': {
                  borderColor: `${colors.outlineVariant}33`,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: colors.onSurfaceVariant,
                  px: 2,
                }}
              >
                Veya şununla devam et
              </Typography>
            </Divider>

            {/* Google Button */}
            <Button
              variant="outlined"
              startIcon={
                <Box
                  component="svg"
                  viewBox="0 0 24 24"
                  sx={{ width: 20, height: 20 }}
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09A6.97 6.97 0 015.49 12c0-.72.13-1.43.35-2.09V7.07H2.18A11.02 11.02 0 001 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </Box>
              }
              sx={{
                height: 48,
                borderRadius: 999,
                borderColor: `${colors.outlineVariant}33`,
                color: colors.onSurface,
                fontWeight: 600,
                fontSize: 14,
                textTransform: 'none',
                px: 6,
                mx: 'auto',
                display: 'flex',
                '&:hover': {
                  bgcolor: '#f3f2ff',
                  borderColor: `${colors.outlineVariant}66`,
                },
              }}
            >
              Google
            </Button>

            {/* Register Link */}
            <Typography
              sx={{
                mt: 6,
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 500,
                color: colors.onSurfaceVariant,
              }}
            >
              Hesabınız yok mu?{' '}
              <Link
                component={RouterLink}
                to="/register"
                underline="hover"
                sx={{ fontWeight: 700, color: colors.primary, ml: 0.5 }}
              >
                Kayıt Ol
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: `1px solid ${colors.outlineVariant}33`,
          bgcolor: colors.surface,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: 5,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: `${colors.onSurface}80`,
            }}
          >
            © 2024 The Fluid Polyglot. Tüm hakları saklıdır.
          </Typography>
          <Stack direction="row" spacing={4}>
            {FOOTER_LINKS.map((text) => (
              <Link
                key={text}
                href="#"
                underline="none"
                sx={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: `${colors.onSurface}66`,
                  '&:hover': { color: colors.primary },
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
