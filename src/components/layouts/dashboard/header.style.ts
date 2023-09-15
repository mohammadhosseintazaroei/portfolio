import { type SxProps, type Theme } from '@mui/material';

const headerStyles: Record<string, SxProps<Theme>> = {
  logo: {
    transition: '.2s',
    width: 'auto',
    borderRadius: '0',
    height: '100px',
    cursor: 'pointer',
    '& img': {
      width: 'auto',
    },
  },
  headerWrapper: {
    boxShadow: 'none',
    background: 'none',
  },
  headerToolbar: {
    display: 'flex',
    minHeight: '72px !important',
    justifyContent: 'start',
    color: (theme) => theme.palette.neutral.light,
    py: 3,
    paddingLeft: '50px !important',
  },

  searchIconWrapper: {
    right: '16px',
    padding: '0',
    color: (theme) => theme.palette.neutral.dark,
  },
  menuContainer: {
    marginLeft: '50px',
  },
};

export default headerStyles;
