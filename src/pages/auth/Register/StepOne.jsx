import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import colors from '../../../theme/colors';

const LEVELS = [
  {
    icon: <ChildCareIcon sx={{ fontSize: 36 }} />,
    title: 'İlkokul',
    description: 'Genç kaşifler için temel dil yapı taşları.',
    value: 'elementary',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 36 }} />,
    title: 'Ortaokul',
    description: 'Ara yapılarla ufkunu genişlet.',
    value: 'middle',
    recommended: true,
  },
  {
    icon: <HistoryEduIcon sx={{ fontSize: 36 }} />,
    title: 'Lise',
    description: 'İleri akademik odak ve sınav hazırlığı.',
    value: 'high',
  },
];

const PROFICIENCY = [
  {
    code: '0',
    title: 'Deneyim Yok',
    description: 'Bu dille yolculuğuma yeni başlıyorum.',
    value: 'none',
  },
  {
    code: 'A1',
    title: 'A1 Başlangıç',
    description: 'Birkaç temel kalıp ve selamlaşma biliyorum.',
    value: 'a1',
  },
  {
    code: 'A2',
    title: 'A2 Temel',
    description: 'Günlük basit görevler ve geçmişim hakkında konuşabilirim.',
    value: 'a2',
  },
  {
    code: 'B1',
    title: 'B1/B2 Orta',
    description: 'Sohbet edebilir ve karmaşık metinleri anlayabilirim.',
    value: 'b1',
  },
  {
    code: 'C1',
    title: 'C1/C2 İleri',
    description: 'Akıcı konuşabilir ve kendimi rahatça ifade edebilirim.',
    value: 'c1',
  },
];

export default function StepOne() {
  const [selectedLevel, setSelectedLevel] = useState('middle');
  const [selectedProf, setSelectedProf] = useState('a1');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {/* Section: Education Level */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: 32, md: 48 },
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            mb: 2,
          }}
        >
          Akademik{' '}
          <Box component="span" sx={{ color: colors.primary }}>
            seviyen
          </Box>{' '}
          ne?
        </Typography>
        <Typography
          sx={{
            color: colors.onSurfaceVariant,
            fontSize: 16,
            maxWidth: 500,
            mx: 'auto',
            mb: 5,
          }}
        >
          Kelime dağarcığını ve alıştırmaları müfredatına göre uyarlarız.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {LEVELS.map((level) => {
            const isSelected = selectedLevel === level.value;
            return (
              <Paper
                key={level.value}
                elevation={0}
                onClick={() => setSelectedLevel(level.value)}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: '#fff',
                  border: `2px solid ${isSelected ? colors.primary : 'transparent'}`,
                  boxShadow: isSelected
                    ? '0 4px 40px rgba(0,0,0,0.06)'
                    : '0 4px 40px rgba(0,0,0,0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: isSelected
                      ? colors.primary
                      : colors.primaryContainer,
                  },
                }}
              >
                {level.recommended && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 24,
                      bgcolor: '#6bf9de',
                      color: '#005d50',
                      fontSize: 10,
                      fontWeight: 700,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 999,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Önerilen
                  </Box>
                )}
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    bgcolor: isSelected
                      ? `${colors.primaryContainer}1A`
                      : '#f3f2ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.primary,
                    mb: 3,
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.1)' },
                  }}
                >
                  {level.icon}
                </Box>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                  {level.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: colors.onSurfaceVariant }}
                >
                  {level.description}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Box>

      {/* Section: Proficiency */}
      <Box sx={{ maxWidth: 640, mx: 'auto', width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
            Dil Yetkinliğin
          </Typography>
          <Typography sx={{ color: colors.onSurfaceVariant, fontSize: 16 }}>
            Dürüst ol — bu sana en doğru başlangıç noktasını bulmamıza yardımcı
            olur.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {PROFICIENCY.map((item) => {
            const isSelected = selectedProf === item.value;
            return (
              <Paper
                key={item.value}
                elevation={0}
                onClick={() => setSelectedProf(item.value)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 3,
                  borderRadius: 2,
                  bgcolor: '#fff',
                  border: isSelected
                    ? `2px solid ${colors.primary}33`
                    : '2px solid transparent',
                  boxShadow: isSelected
                    ? '0 2px 12px rgba(0,0,0,0.04)'
                    : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  '&:hover': { bgcolor: '#f3f2ff' },
                }}
              >
                {/* Code badge */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: 14,
                    ...(isSelected
                      ? {
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryContainer})`,
                          color: '#fff',
                        }
                      : {
                          bgcolor: '#f3f2ff',
                          color: colors.primary,
                        }),
                    transition: 'all 0.15s',
                  }}
                >
                  {item.code}
                </Box>

                {/* Text */}
                <Box sx={{ ml: 3, flex: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: isSelected ? colors.primary : colors.onSurface,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.onSurfaceVariant }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                {/* Radio indicator */}
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...(isSelected
                      ? { bgcolor: colors.primary }
                      : { border: `2px solid ${colors.outlineVariant}` }),
                    transition: 'all 0.15s',
                  }}
                >
                  {isSelected && (
                    <CheckIcon sx={{ fontSize: 14, color: '#fff' }} />
                  )}
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>

      {/* Decorative Image */}
      <Box
        sx={{
          width: '100%',
          height: 260,
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          component="img"
          alt="Öğrenciler birlikte çalışıyor"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5B0e-bpDxTKd9gfVQo1BaqWUK8enstunRuIAWosEDVGlRWSna_KB3dbvqtvQXfnnbiDMk9KyaQqYJ4lMX3VK4nuZli1BRb4v_PR2MhAtBFiGLIlu_mg82NhKO8s0vaB4it2YC_rQfXg-clUVQ2epXQte9NMEW2D2mMlVAiQ2f5krRTGflwNjDG1PLXPN_czCIsiZOipEPW8xYGbZgxw0FSpMnf9xZVUTYAX2SabyLU2BPdcxFL8NA-kxj6OUD8TsoHFXUyz-G2SM"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, ${colors.primary}66 0%, transparent 100%)`,
          }}
        />
      </Box>
    </Box>
  );
}
