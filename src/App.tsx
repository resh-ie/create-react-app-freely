import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

// import SFProDisplay from './assets/fonts/SFProDisplay-Regular.ttf';
import Sidenav from './components/NavBar/SideBar';
import Home from './pages/Home';
import Trip from './pages/Trip';
import Trips from './pages/Trips';
import { fetchTripsData } from './utils/mockApi';

const theme = createTheme({
  typography: {
    fontFamily: 'SF Pro Display, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('SF Pro Display'), local('SF Pro Display-Regular'), url('./assets/fonts/SFProDisplay-Regular.ttf') format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

const App = () => {
  useEffect(() => {
    fetchTripsData().then((data) => console.log(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          fontFamily: 'SF Pro Display',
        }}
      >
        <div className='App'>
          <Sidenav />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/trips' element={<Trips />} />
              <Route path='/trips/:tripId' element={<Trip />} />
            </Routes>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default App;
