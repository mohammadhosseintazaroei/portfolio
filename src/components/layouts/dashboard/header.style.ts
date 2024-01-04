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
    position: 'sticky',
  },
  headerToolbar: {
    display: 'flex',
    minHeight: '72px !important',
    gap: '50px',
    justifyContent: 'start',
    color: (theme) => theme.palette.neutral.light,
    py: 3,
    paddingLeft: '50px !important',
  },
  headerToolbarMobile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchIconWrapper: {
    right: '16px',
    padding: '0',
    color: (theme) => theme.palette.neutral.dark,
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
  hamburgerMenuButton: {
    zIndex: 10,
    color: (theme) => theme.palette.neutral.light,
  },
  mobileMenuItem: { marginRight: '50px', position: 'relative' },
  mobileMenuItemText: {
    py: 1,
  },
  menuWrapper: {
    display: 'flex',
    gap: '50px',
  },
  menuItemWrapper: {
    position: 'relative',
  },
  activeMenuItem: {
    color: (theme) => theme.palette.neutral.lighter,
  },
  menuCardWrapper: {
    position: 'absolute',
    paddingTop: '20px',
    left: '40%',
  },
  mobileMenuItemWrapper: {
    position: 'absolute',
    padding: '20px',
    left: '0%',
    top: 0,
    background: '#3A3A3A',
    width: '100vw',
    height: '100vh',
  },
};
