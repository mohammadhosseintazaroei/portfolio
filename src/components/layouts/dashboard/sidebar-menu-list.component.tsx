import { Button, Icon, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { panelEntities } from '../../../router/entities';
import { useLocation, useNavigate } from 'react-router-dom';
import { useText } from '../../../hooks/useText';
import styles from '../dashboard/sidebar.style';
import { sxSeparator } from '../../../utils/sxSeparator';
interface Props {
  open: boolean;
}

function SidebarList({ open }: Props) {
  const translator = useText();
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;

  const removeStar = (path: string) => path.replace('*', '');
  const goToEntity = (path: string) => () => {
    navigate(removeStar(path));
  };

  return (
    <List sx={styles.list}>
      {panelEntities.map((item, index) => (
        <Button
          key={index}
          sx={[
            sxSeparator(styles.listButton),
            sxSeparator(!open && styles.listButtonClose),
            sxSeparator(currentUrl === item.path && styles.listButtonClicked),
          ]}
          size="small"
        >
          <ListItem key={index} onClick={goToEntity(item.path)} sx={styles.listItem}>
            <ListItemIcon sx={styles.menuItemIcon}>
              <Icon
                sx={[sxSeparator(styles.menuIcon), sxSeparator(currentUrl === item.path && styles.menuIconClicked)]}
              >
                {item.icon}
              </Icon>
            </ListItemIcon>
            {/* @ts-expect-error can't recognize string :) */}
            <ListItemText primary={translator(item.title)} sx={{ ...(!open && styles.menuTextClose) }} />
          </ListItem>
        </Button>
      ))}
    </List>
  );
}

export default SidebarList;
