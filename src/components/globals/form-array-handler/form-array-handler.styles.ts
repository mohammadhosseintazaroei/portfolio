import { type SxProps, type Theme } from '@mui/material';

const formArrayHandler: Record<string, SxProps<Theme>> = {
  fullWidthBox: {
    width: '100%',
    height: '48px',
    '& > *': {
      minWidth: '100% !important',
    },
  },
  container: {
    marginBottom: '16px',
    marginTop: '0',
    '& .MuiGrid-item': {
      paddingTop: '0',
    },
  },
};

export default formArrayHandler;
