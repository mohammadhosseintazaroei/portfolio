import { type SxProps, type Theme } from '@mui/material';

const sidebarStyles: Record<string, SxProps<Theme>> = {
  drawerHeader: {
    minHeight: '80px !important',
  },
  list: {
    paddingTop: '0',
    paddingBottom: '0 ',
  },
  bottomList: {
    position: 'absolute' as const,
    bottom: '16px',
    left: '0',
    right: '0',
  },
  listItem: {
    alignItems: 'center',
    paddingBottom: '4px',
    paddingTop: '0',
    paddingLeft: '6px',
    paddingRight: '0',
  },
  menuItemIcon: {
    minWidth: '36px',
  },
  menuIcon: {
    border: 'none',
    margin: '0',
    color: (theme: Theme) => theme.palette.neutral.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIconNightMode: {
    color: (theme: Theme) => theme.palette.neutral.light,
    border: 'none',
  },
  menuIconLightMode: { color: (theme: Theme) => theme.palette.neutral.main },
  menuIconClicked: {
    color: (theme: Theme) => theme.palette.neutral.light,
    border: 'none',
  },
  listButton: {
    display: 'block',
    minWidth: '100%',
    maxHeight: '48px',
    height: '48px',
    marginBottom: '12px',
    paddingBottom: '0',
    paddingTop: '0',
    color: (theme: Theme) => theme.palette.neutral.dark,
    border: '1.5px solid #fff !important',
    marginRight: '16px',
    marginLeft: '16px',
    borderRadius: '6px',
    transition: 'min-width .1s ease-in-out',
  },
  listButtonClose: {
    width: '48px',
    border: (theme: Theme) => `1.5px solid ${theme.palette.neutral.light}`,
    minWidth: '48px',
    color: (theme: Theme) => theme.palette.neutral.dark,
    transition: 'all .1s ease-in-out, border .2s',
  },
  listButtonNightMode: {
    backgroundColor: (theme: Theme) => theme.palette.neutral.darker,
    color: (theme: Theme) => theme.palette.neutral.light,
    border: 'none',
    '&:hover': {
      background: (theme: Theme) => theme.palette.neutral.main,
    },
  },
  listButtonClicked: {
    backgroundColor: (theme: Theme) => theme.palette.primary.main,
    color: (theme: Theme) => theme.palette.neutral.light,
    border: 'none',
    '&:hover': {
      background: (theme: Theme) => theme.palette.primary.dark,
    },
  },
  sideBarDivider: {
    margin: '0 16px 16px 16px',
  },
  sidebarLogoMenu: {
    cursor: 'pointer',
    transition: '.2s',
    width: 'auto',
    borderRadius: '0',
    maxHeight: '26px',
  },
  sidebarLogoMenuHide: {
    opacity: '0',
  },
  sidebarPersianLogoMenu: {
    position: 'absolute' as const,
    left: '10px',
    transition: '.2s',
    width: 'auto',
    borderRadius: '0',
    height: '20px',
    cursor: 'pointer',
  },
  sidebarPersianLogoMenuHide: {
    transform: 'translateY(-60px)',
  },
  closeButton: {
    position: 'absolute' as const,
    zIndex: 100,
  },
  menuTextClose: {
    transition: '.3s',
    opacity: '0',
  },
};

export default sidebarStyles;
