import { DrawerHeader } from './styled/sidebar.styled';
import { Avatar, IconButton, useTheme } from '@mui/material';
import styles from './sidebar.style';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Logo from '../../../assets/images/logo.png';
import PersianLogo from '../../../assets/images/persian-logo.webp';
import { sxSeparator } from '../../../utils/sxSeparator';

interface Props {
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
}

function SidebarHeader({ open, handleDrawerOpen, handleDrawerClose }: Props) {
  const theme = useTheme();

  return (
    <DrawerHeader sx={[sxSeparator(styles.drawerHeader), sxSeparator(!open && { justifyContent: 'center' })]}>
      <>
        {open && (
          <IconButton onClick={handleDrawerClose} sx={styles.closeButton}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        )}
      </>

      <Avatar
        onClick={handleDrawerOpen}
        src={Logo}
        sx={[sxSeparator(styles.sidebarLogoMenu), sxSeparator(open && styles.sidebarLogoMenuHide)]}
      />
      <Avatar
        onClick={handleDrawerClose}
        src={PersianLogo}
        sx={[sxSeparator(styles.sidebarPersianLogoMenu), sxSeparator(!open && styles.sidebarPersianLogoMenuHide)]}
      />
    </DrawerHeader>
  );
}

export default SidebarHeader;
