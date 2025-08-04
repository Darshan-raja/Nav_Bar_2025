import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 8, pb: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 6, 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: 3,
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: '#1976d2',
              mb: 3,
            }}
          >
            Welcome to Your App
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            sx={{ 
              color: '#666',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Your beautiful Material UI navbar is ready! Navigate through the menu items to explore your application.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Index;
