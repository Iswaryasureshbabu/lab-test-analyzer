import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Lab Test Analyzer
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Upload</Button>
              <Button color="inherit">Dashboard</Button>
            </Toolbar>
          </AppBar>

          <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" gutterBottom>
                Lab Test Report Analyzer
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Upload your lab reports and get AI-powered medical insights
              </Typography>
            </Box>

            <Routes>
              <Route path="/" element={<Typography>Welcome! Upload your lab reports to get started.</Typography>} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
