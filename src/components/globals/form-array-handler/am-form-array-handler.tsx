import { Box, Grid, type GridProps } from '@mui/material';
import React from 'react';
import { useFieldArray, type Control, type FieldArrayPath, type FieldValues } from 'react-hook-form';
import { sxSeparator } from '../../../utils/sxSeparator';
import FormArrayHandlerDecreaseButton from './am-form-array-handler-decrease-button';
import FormArrayHandlerIncreaseButton from './am-form-array-handler-increase-button';
import formArrayHandler from './form-array-handler.styles';

type Position = 'start' | 'end' | 'center';
interface ButtonGridSizes extends Pick<GridProps, 'xs' | 'xl' | 'sm' | 'md' | 'lg'> {}

// ToDo Suggest: handle states like this: { increaseButton: { gridSizes:ButtonGridSizes, fulllWidth: boolean }, decreaseButton: { gridSizes:ButtonGridSizes, fulllWidth: boolean } }

interface Props<T extends FieldValues> {
  renderComponent: (index: number, keyName: FieldArrayPath<T>) => React.ReactNode;
  renderIncreaseButton?: (index?: number) => React.ReactNode;
  renderDecreaseButton?: (disabled?: boolean) => React.ReactNode;
  increaseButtonPosition?: Position | undefined;
  decreaseButtonPosition?: Position | undefined;
  increaseButtonGridSizes?: ButtonGridSizes;
  decreaseButtonGridSizes?: ButtonGridSizes;
  increaseButtonFullWidth?: boolean;
  decreaseButtonFullWidth?: boolean;
  control: Control<T>;
  keyName: FieldArrayPath<T>;
  getDefaultValue: () => T[FieldArrayPath<T>];
}

const AmFormArrayHandler = <T extends FieldValues>(props: Props<T>) => {
  const {
    renderComponent,
    renderIncreaseButton,
    renderDecreaseButton,
    increaseButtonPosition,
    // TODO: fix crease button customization
    // decreaseButtonPosition,
    increaseButtonGridSizes,
    // decreaseButtonGridSizes,
    increaseButtonFullWidth,
    // decreaseButtonFullWidth,
    control,
    keyName,
    getDefaultValue,
  } = props;
  const { fields, append, remove } = useFieldArray<T>({
    control: control,
    name: keyName,
  });

  const handleRemove = (index: number) => () => {
    remove(index);
  };

  const addItem = async () => {
    append(getDefaultValue());
  };

  return (
    <>
      {fields.map((item, index) => (
        <Box key={item.id} sx={{ display: 'flex' }}>
          <Box onClick={fields.length !== 1 ? handleRemove(index) : undefined} sx={{ marginRight: '10px' }}>
            {renderDecreaseButton?.(fields.length === 1) ?? (
              <FormArrayHandlerDecreaseButton disabled={fields.length === 1} />
            )}
          </Box>

          <Grid container spacing={1.5} sx={formArrayHandler.container}>
            {renderComponent(index, keyName)}
          </Grid>
        </Box>
      ))}
      <Grid
        container
        justifyContent={increaseButtonPosition && increaseButtonFullWidth ? increaseButtonPosition : 'start'}
      >
        <Grid
          item
          {...increaseButtonGridSizes}
          sx={{
            display: 'flex',
            justifyContent: `${increaseButtonPosition ? increaseButtonPosition : 'start'}`,
          }}
        >
          <Box sx={[sxSeparator(increaseButtonFullWidth ? formArrayHandler.fullWidthBox : null)]} onClick={addItem}>
            {renderIncreaseButton?.() ?? <FormArrayHandlerIncreaseButton />}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AmFormArrayHandler;
