import { type Theme, type SxProps, FormControlLabel, Checkbox } from '@mui/material';
import { Controller, useFormContext, type FieldPath, type FieldValues } from 'react-hook-form';
import amFormControlLabelStyles from './checkbox-provier.styles';

interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  sx: SxProps<Theme>;
  required?: boolean;
}
export function FormAmCheckBox<T extends FieldValues>(props: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={{ required: props.required }}
      render={({ field: { value, onChange }, formState: { errors: _errors } }) => (
        <FormControlLabel
          label={props.label}
          sx={{ ...amFormControlLabelStyles.checkBoxItem, ...props.sx } as SxProps<Theme>}
          // move onChange from FormControlLabel to Checkbox to avoid changing component from uncotrolled to controlled and vice verca
          control={<Checkbox onChange={onChange} checked={value} />}
        />
      )}
    />
  );
}
