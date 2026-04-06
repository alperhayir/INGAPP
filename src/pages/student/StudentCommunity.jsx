import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// İkonlar
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarsIcon from '@mui/icons-material/Stars';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ForumIcon from '@mui/icons-material/Forum';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import colors from '../../theme/colors';

// Örnek Öğrenci Verisi (Bunu API'den gelen verinizle değiştireceksiniz)
const LEADERBOARD_DATA = [
  { id: 1, name: 'Ayşe Yılmaz', avatar: 'A', streak: 24, xp: 5200, successRate: 98 },
  { id: 2, name: 'Can Toprak', avatar: 'C', streak: 12, xp: 2450, successRate: 94 },
  { id: 3, name: 'Mehmet Kaya', avatar: 'M', streak: 8, xp: 1800, successRate: 88 },
  { id: 4, name: 'Zeynep Demir', avatar: 'Z', streak: 5, xp: 1200, successRate: 85 },
  { id: 5, name: 'Burak Şahin', avatar: 'B', streak: 3, xp: 950, successRate: 79 },
];

export default function Community() {
  // İlk 3 derece için kupa renkleri
  const getRankColor = (index) => {
    if (index === 0) return '#FFD700'; // Altın
    if (index === 1) return '#C0C0C0'; // Gümüş
    if (index === 2) return '#CD7F32'; // Bronz
    return 'transparent';
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={800}>
          Topluluk
        </Typography>
        <Typography sx={{ fontSize: 14, color: colors.onSurfaceVariant || 'text.secondary' }}>
          Öğrenci sıralamalarını, etkileşimleri ve haftalık başarıları takip edin.
        </Typography>
      </Box>

      {/* Leaderboard Content */}
      <Paper
        sx={{
          borderRadius: 4,
          border: `1px solid ${colors.outlineVariant || '#e0e0e0'}`,
          overflow: 'hidden',
          backgroundColor: '#fff'
        }}
      >
        <Box sx={{ p: 3, borderBottom: `1px solid ${colors.outlineVariant || '#e0e0e0'}` }}>
          <Typography variant="h6" fontWeight={700} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmojiEventsIcon sx={{ color: '#FFD700' }} />
            Haftalık Liderlik Tablosu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            En yüksek XP'ye ve çalışma serisine sahip öğrenciler.
          </Typography>
        </Box>

        <List disablePadding>
          {LEADERBOARD_DATA.map((student, index) => (
            <React.Fragment key={student.id}>
              <ListItem
                sx={{
                  py: 2,
                  px: 3,
                  transition: 'background-color 0.2s',
                  '&:hover': { backgroundColor: 'rgba(0,0,0,0.02)' }
                }}
              >
                {/* Sıra Numarası ve Avatar */}
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 60 }}>
                  <Typography 
                    fontWeight={800} 
                    sx={{ width: 24, color: index < 3 ? getRankColor(index) : 'text.secondary' }}
                  >
                    {index + 1}.
                  </Typography>
                  <ListItemAvatar sx={{ minWidth: 50 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: index < 3 ? getRankColor(index) : colors.primary || '#1976d2',
                        color: index < 3 ? '#fff' : 'inherit',
                        width: 40, 
                        height: 40,
                        fontWeight: 'bold'
                      }}
                    >
                      {student.avatar}
                    </Avatar>
                  </ListItemAvatar>
                </Box>

                {/* İsim */}
                <ListItemText 
                  primary={
                    <Typography fontWeight={600} color="text.primary">
                      {student.name} {index === 1 && "(Sen)" /* Can kullanıcısı örneği */}
                    </Typography>
                  }
                />

                {/* İstatistikler (Streak, XP, Başarı) */}
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <Chip 
                    icon={<LocalFireDepartmentIcon sx={{ color: '#FF8A65 !important' }} />} 
                    label={`${student.streak} Gün`} 
                    size="small"
                    variant="outlined"
                    sx={{ fontWeight: 600, borderColor: 'rgba(255, 138, 101, 0.5)', bgcolor: 'rgba(255, 138, 101, 0.05)' }}
                  />
                  <Chip 
                    icon={<StarsIcon sx={{ color: '#4FC3F7 !important' }} />} 
                    label={`${student.xp.toLocaleString()} XP`} 
                    size="small"
                    variant="outlined"
                    sx={{ fontWeight: 600, borderColor: 'rgba(79, 195, 247, 0.5)', bgcolor: 'rgba(79, 195, 247, 0.05)' }}
                  />
                  <Chip 
                    icon={<VerifiedIcon sx={{ color: '#81C784 !important' }} />} 
                    label={`%${student.successRate}`} 
                    size="small"
                    variant="outlined"
                    sx={{ fontWeight: 600, borderColor: 'rgba(129, 199, 132, 0.5)', bgcolor: 'rgba(129, 199, 132, 0.05)' }}
                  />
                </Box>
              </ListItem>
              {index < LEADERBOARD_DATA.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Sayfanın Alt Kısmı: Grid Yapısı */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        
        {/* Sol Kolon: Canlı Aktivite Akışı */}
        <Grid item xs={12} md={7}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            ⚡ Canlı Akış
          </Typography>
          <Paper
            sx={{
              borderRadius: 4,
              border: `1px solid ${colors.outlineVariant || '#e0e0e0'}`,
              backgroundColor: '#fff',
              p: 2
            }}
          >
            <List disablePadding>
              {[
                { name: 'Emre K.', action: 'yeni bir rekor kırdı: 15 Günlük Seri! 🔥', time: '5 dk önce' },
                { name: 'Zeynep D.', action: 'B1 Seviye Atlama Sınavı\'nı %90 başarıyla tamamladı. 🏆', time: '12 dk önce' },
                { name: 'Burak Ş.', action: 'Gramer Bükücüler kulübüne katıldı.', time: '1 saat önce' },
              ].map((activity, i) => (
                <React.Fragment key={i}>
                  <ListItem sx={{ py: 1.5, px: 1 }}>
                    <ListItemAvatar>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: colors.secondary || '#9c27b0', fontSize: 14 }}>
                        {activity.name.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                      primary={
                        <Typography variant="body2">
                          <Box component="span" fontWeight={700}>{activity.name}</Box> {activity.action}
                        </Typography>
                      }
                      secondary={activity.time}
                    />
                  </ListItem>
                  {i !== 2 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
            <Button fullWidth sx={{ mt: 1, textTransform: 'none', fontWeight: 600 }}>
              Tüm Akışı Gör
            </Button>
          </Paper>
        </Grid>

        {/* Sağ Kolon: Önerilen Kulüpler */}
        <Grid item xs={12} md={5}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            🎯 Senin İçin Önerilen Kulüpler
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            {/* Kulüp Kartı 1 */}
            <Paper sx={{ p: 2, borderRadius: 3, border: `1px solid ${colors.outlineVariant || '#e0e0e0'}`, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'rgba(79, 195, 247, 0.1)', color: '#0288d1', width: 48, height: 48 }}>
                <ForumIcon />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={700} variant="body1">Sitcom Kulübü</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                  Friends, Modern Family ve How I Met Your Mother bölümlerini tartışarak günlük dinleme ve konuşma pratiği yapıyoruz.
                </Typography>
              </Box>
              <IconButton size="small" sx={{ bgcolor: 'rgba(0,0,0,0.04)' }}>
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Paper>

            {/* Kulüp Kartı 2 */}
            <Paper sx={{ p: 2, borderRadius: 3, border: `1px solid ${colors.outlineVariant || '#e0e0e0'}`, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'rgba(255, 138, 101, 0.1)', color: '#d84315', width: 48, height: 48 }}>
                <GroupsIcon />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography fontWeight={700} variant="body1">A2'den B1'e Sıçrayış</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                  Temel gramer eksiklerini kapatmak için haftalık düzenli çalışma grubu.
                </Typography>
              </Box>
              <IconButton size="small" sx={{ bgcolor: 'rgba(0,0,0,0.04)' }}>
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Paper>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}