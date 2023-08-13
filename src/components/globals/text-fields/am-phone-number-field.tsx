import { type OutlinedInputProps } from '@mui/material';
import { useState } from 'react';
import { checkMobileNumber, validateIranMobileNumber } from '../../../utils/mobile';
import AmTextField from './am-text-field';
interface Props extends Omit<OutlinedInputProps, 'onChange'> {
  textFieldProps?: OutlinedInputProps;
  index?: number;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

const AmPhoneNumberField = (props: Props) => {
  const { value, onChange } = props;
  const [error, setError] = useState<boolean>();
  const handleChange = (inputValue: string | undefined) => {
    if (inputValue == '') {
      onChange(inputValue);
      setError(false);
    }

    if (inputValue) {
      setError(true);
      const validatedMobileNumber: string = validateIranMobileNumber(inputValue);
      onChange(validatedMobileNumber);
      const mobileNumber = checkMobileNumber(validatedMobileNumber);
      if (mobileNumber) {
        onChange(mobileNumber);
        setError(false);
      }
    }
  };

  return (
    <AmTextField
      {...props.textFieldProps}
      {...props}
      onChange={handleChange}
      color={error ? 'error' : 'primary'}
      helperText={error ? 'شماره تلفن به درستی وارد نشده است' : ''}
      value={value}
    />
  );
};

export default AmPhoneNumberField;
