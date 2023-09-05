import { AppBar, Box, Toolbar, Typography, useTheme } from '@mui/material';

import headerStyles from './header.style';
import HeaderMenu from './header-menu';

const Header = () => {
  const theme = useTheme();
  const styles = headerStyles(theme);
  return (
    <AppBar position="sticky" enableColorOnDark sx={styles.headerWrapper}>
      <Toolbar sx={styles.headerToolbar}>
        <Typography variant="h6" noWrap component="div">
          <Box>
            <HeaderMenu />
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
