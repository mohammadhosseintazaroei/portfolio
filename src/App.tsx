import { CssBaseline, ThemeProvider } from '@mui/material';
import { LicenseInfo } from '@mui/x-data-grid-premium';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarUtilsConfigurator } from './components/globals/snackbar';
import { LanguageProvider } from './contexts/language';
import PanelRouter from './router';
import { mainTheme } from './theme/main-theme';

LicenseInfo.setLicenseKey(
  '056cdf25074729259a578a67c10461b8Tz0xLEU9OTk5OTk5OTk5OTk5OTk5OTksUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
);

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
              <LanguageProvider>
                <SnackbarUtilsConfigurator />
                <CssBaseline />
                <PanelRouter />
              </LanguageProvider>
            </LocalizationProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
