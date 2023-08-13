import { type SxProps, type Theme } from '@mui/material';

const increaseDecreaseButtonStyles: Record<string, SxProps<Theme>> = {
  inquiryCandidateButton: {
    maxHeight: '48px',
    borderRadius: '6px',
    padding: 0,
    maxWidth: '48px',
    minWidth: '48px',
    height: '48px',
  },
  increaseButton: {
    background: (theme: Theme) => theme.status.success.lighter,
  },
  decreaseButton: {
    background: (theme: Theme) => theme.status.error.lighter,
    '&.Mui-disabled': {
      background: '#eee',
      '& .material-icons': {
        color: '#C9C9C9',
      },
    },
  },
  plusIcon: {
    color: (theme: Theme) => theme.status.success.main,
  },
  minusIcon: {
    color: (theme: Theme) => theme.status.error.main,
  },
};

export default increaseDecreaseButtonStyles;
