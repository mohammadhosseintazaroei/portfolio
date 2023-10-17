import { type SxProps, type Theme } from '@mui/material';

const layoutStyles: Record<string, SxProps<Theme>> = {
  mainContainerBox: {
    display: 'flex',
    background: 'red',
    minHeight: '100vh',
  },
  mainComponentBox: {
    flexGrow: 1,
    p: 3,
    overflow: 'clip',
    padding: 0,
    background: (theme) => theme.palette.neutral.darker,
  },
  contentBox: {
    padding: '16px 24px 0 24px',
  },
};

export default layoutStyles;
