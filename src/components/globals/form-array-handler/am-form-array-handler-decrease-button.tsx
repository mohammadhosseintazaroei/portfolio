import { Button, Icon } from '@mui/material';
import { Minus } from 'react-feather';
import { sxSeparator } from '../../../utils/sxSeparator';
import increaseDecreaseButtonStyles from './increase-decrease-button.styles';
interface Props {
  disabled?: boolean;
}
const FormArrayHandlerDecreaseButton = (props: Props) => {
  const { disabled } = props;
  return (
    <Button
      color={'error'}
      size="small"
      disabled={disabled}
      sx={[
        sxSeparator(increaseDecreaseButtonStyles.decreaseButton),
        sxSeparator(increaseDecreaseButtonStyles.inquiryCandidateButton),
      ]}
    >
      <Icon sx={increaseDecreaseButtonStyles.minusIcon}>
        <Minus />
      </Icon>
    </Button>
  );
};

export default FormArrayHandlerDecreaseButton;
