import { type SxProps, type Theme } from '@mui/material';

const amFormControlLabelStyles: Record<string, SxProps<Theme>> = {
  checkBoxItem: {
    marginLeft: '0',
    marginRight: '0',
    color: (theme: Theme) => theme.palette.neutral.main,
    '& .MuiFormControlLabel-label': {
      fontWeight: '500',
      fontSize: '14px',
    },
    '& .MuiCheckbox-root': {
      paddingRight: '8px',
      paddingLeft: '8px',
    },
    '& .MuiSvgIcon-root': { fontSize: 20 },
  } as const,
};

export default amFormControlLabelStyles;
