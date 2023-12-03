import { type SxProps, type Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  homeCardInfoCardWrapper: {
    marginTop: 1,
  },
  profile: {
    borderRadius: '50%',
  },
  repoCardWrapper: {
    mt: 1,
  },
  topRight: {
    transform: `translateX(-20px)`,
  },
  topLeft: {
    transform: `translateX(20px)`,
  },
  bottomRight: {
    transform: `translateX(-20px)`,
  },
  bottomLeft: {
    transform: `translateX(20px)`,
  },
};

export default styles;
