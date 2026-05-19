import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function HomePage() {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
        >
          Lab Test Report Analyzer
        </Typography>

        <Typography variant="h6">
          Upload your lab reports and get instant AI-powered medical insights.
        </Typography>
      </Paper>

      <Grid
        container
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Fast Analysis
              </Typography>

              <Typography>
                Analyze lab reports quickly and efficiently.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Smart Insights
              </Typography>

              <Typography>
                Get AI-generated health recommendations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">
                Secure Reports
              </Typography>

              <Typography>
                Store and review your reports safely.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

function UploadPage() {
  const [fileName, setFileName] = React.useState('');
  const [analysis, setAnalysis] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setFileName(file.name);
    setLoading(true);

    setTimeout(() => {
      setAnalysis(`
Hemoglobin: Normal
Blood Sugar: Slightly High
Vitamin D: Low

Recommendation:
Consult a doctor for detailed medical advice.
      `);

      setLoading(false);
    }, 2000);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
      >
        Upload Lab Report
      </Typography>

      <Button
        variant="contained"
        component="label"
      >
        Upload Report
        <input
          type="file"
          hidden
          onChange={handleFileUpload}
        />
      </Button>

      {fileName && (
        <Typography sx={{ mt: 2 }}>
          Uploaded File: {fileName}
        </Typography>
      )}

      {loading && (
        <Typography sx={{ mt: 2 }}>
          Analyzing report...
        </Typography>
      )}

      {analysis && (
        <Paper
          elevation={3}
          sx={{
            mt: 3,
            p: 3,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
          >
            Analysis Result
          </Typography>

          <Typography whiteSpace="pre-line">
            {analysis}
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

function DashboardPage() {
  const reports = [
    {
      name: 'Blood_Test_Report.pdf',
      result: 'Blood Sugar High',
    },
    {
      name: 'Vitamin_Report.pdf',
      result: 'Vitamin D Low',
    },
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
      >
        Dashboard
      </Typography>

      <Grid
        container
        spacing={3}
      >
        {reports.map((report, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={index}
          >
            <Card>
              <CardContent>
                <Typography variant="h6">
                  {report.name}
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  Result: {report.result}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
              >
                Lab Test Analyzer
              </Typography>

              <Button
                color="inherit"
                href="/"
              >
                Home
              </Button>

              <Button
                color="inherit"
                href="/upload"
              >
                Upload
              </Button>

              <Button
                color="inherit"
                href="/dashboard"
              >
                Dashboard
              </Button>
            </Toolbar>
          </AppBar>

          <Container
            maxWidth="lg"
            sx={{ py: 4, flex: 1 }}
          >
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />

              <Route
                path="/upload"
                element={<UploadPage />}
              />

              <Route
                path="/dashboard"
                element={<DashboardPage />}
              />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;