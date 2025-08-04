import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  Info,
  Business,
  ContactMail,
  Close,
} from '@mui/icons-material';

const Navbar = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navigationItems = [
    { label: 'Home', icon: <Home sx={{ mr: 1 }} />, href: '/' },
    { label: 'About', icon: <Info sx={{ mr: 1 }} />, href: '/about' },
    { label: 'Services', icon: <Business sx={{ mr: 1 }} />, href: '/services' },
    { label: 'Contact', icon: <ContactMail sx={{ mr: 1 }} />, href: '/contact' },
  ];

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
      {navigationItems.map((item) => (
        <Button
          key={item.label}
          color="inherit"
          href={item.href}
          startIcon={item.icon}
          sx={{
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  const renderMobileMenu = () => (
    <>
      <IconButton
        color="inherit"
        aria-label="open menu"
        onClick={handleMobileMenuOpen}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
          },
        }}
      >
        {navigationItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleMobileMenuClose}
            component="a"
            href={item.href}
            sx={{
              display: 'flex',
              alignItems: 'center',
              py: 1.5,
            }}
          >
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={2}
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '64px' }}>
          {/* Logo/Brand */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.5rem',
            }}
          >
            YourBrand
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {renderDesktopMenu()}
          </Box>

          {/* Mobile Navigation */}
          {renderMobileMenu()}

          {/* CTA Button */}
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              ml: 2,
              borderColor: 'rgba(255, 255, 255, 0.5)',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Get Started
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;