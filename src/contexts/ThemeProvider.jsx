import { Box, Container, CssBaseline } from '@mui/material'
import React from 'react'

const ThemeContext = React.createContext({})

export default function ThemeProvider(props) {
  const { children } = props
  return (
    <ThemeContext.Provider value={{}}>
      <CssBaseline/>
      <Box sx={{minHeight:"100vh", bgcolor:"primary.light"}}>
      <Container>
        {children}
      </Container>
      </Box>
    </ThemeContext.Provider>
  )
}
