import { useTheme } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { ChevronsLeft } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';
import { panelEntities } from '../../../router/entities';
import headerStyles from './header.style';

export default function CustomSeparator() {
  const { pathname } = useLocation();
  const theme = useTheme();
  const styles = headerStyles(theme);

  return (
    <Stack spacing={2} sx={styles.breadcrumbsWrapper}>
      <Breadcrumbs separator={<ChevronsLeft size="16" />} aria-label="breadcrumb">
        {panelEntities.map(
          (panelItem, index) =>
            panelItem.path == pathname && (
              <Link to={panelItem.path} key={index} style={styles.breadcrumbsLink}>
                {panelItem.title}
              </Link>
            )
        )}
      </Breadcrumbs>
    </Stack>
  );
}
