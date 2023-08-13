import { type SxProps, type Theme } from '@mui/material';

const priceFieldStyles: Record<string, SxProps<Theme>> = {
  textFieldsWrapper: {
    width: '100%',
    '& #outlined-adornment-weight': {
      height: '48px',
      padding: '0',
    },
  },
  formControl: {
    width: '100%',
  },
  priceInput: {
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '6px',
    paddingRight: '0',
    width: '100%',
    color: (theme: Theme) => theme.palette.neutral.main,

    '&.Mui-focused .material-icons ': {
      color: (theme: Theme) => theme.palette.primary.main,
    },
    '&.Mui-disabled .material-icons ': {
      color: '#c9c9c9',
    },
    '&.Mui-disabled .MuiInputAdornment-root ': {
      color: '#c9c9c9',
    },
    '&.Mui-disabled': {
      background: '#f2f2f2',
      color: '#c9c9c9',
    },
    '&.Mui-error .material-icons ': {
      color: (theme: Theme) => theme.status.error.main,
    },
    '&.Mui-focused.MuiInputBase-colorWarning .material-icons': {
      color: (theme: Theme) => theme.status.warning,
    },
    '&.Mui-focused.MuiInputBase-colorSuccess .material-icons': {
      color: (theme: Theme) => theme.status.success.main,
    },
    '&.Mui-focused.MuiInputBase-colorInfo .material-icons': {
      color: (theme: Theme) => theme.status.darkerInfo,
    },
    '&.Mui-focused.MuiInputBase-colorError .material-icons': {
      color: (theme: Theme) => theme.status.error.main,
    },
    '&.Mui-focused.MuiInputBase-colorPrimary .material-icons': {
      color: (theme: Theme) => theme.palette.primary.main,
    },
    '&.Mui-focused.MuiInputBase-colorSecondary .material-icons': {
      color: (theme: Theme) => theme.palette.secondary.main,
    },

    height: '48px',
    // TODO:
    // '&:hover .MuiOutlinedInput-notchedOutline': {
    //   border: (theme:Theme) => `1.5px solid ${theme.palette.primary.main}`,
    // },
    '& fieldset': {
      border: '1.5px solid #F2F2F2',
    },
    '&.Mui-disabled  fieldset': {
      border: 'none',
    },

    // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    //   border: (theme:Theme) => `2px solid ${theme.palette.primary.main}`,

    // },
    // '&.Mui-focused .material-icons': {
    //   color:"#D63C3C"
    // }
  },
  endAdornment: {
    color: (theme: Theme) => theme.palette.neutral.darker,
    fontSize: '12px',
  },
  startAdornment: {
    color: (theme: Theme) => theme.palette.neutral.darker,
    marginRight: '8px',
  },
  pricePlaceHolder: {
    color: '#000',
  },
  helperText: {
    fontSize: '14px',
    height: 0,
    marginLeft: '4px',
    marginTop: '4px',
  },
};

export default priceFieldStyles;
