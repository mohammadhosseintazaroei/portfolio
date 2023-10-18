import { type SxProps, type Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  headerWrapper: {
    color: (theme) => theme.palette.neutral.lightest,
  },

  headerMenuItem: {
    marginRight: 1,
  },
  homeCardContent: {
    mt: 1,
  },
  homeCardInfoCardWrapper: {
    mt: 1,
  },
  homeCardInfoCard: {
    borderRadius: 2,
  },
};

export default styles;
