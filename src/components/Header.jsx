import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CakeIcon from '@mui/icons-material/Cake'

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#92dad9',
        },
    },
});

export const Header = () => {
    return (
        <>
            <Box sx={{ display: 'flex', paddingBottom: '30px' }}>

                <ThemeProvider theme={darkTheme}>
                    <AppBar component="nav" position="static">
                        <Container maxWidth="lg">
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="#31504F"
                                    aria-label="open drawer"
                                    sx={{ mr: 2 }}
                                >
                                    <CakeIcon fontSize='large'/>
                                </IconButton>
                                <Typography color='#31504F' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                    Tortas
                                </Typography>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </ThemeProvider>
            </Box>
        </>
    )
}
