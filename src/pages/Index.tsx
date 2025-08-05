import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 9, pb: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 6, 
            textAlign: 'center',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            borderRadius: 3,
          }}
        >
          <
          >
            Welcome to React Navbar Project
          </>
          
        </Paper>
      </Container>
    </Box>
  );
};

export default Index;