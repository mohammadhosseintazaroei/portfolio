import { createTheme } from '@mui/material';
import YekanBakh from '@src/assets/fonts/YekanBakh/YekanBakhFaNum-VF.ttf';
import { type CSSProperties } from 'react';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    status: {
      success: {
        main: CSSProperties['color'];
        lighter: CSSProperties['color'];
      };
      error: {
        main: CSSProperties['color'];
        lighter: CSSProperties['color'];
      };
      warning: CSSProperties['color'];
      info: CSSProperties['color'];
      darkerInfo: CSSProperties['color'];
    };
  }
  interface DeprecatedThemeOptions {
    status: {
      success: {
        main: CSSProperties['color'];
        lighter: CSSProperties['color'];
      };
      error: {
        main: CSSProperties['color'];
        lighter: CSSProperties['color'];
      };
      warning: CSSProperties['color'];
      info: CSSProperties['color'];
      darkerInfo: CSSProperties['color'];
    };
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    lighter?: string;
    lightest?: string;
    darker?: string;
    midnight?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    lightest?: string;
    darker?: string;
    midnight?: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;
    heading5: React.CSSProperties;
    heading6: React.CSSProperties;
    bodyCopyXL: React.CSSProperties;
    bodyCopyL: React.CSSProperties;
    bodyCopyM: React.CSSProperties;
    bodyCopyS: React.CSSProperties;
    bodyCopyXS: React.CSSProperties;
    bodyCopyT: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    heading4?: React.CSSProperties;
    heading5?: React.CSSProperties;
    heading6?: React.CSSProperties;
    bodyCopyXL?: React.CSSProperties;
    bodyCopyL?: React.CSSProperties;
    bodyCopyM?: React.CSSProperties;
    bodyCopyS?: React.CSSProperties;
    bodyCopyXS?: React.CSSProperties;
    bodyCopyT?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    // uncomment to disable default variants -Mehran :)
    // h1: false;
    // h2: false;
    // h3: false;
    // h4: false;
    // h5: false;
    // h6: false;
    // body1: false;
    // body2: false;
    // subtitle1: false;
    // subtitle2: false;
    // caption: false;
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    body1: true;
    body2: true;
    subtitle1: true;
    subtitle2: true;
    caption: true;
    heading1: true;
    heading2: true;
    heading3: true;
    heading4: true;
    heading5: true;
    heading6: true;
    bodyCopyXL: true;
    bodyCopyL: true;
    bodyCopyM: true;
    bodyCopyS: true;
    bodyCopyXS: true;
    bodyCopyT: true;
  }
}

export const mainTheme = createTheme({
  direction: 'ltr',

  typography: {
    allVariants: {
      fontFamily: '"Yekan Bakh", serif',
      lineHeight: '180%',
    },
    heading1: {
      fontSize: 36,
    },
    heading2: {
      fontSize: 32,
    },
    heading3: {
      fontSize: 28,
    },
    heading4: {
      fontSize: 24,
    },
    heading5: {
      fontSize: 22,
    },
    heading6: {
      fontSize: 20,
    },
    bodyCopyXL: {
      fontSize: 20,
    },
    bodyCopyL: {
      fontSize: 18,
    },
    bodyCopyM: {
      fontSize: 16,
    },
    bodyCopyS: {
      fontSize: 14,
    },
    bodyCopyXS: {
      fontSize: 12,
    },
    bodyCopyT: {
      fontSize: 10,
      letterSpacing: 0,
      textTransform: 'none',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  //TODO: add custom shadows if needed
  // shadows: [
  //   ...createTheme({}).shadows.map((shadow, i) =>
  //     i === 1
  //       ? '0px 2px 4px rgba(0, 0, 0, 0.04)'
  //       : i === 2
  //       ? '0px 2px 4px rgba(0, 0, 0, 0.08)'
  //       : i === 3
  //       ? '0px 4px 8px rgba(0, 0, 0, 0.02)'
  //       : i === 4
  //       ? '0px 4px 8px rgba(0, 0, 0, 0.04)'
  //       : i === 5
  //       ? '0px 8px 16px rgba(0, 0, 0, 0.02)'
  //       : i === 6
  //       ? '0px 8px 16px rgba(0, 0, 0, 0.04)'
  //       : shadow
  //   ),
  // ],

  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          textDecoration: 'none',
          color: theme.palette.neutral.main,
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
        font-family: "Yekan Bakh";
        font-style: normal;
        font-weight: auto;
        src: url(${YekanBakh});
        font-display: swap;
  }
      `,
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Yekan Bakh, sans-serif',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#6F63F2',
      light: '#ebebfc',
      dark: '#5F26D1',
      lighter: 'rgba(236, 235, 255, 0.4)',
      lightest: 'rgba(236, 235, 255, 0.2)',
    },
    secondary: {
      main: '#F5B414',
      light: '#FFF2D1',
      dark: '#EB9100',
    },

    neutral: {
      main: '#707070',
      light: '#C6C6C6',
      midnight: '#3e3e3e',
      dark: '#3F3F3F',
      lighter: '#FFFFFF',
      darker: '#212121',
    },
  },
  // FIXME -Mehran: fix types
  // @ts-expect-error annoying MUI type error
  status: {
    success: {
      main: '#1B9650',
      lighter: 'rgba(36, 145, 83, 0.1)',
    },
    error: {
      main: '#D63333',
      lighter: 'rgba(214, 60, 60, 0.1)',
    },
    warning: '#F2811D',
    info: '#00BCD4',
  },
});
