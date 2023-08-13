import { type Theme } from '@mui/material';
const styles = (theme: Theme) => {
  return {
    // header
    headerWrapper: {
      boxShadow: 'none',
    },
    headerToolbar: {
      display: 'flex',
      minHeight: '72px !important',
      justifyContent: 'space-between',
      background: '#fff',
      color: theme.palette.neutral.dark,
      borderBottom: `1px solid ${theme.palette.neutral.light}`,
    },
    profileButtonWrapper: {
      // marginLeft: "24px"
      // minWidth: "207px",

      minWidth: {
        xs: '112px',
        sm: '212px',
      },
    },

    profileButton: {
      padding: '4.5px 0',
      color: theme.palette.neutral.dark,
      minHeight: '40px',
      minWidth: '40px',
      maxHeight: '40px',
      border: {
        xs: `1.5px solid ${theme.palette.neutral.light}`,
        sm: 'none',
      },
    },
    profileUserName: {
      fontSize: '14px',
      fontWeight: '600',
      color: theme.palette.neutral.main,
      marginRight: '12px',
      display: {
        xs: 'none',
        sm: 'block',
      },
    },
    profileArrowIcon: {
      alignSelf: 'center',
      display: {
        xs: 'none',
        sm: 'block',
      },
    },
    profileUserIcon: {
      marginRight: {
        xs: '0',
        sm: '8px',
      },
    },

    bellButton: {
      minHeight: '40px',
      minWidth: '40px',
      maxHeight: '40px',
      maxWidth: '40px',
      padding: '0',
      background: '#fff',
      color: theme.palette.neutral.main,
      boxShadow: 'none',
      border: `1.5px solid ${theme.palette.neutral.light}`,
    },
    bellButtonBadge: {
      marginRight: '32px',

      '& .MuiBadge-badge': {
        backgroundColor: 'rgba(214, 60, 60, 0.1)',
        color: theme.status.error.main,
        width: '23px',
        height: '24px',
        borderRadius: '50%',
        right: '5px',
        bottom: '5px',
      },
    },
    searchWrapper: {
      maxWidth: '480px',
      height: '48px',
      background: '#fff',

      border: '1.5px solid #F2F2F2',
      paddingRight: '44px',
      borderRadius: '6px',
    },
    searchInput: {
      height: '48px',
      width: '100%',
      fontSize: '16px',
      fontWeight: '500',
      display: {
        xs: 'none',
        sm: 'block',
      },
    },
    searchIconWrapper: {
      right: '16px',
      padding: '0',
      color: theme.palette.neutral.dark,
    },
    breadcrumbsWrapper: {
      maxWidth: '400px',
      width: '308px',
    },
    breadcrumbsLink: {
      textDecoration: 'none',
    },
  };
};

export default styles;
