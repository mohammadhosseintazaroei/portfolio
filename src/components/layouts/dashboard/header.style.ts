import { type SxProps, type Theme } from '@mui/material';

export const headerStyles: Record<string, SxProps<Theme>> = {
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
  animateBorder: {
    background: (theme) => theme.palette.neutral.lighter,
    height: '6px',
    borderRadius: '10px 10px 100px 100px',
    position: 'absolute',
    color: '#fff0',
    transition: '500ms',
    '&.border:has(~ .pageClicked)': {
      color: 'red',
    },
  },
  menuItem: {
    color: (theme) => theme.palette.neutral.main,
    display: 'block',
    fontWeight: '400',
    cursor: 'pointer',
    '&:hover': {
      color: (theme) => theme.palette.neutral.light,
    },
    '&.pageClicked ~ .border': {
      display: 'flex',
    },
  },
};
