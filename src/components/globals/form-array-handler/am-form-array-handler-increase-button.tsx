import { Button, Icon } from '@mui/material';
import { Plus } from 'react-feather';
import { sxSeparator } from '../../../utils/sxSeparator';
import increaseDecreaseButtonStyles from './increase-decrease-button.styles';

const FormArrayHandlerIncreaseButton = () => {
  return (
    <Button
      color={'success'}
      size="small"
      sx={[
        sxSeparator(increaseDecreaseButtonStyles.increaseButton),
        sxSeparator(increaseDecreaseButtonStyles.inquiryCandidateButton),
      ]}
    >
      <Icon sx={increaseDecreaseButtonStyles.plusIcon}>
        <Plus />
      </Icon>
    </Button>
  );
};

export default FormArrayHandlerIncreaseButton;
