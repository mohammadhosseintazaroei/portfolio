import { useSnackbar, type VariantType, type ProviderContext } from 'notistack';
import React from 'react';

interface IProps {
  setUseSnackbarRef: (showSnackbar: ProviderContext) => void;
}

const InnerSnackbarUtilsConfigurator: React.FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef: ProviderContext;
const setUseSnackbarRef = (useSnackbarRefProp: ProviderContext) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />;

export default {
  success(msg: string) {
    this.snackbar(msg, 'success');
  },
  warning(msg: string) {
    this.snackbar(msg, 'warning');
  },
  info(msg: string) {
    this.snackbar(msg, 'info');
  },
  error(msg: string) {
    this.snackbar(msg, 'error');
  },
  snackbar(msg: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant,
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    });
  },
};
