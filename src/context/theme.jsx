import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeContext ({ children }) {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#92dad9',
          },
          secondary: {
            main: '#eca4a4',
          }
        },
        shape: { 
          borderRadius: 10,
        }, 
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
