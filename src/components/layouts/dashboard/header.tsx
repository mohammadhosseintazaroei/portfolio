import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';

import RouterBreadcrumbs from './breadcrumbs.component';
import headerStyles from './header.style';

const Header = () => {
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
