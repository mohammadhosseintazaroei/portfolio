import Divider from '@mui/material/Divider';
import { type FC } from 'react';
import BottomSidebarList from './sidebar-bottom-list.component';
import SidebarHeader from './sidebar-header.component';
import SidebarMenuList from './sidebar-menu-list.component';
import styles from './sidebar.style';
import { Drawer } from './styled/sidebar.styled';
interface PanelDrawerProps {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
}

const PanelDrawer: FC<PanelDrawerProps> = (props) => {
  const { open, handleDrawerOpen, handleDrawerClose } = props;

  return (
    <Drawer variant="permanent" open={open} anchor="left">
      <SidebarHeader open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />
      <Divider variant="middle" sx={styles.sideBarDivider} />
      <SidebarMenuList open={open} />

      <BottomSidebarList open={open} />
    </Drawer>
  );
};

export default PanelDrawer;
