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
            <Box sx={{ display: 'flex' }}>

                <ThemeProvider theme={darkTheme}>
                    <AppBar component="nav" position="static">
                        <Container maxWidth="lg">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    sx={{ mr: 2 }}
                                >
                                    <CakeIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
