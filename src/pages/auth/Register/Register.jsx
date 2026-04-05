import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import colors from '../../../theme/colors';
import StepOne from './StepOne';

const GENDER_OPTIONS = [
  { value: 'male', label: 'Erkek' },
  { value: 'female', label: 'Kadın' },
  { value: 'other', label: 'Belirtmek İstemiyorum' },
];

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 3,
    bgcolor: '#fff',
    '& fieldset': { borderColor: `${colors.outlineVariant}44` },
    '&:hover fieldset': { borderColor: colors.primary },
    '&.Mui-focused fieldset': { borderColor: colors.primary, borderWidth: 2 },
  },
};

export default function Register() {
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const canContinue =
    step === 0
      ? form.firstName &&
        form.lastName &&
        form.email &&
        form.age &&
        form.gender &&
        form.password &&
        form.confirmPassword &&
        form.password.length >= 6
      : true;

  // Step 0 = registration form, Step 1 = onboarding (StepOne)
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
      {/* Header */}
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 3, md: 4 },
          py: 2,
          maxWidth: 1120,
          mx: 'auto',
          left: 0,
          right: 0,
          bgcolor: `${colors.surface}CC`,
          backdropFilter: 'blur(20px)',
        }}
      >
        <Typography
          component={RouterLink}
          to="/"
          sx={{
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: colors.onSurface,
            textDecoration: 'none',
          }}
        >
          ENGAPP
        </Typography>
        <IconButton
          component={RouterLink}
          to="/"
          sx={{ '&:hover': { bgcolor: '#f3f2ff' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 12,
          pb: 16,
          px: 2,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto' }}>
          {/* Progress */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: colors.onSurfaceVariant,
                mb: 2,
              }}
            >
              Adım {step + 1} / 2
            </Typography>
            <Box sx={{ width: 260, mx: 'auto' }}>
              <LinearProgress
                variant="determinate"
                value={step === 0 ? 50 : 100}
                sx={{
                  height: 6,
                  borderRadius: 999,
                  bgcolor: `${colors.outlineVariant}33`,
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 999,
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
                  },
                }}
              />
            </Box>
          </Box>

          {/* Step Content */}
          {step === 0 ? (
            /* ── STEP 0: Registration Form ── */
            <Box sx={{ maxWidth: 560, mx: 'auto' }}>
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: 32, md: 44 },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    mb: 2,
                  }}
                >
                  Hesabını{' '}
                  <Box component="span" sx={{ color: colors.primary }}>
                    Oluştur
                  </Box>
                </Typography>
                <Typography
                  sx={{ color: colors.onSurfaceVariant, fontSize: 16 }}
                >
                  Sana en uygun öğrenme deneyimini sunabilmemiz için bilgilerini
                  gir.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                      İsim
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Adınız"
                      value={form.firstName}
                      onChange={handleChange('firstName')}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                      Soy İsim
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Soyadınız"
                      value={form.lastName}
                      onChange={handleChange('lastName')}
                      sx={inputSx}
                    />
                  </Grid>
                </Grid>

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
                    type="email"
                    placeholder="ad@ornek.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    sx={inputSx}
                  />
                </Box>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                      Yaş
                    </Typography>
                    <TextField
                      fullWidth
                      type="number"
                      placeholder="Yaşınız"
                      value={form.age}
                      onChange={handleChange('age')}
                      inputProps={{ min: 6, max: 100 }}
                      sx={inputSx}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
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
                      Cinsiyet
                    </Typography>
                    <TextField
                      fullWidth
                      select
                      value={form.gender}
                      onChange={handleChange('gender')}
                      sx={inputSx}
                    >
                      {GENDER_OPTIONS.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>

                {/* Password */}
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
                    placeholder="En az 6 karakter"
                    value={form.password}
                    onChange={handleChange('password')}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon
                            sx={{
                              color: colors.onSurfaceVariant,
                              fontSize: 20,
                            }}
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
                    sx={inputSx}
                  />
                </Box>

                {/* Confirm Password */}
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
                    Şifre Tekrar
                  </Typography>
                  <TextField
                    fullWidth
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Şifrenizi tekrar girin"
                    value={form.confirmPassword}
                    onChange={(e) => {
                      setForm((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }));
                      setPasswordError('');
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon
                            sx={{
                              color: colors.onSurfaceVariant,
                              fontSize: 20,
                            }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowConfirm((v) => !v)}
                            edge="end"
                            size="small"
                          >
                            {showConfirm ? (
                              <VisibilityOffIcon sx={{ fontSize: 20 }} />
                            ) : (
                              <VisibilityIcon sx={{ fontSize: 20 }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={inputSx}
                  />
                  {passwordError && (
                    <Typography
                      sx={{
                        color: '#c62828',
                        fontSize: 12,
                        fontWeight: 600,
                        mt: 1,
                        pl: 0.5,
                      }}
                    >
                      {passwordError}
                    </Typography>
                  )}
                </Box>

                {/* Login link */}
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: 500,
                    color: colors.onSurfaceVariant,
                    mt: 1,
                  }}
                >
                  Zaten hesabın var mı?{' '}
                  <Link
                    component={RouterLink}
                    to="/login"
                    underline="hover"
                    sx={{ fontWeight: 700, color: colors.primary }}
                  >
                    Giriş Yap
                  </Link>
                </Typography>
              </Box>
            </Box>
          ) : (
            /* ── STEP 1: Onboarding ── */
            <StepOne />
          )}
        </Box>
      </Box>

      {/* Fixed Bottom Bar */}
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          px: 3,
          pt: 2,
          pb: 4,
          bgcolor: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 -4px 40px rgba(0,0,0,0.06)',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
      >
        {step > 0 && (
          <Button
            onClick={() => setStep((s) => s - 1)}
            startIcon={<ArrowBackIcon />}
            sx={{
              px: 5,
              py: 1.5,
              color: colors.onSurface,
              fontWeight: 700,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              borderRadius: 999,
              '&:hover': { bgcolor: '#f3f2ff' },
            }}
          >
            Geri
          </Button>
        )}
        <Button
          onClick={() => {
            if (step === 0) {
              if (form.password !== form.confirmPassword) {
                setPasswordError('Şifreler eşleşmiyor.');
                return;
              }
              setStep(1);
            }
            // step 1 → final action (e.g. navigate to dashboard) can be added
          }}
          disabled={!canContinue}
          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
          variant="contained"
          sx={{
            px: 6,
            py: 2,
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
            boxShadow: `0 12px 30px ${colors.primary}33`,
            '&:hover': { boxShadow: `0 16px 40px ${colors.primary}44` },
            '&.Mui-disabled': { opacity: 0.5 },
          }}
        >
          Kaydet ve Devam Et
        </Button>
      </Box>
    </Box>
  );
}
