import { type OutlinedInputProps } from '@mui/material';
import { type ReactNode } from 'react';
import { Controller, useFormContext, type FieldPath, type FieldValues } from 'react-hook-form';
import AmPhoneNumberField from '../text-fields/am-phone-number-field';

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  textFieldProps?: OutlinedInputProps;
  required?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  helperText?: string;
}

export function FormAmPhoneNumberField<T extends FieldValues>(props: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={props.name}
      control={control}
      rules={{ required: props.required }}
      render={({ field: { value, onChange }, formState: { errors } }) => (
        <AmPhoneNumberField
          {...props.textFieldProps}
          error={!!errors[props.name]}
          // TODO: fix eslint any type error
          onChange={(e: any) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            onChange(e);
          }}
          value={value}
        />
      )}
    />
  );
}
