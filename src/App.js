import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Booklist from './pages/Booklist';
import Createbook from './pages/Createbook';
import DataContext from './DataContext';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <DataContext>
    <Router>
          <Routes>
            <Route path="/" element={<Booklist/>}/>
            <Route path="/create" element={<Createbook/>}/>
          </Routes>
      </Router>
      </DataContext>
      </ThemeProvider>
  );
}

export default App;
