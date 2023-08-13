import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  type OutlinedInputProps,
} from '@mui/material';
import { type ReactNode } from 'react';
import { sxSeparator } from '../../../utils/sxSeparator';
import textFieldStyles from './text-field.style';

export interface Props extends Omit<OutlinedInputProps, 'onChange'> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  helperText?: string | false;
  onChange?: (value: string | undefined) => void;
}

const AmTextField = (props: Props) => {
  const { startAdornment, endAdornment, onChange, helperText, sx, ...inputProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onChange) onChange(value);
  };

  return (
    <Box sx={textFieldStyles.textFieldsWrapper}>
      <FormControl sx={textFieldStyles.formControl} variant="outlined">
        <InputLabel>{props.label}</InputLabel>

        <OutlinedInput
          {...inputProps}
          color={props.color}
          onChange={handleChange}
          sx={[sxSeparator(textFieldStyles.priceInput), sx && sxSeparator(sx)]}
          startAdornment={<InputAdornment position="start">{startAdornment}</InputAdornment>}
          endAdornment={endAdornment}
        />
      </FormControl>

      {helperText && <Typography sx={textFieldStyles.helperText}>{helperText}</Typography>}
    </Box>
  );
};

export default AmTextField;
