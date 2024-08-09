import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Dashboard', url: '/dashboard' },
  { label: 'Settings', url: '/dashboard/settings' },
  { label: 'Spatial', url: '/spatial'}
]

const ButtonAppBar = () => {
  return (
    <nav>
      <Box sx={{ textAlign: 'center' }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button href={item.url} key={item.label} sx={{ color: '#fff' }}>
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}

export default ButtonAppBar