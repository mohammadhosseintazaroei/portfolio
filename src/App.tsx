import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LicenseInfo } from '@mui/x-data-grid-premium';
import { BrowserRouter } from 'react-router-dom';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { LanguageProvider } from './contexts/language';
import PanelRouter from './router';
import { mainTheme } from './theme/main-theme';
import { SnackbarUtilsConfigurator } from './components/globals/snackbar';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { LocalizationProvider } from '@mui/x-date-pickers';

LicenseInfo.setLicenseKey(
  '056cdf25074729259a578a67c10461b8Tz0xLEU9OTk5OTk5OTk5OTk5OTk5OTksUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
);

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
  prepend: true,
});

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
          <CacheProvider value={cacheRtl}>
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
          </CacheProvider>
    </BrowserRouter>
  );
}

export default App;
