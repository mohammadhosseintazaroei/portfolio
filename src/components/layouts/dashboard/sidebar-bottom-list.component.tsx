import { Button, Icon, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { HelpCircle } from 'react-feather';
import { useText } from '../../../hooks/useText';
import { sxSeparator } from '../../../utils/sxSeparator';
import styles from './sidebar.style';

interface Props {
  open: boolean;
}

function BottomSidebarList({ open }: Props) {
  const translator = useText();
  const [nightMode, setNightMode] = useState<boolean>(false);
  const handleNightMode = () => {
    return nightMode ? setNightMode(false) : setNightMode(true);
  };

  return (
    <List sx={[sxSeparator(styles.list), sxSeparator(styles.bottomList)]}>
      <Button
        sx={[
          sxSeparator(styles.listButton),
          sxSeparator(!open && styles.listButtonClose),
          sxSeparator(nightMode && styles.listButtonNightMode),
        ]}
        onClick={handleNightMode}
        size="small"
      ></Button>
      <Button sx={[sxSeparator(styles.listButton), sxSeparator(!open && styles.listButtonClose)]} size="small">
        <ListItem onClick={() => {}} sx={styles.listItem}>
          <ListItemIcon>
            <Icon sx={styles.menuIcon}>
              <HelpCircle />
            </Icon>
          </ListItemIcon>
          <ListItemText primary={translator('help')} sx={{ ...(!open && styles.menuTextClose) }} />
        </ListItem>
      </Button>
    </List>
  );
}

export default BottomSidebarList;
