import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from '@mui/material'
import { useState } from 'react'
import Add from './components/Add'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

function App() {
  const [myMode, setmyMode] = useState('light')
  const theme = createTheme({
    palette: {
      mode: myMode,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' justifyContent='space-between' spacing={2}>
          <Sidebar myMode={myMode} setmyMode={setmyMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
