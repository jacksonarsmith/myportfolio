import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Landing from './pages/Landing'
import Navbar from './components/navbar/Navbar'
import './App.css'
import MobileSpeedDial from './components/mobile-speed-dial/MobileSpeedDial'

const lightTheme = createTheme({
  palette: {
      mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
      mode: 'dark',
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
  };

  return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <Router>
              <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
              <Routes>
                  <Route path="/" element={<Landing />} />
              </Routes>
              <MobileSpeedDial />
          </Router>
      </ThemeProvider>
  );
}

export default App;
