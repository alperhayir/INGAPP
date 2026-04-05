import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BadgeIcon from '@mui/icons-material/Badge';
import TranslateIcon from '@mui/icons-material/Translate';
import colors from '../../theme/colors';

const sectionIcon = {
  width: 36,
  height: 36,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
};

const labelSx = {
  fontSize: 10,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: colors.onSurfaceVariant,
  mb: 0.75,
};

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2.5,
    bgcolor: '#f8f8fc',
    fontSize: 14,
    '& fieldset': { borderColor: `${colors.outlineVariant}40` },
    '&:hover fieldset': { borderColor: colors.outlineVariant },
    '&.Mui-focused fieldset': { borderColor: colors.primary },
  },
};

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [gender, setGender] = useState('');
  const [eduStatus, setEduStatus] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [language, setLanguage] = useState('tr');

  const selectSx = {
    borderRadius: 2.5,
    bgcolor: '#f8f8fc',
    fontSize: 14,
    '& fieldset': { borderColor: `${colors.outlineVariant}40` },
    '&:hover fieldset': { borderColor: colors.outlineVariant },
    '&.Mui-focused fieldset': { borderColor: colors.primary },
  };

  return (
    <Box sx={{ maxWidth: 960, mx: 'auto' }}>
      {/* Page Header */}
      <Typography
        sx={{ fontSize: 24, fontWeight: 800, color: colors.onSurface, mb: 0.5 }}
      >
        Ayarlar
      </Typography>
      <Typography sx={{ fontSize: 14, color: colors.onSurfaceVariant, mb: 4 }}>
        Profil bilgilerini ve hesap ayarlarını buradan yönetebilirsin.
      </Typography>

      {/* ─── Profile Photo Card ─── */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
          border: `1px solid ${colors.outlineVariant}25`,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Avatar
            sx={{
              width: 72,
              height: 72,
              bgcolor: `${colors.primary}18`,
              color: colors.primary,
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            A
          </Avatar>
          <IconButton
            size="small"
            sx={{
              position: 'absolute',
              bottom: -2,
              right: -2,
              bgcolor: colors.primary,
              color: '#fff',
              width: 26,
              height: 26,
              '&:hover': { bgcolor: '#0035c0' },
            }}
          >
            <CameraAltIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Box>
        <Box>
          <Typography
            sx={{ fontWeight: 700, fontSize: 16, color: colors.onSurface }}
          >
            Alperen Hayır
          </Typography>
          <Typography sx={{ fontSize: 13, color: colors.onSurfaceVariant }}>
            Profil fotoğrafını değiştirmek için tıkla
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          sx={{
            ml: 'auto',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            fontSize: 13,
            borderColor: `${colors.outlineVariant}60`,
            color: colors.onSurfaceVariant,
          }}
        >
          Fotoğrafı Kaldır
        </Button>
      </Paper>

      {/* ─── Top Two Cards Row ─── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          mb: 3,
        }}
      >
        {/* Contact & Identity */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 4,
            border: `1px solid ${colors.outlineVariant}25`,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
            <Box
              sx={{
                ...sectionIcon,
                bgcolor: `${colors.secondaryContainer}30`,
                color: colors.secondary,
              }}
            >
              <BadgeIcon sx={{ fontSize: 20 }} />
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
              Contact & Identity
            </Typography>
          </Stack>

          {/* Email */}
          <Typography sx={labelSx}>Email Address</Typography>
          <TextField
            fullWidth
            placeholder="Enter your email address"
            size="small"
            sx={{ ...inputSx, mb: 2.5 }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <AlternateEmailIcon
                      sx={{ fontSize: 18, color: colors.onSurfaceVariant }}
                    />
                  </InputAdornment>
                ),
              },
            }}
          />

          {/* Date of Birth & Gender */}
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>Date of Birth</Typography>
              <TextField
                fullWidth
                placeholder="DD / MM / YYYY"
                size="small"
                sx={inputSx}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarMonthIcon
                          sx={{ fontSize: 18, color: colors.onSurfaceVariant }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>Gender</Typography>
              <Select
                fullWidth
                size="small"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                displayEmpty
                renderValue={(v) => v || 'Select gender'}
                sx={selectSx}
              >
                <MenuItem value="male">Erkek</MenuItem>
                <MenuItem value="female">Kadın</MenuItem>
                <MenuItem value="other">Diğer</MenuItem>
              </Select>
            </Box>
          </Stack>
        </Paper>

        {/* Education & Location */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 4,
            border: `1px solid ${colors.outlineVariant}25`,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
            <Box
              sx={{
                ...sectionIcon,
                bgcolor: `${colors.primary}14`,
                color: colors.primary,
              }}
            >
              <SchoolIcon sx={{ fontSize: 20 }} />
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
              Education & Location
            </Typography>
          </Stack>

          {/* Education Status & School */}
          <Stack direction="row" spacing={2} mb={2.5}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>Education Status</Typography>
              <Select
                fullWidth
                size="small"
                value={eduStatus}
                onChange={(e) => setEduStatus(e.target.value)}
                displayEmpty
                renderValue={(v) => v || 'Select status'}
                sx={selectSx}
                endAdornment={
                  <InputAdornment position="end" sx={{ mr: 2 }}>
                    <SchoolIcon
                      sx={{ fontSize: 18, color: colors.onSurfaceVariant }}
                    />
                  </InputAdornment>
                }
              >
                <MenuItem value="high-school">Lise</MenuItem>
                <MenuItem value="university">Üniversite</MenuItem>
                <MenuItem value="graduate">Mezun</MenuItem>
                <MenuItem value="working">Çalışan</MenuItem>
              </Select>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>School / Institution</Typography>
              <TextField
                fullWidth
                placeholder="Search school..."
                size="small"
                sx={inputSx}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon
                          sx={{ fontSize: 18, color: colors.onSurfaceVariant }}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Stack>

          {/* City & District */}
          <Stack direction="row" spacing={2}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>City</Typography>
              <Select
                fullWidth
                size="small"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                displayEmpty
                renderValue={(v) => v || 'Select city'}
                sx={selectSx}
                endAdornment={
                  <InputAdornment position="end" sx={{ mr: 2 }}>
                    <LocationCityIcon
                      sx={{ fontSize: 18, color: colors.onSurfaceVariant }}
                    />
                  </InputAdornment>
                }
              >
                <MenuItem value="istanbul">İstanbul</MenuItem>
                <MenuItem value="ankara">Ankara</MenuItem>
                <MenuItem value="izmir">İzmir</MenuItem>
                <MenuItem value="bursa">Bursa</MenuItem>
                <MenuItem value="antalya">Antalya</MenuItem>
              </Select>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>District</Typography>
              <Select
                fullWidth
                size="small"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                displayEmpty
                renderValue={(v) => v || 'Select district'}
                sx={selectSx}
                endAdornment={
                  <InputAdornment position="end" sx={{ mr: 2 }}>
                    <AccountBalanceIcon
                      sx={{ fontSize: 18, color: colors.onSurfaceVariant }}
                    />
                  </InputAdornment>
                }
              >
                <MenuItem value="kadikoy">Kadıköy</MenuItem>
                <MenuItem value="besiktas">Beşiktaş</MenuItem>
                <MenuItem value="uskudar">Üsküdar</MenuItem>
              </Select>
            </Box>
          </Stack>
        </Paper>
      </Box>

      {/* ─── Security Card ─── */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 4,
          border: `1px solid ${colors.outlineVariant}25`,
          mb: 3,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
          <Box
            sx={{
              ...sectionIcon,
              bgcolor: `${colors.primary}14`,
              color: colors.primary,
            }}
          >
            <LockIcon sx={{ fontSize: 20 }} />
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
            Security
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          alignItems="flex-start"
        >
          {/* Password Fields */}
          <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>New Password</Typography>
              <TextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                size="small"
                sx={inputSx}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon sx={{ fontSize: 18 }} />
                          ) : (
                            <VisibilityIcon sx={{ fontSize: 18 }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={labelSx}>Confirm Password</Typography>
              <TextField
                fullWidth
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm your password"
                size="small"
                sx={inputSx}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          onClick={() => setShowConfirm(!showConfirm)}
                        >
                          {showConfirm ? (
                            <VisibilityOffIcon sx={{ fontSize: 18 }} />
                          ) : (
                            <VisibilityIcon sx={{ fontSize: 18 }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
          </Stack>

          {/* Password Requirements */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 3,
              bgcolor: `${colors.primary}08`,
              border: `1px solid ${colors.primary}20`,
              minWidth: 260,
            }}
          >
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <InfoOutlinedIcon
                sx={{ fontSize: 18, color: colors.primary, mt: 0.2 }}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: colors.primary,
                    mb: 0.5,
                  }}
                >
                  Password Requirements
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    color: colors.onSurfaceVariant,
                    lineHeight: 1.6,
                  }}
                >
                  At least 8 characters, including a mix of uppercase letters,
                  numbers, and symbols.
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Stack>
      </Paper>

      {/* ─── Language & Appearance ─── */}
      <Box sx={{ mb: 3 }}>
        {/* Language & Appearance */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 4,
            border: `1px solid ${colors.outlineVariant}25`,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5} mb={3}>
            <Box
              sx={{
                ...sectionIcon,
                bgcolor: `${colors.tertiary}14`,
                color: colors.tertiary,
              }}
            >
              <TranslateIcon sx={{ fontSize: 20 }} />
            </Box>
            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
              Dil & Görünüm
            </Typography>
          </Stack>

          <Typography sx={labelSx}>Arayüz Dili</Typography>
          <Select
            fullWidth
            size="small"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            sx={{ ...selectSx, mb: 2.5 }}
          >
            <MenuItem value="tr">🇹🇷 Türkçe</MenuItem>
            <MenuItem value="en">🇬🇧 English</MenuItem>
          </Select>

          <Typography sx={labelSx}>Öğrenilen Dil</Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2.5 }}>
            <Chip
              label="🇬🇧 İngilizce"
              sx={{
                fontWeight: 600,
                bgcolor: `${colors.primary}14`,
                color: colors.primary,
                borderRadius: 2,
              }}
            />
            <Chip
              label="+ Dil Ekle"
              variant="outlined"
              sx={{
                fontWeight: 600,
                borderColor: `${colors.outlineVariant}50`,
                color: colors.onSurfaceVariant,
                borderRadius: 2,
                borderStyle: 'dashed',
              }}
            />
          </Box>
        </Paper>
      </Box>

      {/* ─── Bottom Actions ─── */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pt: 1, pb: 4 }}
      >
        <Button
          variant="text"
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            fontSize: 13,
            color: colors.primary,
          }}
        >
          Cancel and clear form
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: colors.primary,
            borderRadius: 3,
            textTransform: 'none',
            fontWeight: 700,
            fontSize: 14,
            px: 4,
            py: 1.2,
            boxShadow: `0 4px 20px ${colors.primary}40`,
            '&:hover': { bgcolor: '#0035c0' },
          }}
        >
          Save & Continue
        </Button>
      </Stack>
    </Box>
  );
}
