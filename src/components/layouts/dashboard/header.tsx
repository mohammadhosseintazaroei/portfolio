import { Toolbar, Typography, AppBar, useTheme } from '@mui/material';
import { type FC } from 'react';

import RouterBreadcrumbs from './breadcrumbs.component';
import headerStyles from './header.style';

interface HeaderProps {
  open: boolean;
}

const Header: FC<HeaderProps> = () => {
  const theme = useTheme();
  const styles = headerStyles(theme);
  return (
    <AppBar position="sticky" color="secondary" enableColorOnDark sx={styles.headerWrapper}>
      <Toolbar sx={styles.headerToolbar}>
        <Typography variant="h6" noWrap component="div" sx={styles.breadcrumbsLink}>
          <RouterBreadcrumbs />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
