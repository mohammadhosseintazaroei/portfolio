import { Autocomplete, type AutocompleteProps } from '@mui/material';
import {
  Controller,
  useFormContext,
  type FieldPath,
  type FieldValues,
  type FieldPathValue,
  type PathValue,
} from 'react-hook-form';

interface Props<T extends FieldValues, FieldName extends FieldPath<T>, U extends PathValue<T, FieldName>>
  extends AutocompleteProps<U, false, false, false> {
  name: FieldName;
  required?: boolean;
  freeSolo?: false;
  multiple?: false;
  disableClearable?: false;
  getFormValue?: (value: U) => PathValue<T, FieldName>;
  getFormDefaultValue: () => PathValue<T, FieldName>;
}

const FormAmAutocompleteField = <
  T extends FieldValues,
  FieldName extends FieldPath<T>,
  U extends FieldPathValue<T, FieldName>
>(
  props: Props<T, FieldName, U>
) => {
  const { name, getFormDefaultValue, getFormValue, ...acProps } = props;
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={props.name}
      control={control}
      rules={{ required: props.required }}
      // TODO handle error
      render={({ field: { onChange } }) => {
        return (
          <Autocomplete
            {...acProps}
            freeSolo={false}
            disableClearable={false}
            multiple={false}
            onChange={(_, v) => {
              if (v) {
                if (props.getFormValue) {
                  // TODO
                  // @ts-expect-error string
                  onChange(getFormValue(v));
                } else {
                  onChange(v);
                }
              } else {
                onChange(getFormDefaultValue());
              }
            }}
          />
        );
      }}
    />
  );
};
export default FormAmAutocompleteField;
