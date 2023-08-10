import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import CakeIcon from '@mui/icons-material/Cake'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function MenuLayout({titulo='',children}) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router=useRouter()

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout=async()=>{
    try{
      const response=await axios.post('/api/auth/logout')

      router.push('/Login')
    }
    catch(error){
      router.push('/Login')
    }
    
  }
  return (
    <>
      <Box sx={{ display: 'flex', paddingBottom: '30px' }}>
          <AppBar component="nav" position="static">
              <Container maxWidth="lg">
                  <Toolbar>
                      <IconButton
                          edge="start"
                          color="#31504F"
                          aria-label="open drawer"
                          sx={{ mr: 2 }}
                      >
                          <MenuIcon/>
                      </IconButton>
                      <Typography color='#31504F' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                          {titulo}
                      </Typography>
                      
                      {auth && (
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <CakeIcon fontSize='large' />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Perfil</MenuItem>
                        <MenuItem onClick={logout}>Cerrar Sesion</MenuItem>
                      </Menu>
                    </div>)}
                  </Toolbar>
              </Container>
          </AppBar>
      </Box>
      {children}
    </>
  )
}
