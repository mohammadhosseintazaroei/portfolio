import { type SxProps, type Theme } from '@mui/material';

export const headerStyles: Record<string, SxProps<Theme>> = {
  logo: {
    transition: '.2s',
    width: 'auto',
    borderRadius: '0',
    height: '60px',
    cursor: 'pointer',
    '& img': {
      width: 'auto',
    },
  },
  headerWrapper: {
    boxShadow: 'none',
    background: '#2e2e2e',
    position: 'sticky',
  },
  headerToolbar: {
    display: 'flex',
    minHeight: '72px !important',
    gap: '30px',
    justifyContent: 'start',
    color: (theme) => theme.palette.neutral.light,
    py: 2,
    paddingLeft: '50px !important',
    boxShadow: '0px 0px 12px 0px #0000002e',
  },
  headerToolbarMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    p: 2,
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

  menuWrapper: {
    display: 'flex',
    gap: '30px',
  },
  menuItemWrapper: {
    position: 'relative',
  },
  activeMenuItem: {
    color: (theme) => theme.palette.neutral.lighter,
  },
  menuCardWrapper: {
    position: 'absolute',
    // paddingTop: '20px',
    p: 1,
    left: '40%',
  },
  mobileMenuItemWrapper: {
    position: 'absolute',
    padding: '20px',
    left: 0,
    top: 0,
    paddingTop: '72px',
    background: '#2e2e2e',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  mobileLogo: {
    height: '40px',
    zIndex: 10,
  },
  mobileHeaderWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
};
