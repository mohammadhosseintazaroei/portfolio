import { Autocomplete, type AutocompleteProps } from '@mui/material';
import { useFormContext, type FieldPath, type FieldValues, type PathValue, useController } from 'react-hook-form';

interface Props<
  T extends FieldValues,
  FieldName extends FieldPath<T>,
  FreeFieldName extends FieldPath<T>,
  U extends PathValue<T, FieldName>
> extends AutocompleteProps<U | string, false, false, true> {
  itemName: FieldName;
  freeName: FreeFieldName;
  required?: boolean;
  freeSolo?: true;
  multiple?: false;
  disableClearable?: false;
  getFormValue?: (value: U) => PathValue<T, FieldName>;
  getFormDefaultValue: () => PathValue<T, FieldName>;
  getFormDefaultFreeValue: () => string;
}

const FormAmFreeAutocompleteField = <
  T extends FieldValues,
  FieldName extends FieldPath<T>,
  FreeFieldName extends FieldPath<T>,
  U extends PathValue<T, FieldName>
>(
  props: Props<T, FieldName, FreeFieldName, U>
) => {
  const { itemName, freeName, getFormValue, getFormDefaultValue, getFormDefaultFreeValue, ...acProps } = props;

  const { control } = useFormContext<T>();

  const { field } = useController({
    name: props.itemName,
    control,
  });

  const { field: freeField } = useController({
    name: props.freeName,
    control,
  });
  return (
    <Autocomplete
      {...acProps}
      freeSolo
      disableClearable={false}
      multiple={false}
      onInputChange={(e, v, r) => {
        freeField.onChange(v as any);
        field.onChange(getFormDefaultValue());
        props.onInputChange?.(e, v, r);
      }}
      onChange={(_, v) => {
        if (v === null) return;
        if (typeof v === 'string') {
          freeField.onChange(v as any);
          field.onChange(getFormDefaultValue());
        } else {
          field.onChange(getFormValue?.(v) ?? v);
          freeField.onChange(getFormDefaultFreeValue() as any);
        }
      }}
    />
  );
};
export default FormAmFreeAutocompleteField;
