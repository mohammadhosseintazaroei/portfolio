import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { mainTheme } from '../src/theme/main-theme';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      main: mainTheme,
    },
    defaultTheme: 'main',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
