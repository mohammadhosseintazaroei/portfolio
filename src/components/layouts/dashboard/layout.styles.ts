import { type SxProps, type Theme } from '@mui/material';

const layoutStyles: Record<string, SxProps<Theme>> = {
  mainContainerBox: {
    display: 'flex',
    minHeight: '100vh',
  },
  mainComponentBox: {
    flexGrow: 1,
    p: 3,
    overflow: 'clip',
    padding: 0,
    background: '#fafafa',
  },
  contentBox: {
    padding: '16px 24px 0 24px',
  },
};

export default layoutStyles;
