import { type Theme } from '@mui/material';
const styles = (theme: Theme) => {
  return {
    headerWrapper: {
      boxShadow: 'none',
      background: 'none',
    },
    headerToolbar: {
      display: 'flex',
      minHeight: '72px !important',
      justifyContent: 'space-between',
      color: theme.palette.neutral.light,
      py: '42px',
      paddingLeft: '60px !important',
    },

    searchIconWrapper: {
      right: '16px',
      padding: '0',
      color: theme.palette.neutral.dark,
    },
  };
};

export default styles;
