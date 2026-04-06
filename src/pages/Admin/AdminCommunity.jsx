import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';

// İkonlar
import PeopleIcon from '@mui/icons-material/People';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ForumIcon from '@mui/icons-material/Forum';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CampaignIcon from '@mui/icons-material/Campaign';

import colors from '../../theme/colors';

// Örnek Moderasyon Verisi
const REPORTED_USERS = [
  { id: 1, user: 'Ali Veli', reason: 'Uygunsuz Dil', status: 'Bekliyor', date: '06 Nisan 2026' },
  { id: 2, user: 'Ayşe K.', reason: 'Spam Mesaj', status: 'İnceleniyor', date: '06 Nisan 2026' },
  { id: 3, user: 'Kaan B.', reason: 'Kulüp Kuralları İhlali', status: 'Bekliyor', date: '05 Nisan 2026' },
];

export default function AdminCommunity() {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={800}>
          Topluluk Yönetimi
        </Typography>
        <Typography sx={{ fontSize: 14, color: colors.onSurfaceVariant || 'text.secondary' }}>
          Kullanıcı etkileşimlerini, şikayetleri ve kulüpleri buradan yönetin.
        </Typography>
      </Box>

      {/* Üst İstatistik Kartları */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { title: 'Aktif Kullanıcılar', value: '1,248', icon: <PeopleIcon color="primary" />, bg: 'rgba(25, 118, 210, 0.1)' },
          { title: 'Aktif Kulüpler', value: '34', icon: <ForumIcon color="success" />, bg: 'rgba(46, 125, 50, 0.1)' },
          { title: 'Bekleyen Şikayetler', value: '12', icon: <ReportProblemIcon color="error" />, bg: 'rgba(211, 47, 47, 0.1)' },
        ].map((stat, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 3, borderRadius: 3, border: `1px solid ${colors.outlineVariant || '#e0e0e0'}`, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: stat.bg, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {stat.icon}
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={800}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={600}>{stat.title}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Alt İçerik Alanı: Moderasyon ve Duyurular */}
      <Grid container spacing={3}>
        
        {/* Sol Taraf: Moderasyon Tablosu */}
        <Grid item xs={12} md={8}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            🛡️ Bekleyen Moderasyon İşlemleri
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 3, border: `1px solid ${colors.outlineVariant || '#e0e0e0'}`, boxShadow: 'none' }}>
            <Table>
              <TableHead sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                <TableRow>
                  <TableCell fontWeight={600}>Kullanıcı</TableCell>
                  <TableCell fontWeight={600}>Şikayet Sebebi</TableCell>
                  <TableCell fontWeight={600}>Tarih</TableCell>
                  <TableCell align="center" fontWeight={600}>İşlemler</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {REPORTED_USERS.map((row) => (
                  <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" fontWeight={600}>
                      {row.user}
                    </TableCell>
                    <TableCell>
                      <Chip label={row.reason} size="small" color="warning" variant="outlined" />
                    </TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>{row.date}</TableCell>
                    <TableCell align="center">
                      {/* İgnore/Temizle Butonu */}
                      <IconButton size="small" color="success" title="Sorun Yok">
                        <CheckCircleIcon fontSize="small" />
                      </IconButton>
                      {/* Mesajı Sil Butonu */}
                      <IconButton size="small" color="warning" title="İçeriği Sil">
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                      {/* Kullanıcıyı Banla Butonu */}
                      <IconButton size="small" color="error" title="Kullanıcıyı Engelle">
                        <BlockIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Sağ Taraf: Hızlı İşlemler / Duyuru */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            📢 Genel Duyuru Yayınla
          </Typography>
          <Paper sx={{ p: 3, borderRadius: 3, border: `1px solid ${colors.outlineVariant || '#e0e0e0'}` }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Buradan yazacağınız mesaj, kullanıcıların topluluk sayfasındaki "Canlı Akış" bölümüne sistem mesajı olarak düşer.
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Örn: Bu pazar saat 20:00'da İngilizce Mülakat Pratiği odası açılacaktır, hepinizi bekliyoruz!"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button 
              variant="contained" 
              fullWidth 
              startIcon={<CampaignIcon />}
              sx={{ backgroundColor: colors.primary, color: '#fff', fontWeight: 600, textTransform: 'none', py: 1 }}
            >
              Duyuruyu Gönder
            </Button>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}