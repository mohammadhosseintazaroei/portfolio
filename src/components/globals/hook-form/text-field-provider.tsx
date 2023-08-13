import { type OutlinedInputProps } from '@mui/material';
import { type ReactNode } from 'react';
import { Controller, useFormContext, type FieldPath, type FieldValues } from 'react-hook-form';
import AmTextField from '../text-fields/am-text-field';

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  textFieldProps?: OutlinedInputProps;
  required?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  helperText?: string;
}
export function FormAmTextField<T extends FieldValues>(props: Props<T>) {
  const { control } = useFormContext<T>();
  const { helperText } = props;

  return (
    <Controller
      name={props.name}
      control={control}
      rules={{ required: props.required }}
      render={({ field: { value, onChange }, formState: { errors } }) => (
        <AmTextField
          {...props.textFieldProps}
          error={!!errors[props.name]}
          color={!!errors[props.name] ? 'error' : 'primary'}
          helperText={helperText}
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
