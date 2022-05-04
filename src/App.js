import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import Booklist from './pages/Booklist';
import Createbook from './pages/Createbook';
import DataContext from './DataContext';
import ResponsiveAppBar from './components/AppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: grey[50]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <DataContext>
          <Routes>
            <Route path="/" element={<Booklist />} />
            <Route path="/create" element={<Createbook />} />
          </Routes>
        </DataContext>
      </Router>
    </ThemeProvider>
  );
}

export default App;
