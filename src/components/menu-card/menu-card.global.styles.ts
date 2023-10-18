import { type SxProps, type Theme } from '@mui/material';

export const menuCardGlobalStyles: Record<string, SxProps<Theme>> = {
  cardWrapper: {
    width: '300px',
    height: '200px',
    background: (theme) => theme.palette.neutral.midnight,
    p: 1,
    borderRadius: 2,
    color: (theme) => theme.palette.neutral.lighter,
  },

  cardContent: {
    paddingX: 2,
    mt: 2,
  },
};
